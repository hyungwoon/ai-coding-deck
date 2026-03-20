import { Composition } from "remotion";
import { LectureDeck } from "./LectureDeck";
import { FPS, WIDTH, HEIGHT } from "./constants";
import manifest from "../public/audio/manifest.json";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LectureDeck"
      component={LectureDeck}
      durationInFrames={manifest.totalDurationFrames}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{ manifest }}
    />
  );
};
