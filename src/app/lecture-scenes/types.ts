export interface SubtitleCue {
  text: string;
  startFrame: number;
  endFrame: number;
}

export interface SlideManifest {
  slideId: string;
  title: string;
  audioFile: string;
  durationSec: number;
  durationFrames: number;
  cues: SubtitleCue[];
}

export interface Manifest {
  slides: SlideManifest[];
  totalDurationFrames: number;
}
