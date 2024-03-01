import * as React from "react";
import Svg, { Path, Mask,
  Rect,
  G,
  Circle,
  Defs,
  ClipPath,
  RadialGradient,
  Stop, } from "react-native-svg";

export const HomeIcon = ({ color = "#ffffff", size = 22 }) => (
  <Svg fill="none" width={size} height={size}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 11.204v1.521c0 3.9 0 5.851-1.172 7.063C18.657 21 16.771 21 13 21H9c-3.771 0-5.657 0-6.828-1.212C1 18.576 1 16.626 1 12.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C8.889 1.622 9.892 1 11 1c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715M14 17H8"
    />
  </Svg>
);
