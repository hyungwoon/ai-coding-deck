import re, html, pathlib, sys

# 대본 마크다운 -> 인쇄용 HTML. 인자로 대본 파일명을 받는다(기본: 원리 강의 대본).
#   python3 lecture/build-script-pdf.py genai-principles-script.md && \
#   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
#     --no-pdf-header-footer --print-to-pdf=lecture/genai-principles-script.pdf file:///tmp/genai-principles-script.html

NAME = sys.argv[1] if len(sys.argv) > 1 else "genai-principles-script.md"
SRC = str(pathlib.Path(__file__).with_name(NAME))
OUT_HTML = "/tmp/" + pathlib.Path(NAME).stem + ".html"
raw = open(SRC, encoding="utf-8").read()

def inline(s):
    s = html.escape(s)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    s = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', s)
    return s

lines = raw.split("\n")
out = []
i = 0
in_section = False

def close_section():
    global in_section
    if in_section:
        out.append("</section>")
        in_section = False

while i < len(lines):
    ln = lines[i]
    if ln.startswith("# "):
        close_section()
        out.append(f"<h1>{inline(ln[2:])}</h1>")
    elif ln.startswith("## "):
        t = ln[3:]
        m = re.match(r'^(\d\d) · (.+?) \((\d+:\d\d–\d+:\d\d)\)$', t)
        close_section()
        out.append('<section class="slide">')
        in_section = True
        if m:
            out.append(f'<h2><span class="no">{m.group(1)}</span><span class="ttl">{inline(m.group(2))}</span>'
                       f'<span class="time">{html.escape(m.group(3))}</span></h2>')
        else:
            out.append(f'<h2 class="plain">{inline(t)}</h2>')
    elif ln.startswith("> "):
        buf = []
        while i < len(lines) and lines[i].startswith("> "):
            buf.append(lines[i][2:]); i += 1
        out.append("<blockquote>" + "<br>".join(inline(b) for b in buf) + "</blockquote>")
        continue
    elif ln.startswith("|"):
        rows = []
        while i < len(lines) and lines[i].startswith("|"):
            rows.append([c.strip() for c in lines[i].strip("|").split("|")]); i += 1
        body = [r for r in rows if not all(set(c) <= set("-: ") for c in r)]
        head, rest = body[0], body[1:]
        t = ["<table><thead><tr>"] + [f"<th>{inline(c)}</th>" for c in head] + ["</tr></thead><tbody>"]
        for r in rest:
            t += ["<tr>"] + [f"<td>{inline(c)}</td>" for c in r] + ["</tr>"]
        t.append("</tbody></table>")
        out.append("".join(t))
        continue
    elif ln.startswith("- "):
        items = []
        while i < len(lines) and lines[i].startswith("- "):
            items.append(lines[i][2:]); i += 1
        out.append("<ul>" + "".join(f"<li>{inline(x)}</li>" for x in items) + "</ul>")
        continue
    elif ln.strip() == "---":
        pass
    elif ln.strip():
        out.append(f"<p>{inline(ln.strip())}</p>")
    i += 1
close_section()

CSS = """
@page { size: A4; margin: 14mm 14mm 12mm; }
* { box-sizing: border-box; }
body { margin:0; color:#15181c; background:#fff;
  font-family:"Apple SD Gothic Neo","Pretendard","Noto Sans KR",-apple-system,sans-serif;
  font-size:11pt; line-height:1.72; -webkit-font-smoothing:antialiased; }
h1 { font-size:19pt; line-height:1.35; margin:0 0 4mm; letter-spacing:-0.02em; }
h1 + blockquote { margin-top:0; }
h2 { display:flex; align-items:baseline; gap:3mm; margin:0 0 2.4mm;
  font-size:14pt; letter-spacing:-0.02em; padding-bottom:1.6mm; border-bottom:1.5px solid #15181c; }
h2 .no { font-family:"SF Mono",ui-monospace,monospace; font-size:11pt; color:#8b9096; }
h2 .ttl { flex:1; }
h2 .time { font-family:"SF Mono",ui-monospace,monospace; font-size:9.5pt; color:#8b9096; font-weight:500; white-space:nowrap; }
h2.plain { font-size:13pt; border-bottom-width:1px; }
section.slide { break-inside:avoid; page-break-inside:avoid; margin:0 0 6.5mm; }
p { margin:0 0 2.2mm; }
strong { font-weight:700; background:linear-gradient(transparent 66%, #ffeaa0 66%); padding:0 1px; }
blockquote { margin:2mm 0 3mm; padding:0 0 0 4mm; border-left:2.5px solid #c9ced4; color:#4a5058; font-size:10.5pt; }
blockquote strong { background:none; }
ul { margin:0 0 3mm; padding-left:5mm; }
li { margin-bottom:1.4mm; }
code { font-family:"SF Mono",ui-monospace,monospace; font-size:9.5pt; background:#f1f3f5; padding:0.5mm 1mm; border-radius:2px; }
table { border-collapse:collapse; width:100%; margin:0 0 4mm; font-size:9.8pt; line-height:1.5; }
th,td { border:1px solid #dde1e5; padding:1.6mm 2.4mm; text-align:left; }
th { background:#f5f7f8; font-weight:700; }
"""

# 제목은 대본의 첫 번째 H1 을 그대로 쓴다 — 하드코딩하면 대본을 바꿔도 옛 제목이 남는다.
_h1 = re.search(r'^# (.+)$', raw, re.M)
TITLE = _h1.group(1).strip() if _h1 else pathlib.Path(NAME).stem

doc = f"""<!doctype html><html lang="ko"><head><meta charset="utf-8">
<title>{html.escape(TITLE)}</title><style>{CSS}</style></head>
<body>{''.join(out)}</body></html>"""
pathlib.Path(OUT_HTML).write_text(doc, encoding="utf-8")
print("html chars:", len(doc))
