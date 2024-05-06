import * as React from "react";
import Svg, {
  Path,
  Mask,
  Rect,
  G,
  Circle,
  Defs,
  ClipPath,
  RadialGradient,
  Stop,
} from "react-native-svg";

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

export const FilterIcon = ({ color = "#ffffff", size = 24 }) => (
  <Svg fill="none" viewBox="0 0 24 24" width={size} height={size}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
      clipRule="evenodd"
    />
  </Svg>
);

export const SearchIcon = ({ color = "#ffffff", size = 29 }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <G clipPath="url(#a)">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Circle
        cx={10.5}
        cy={10.5}
        r={6.5}
        stroke="#fff"
        strokeLinejoin="round"
      />
      <Path
        fill={color}
        d="M19.646 20.354a.5.5 0 0 0 .708-.708l-.708.708Zm.708-.708-5-5-.708.708 5 5 .708-.708Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const BackIcon = ({ color = "#ffffff", size = 29 }) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    stroke={color}
    viewBox="0 0 1024 1024"
  >
    <Path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-.8 88.8l309.6 280z" />
  </Svg>
);

export const CloseIcon = ({ color = "#1C274C", size = 29 }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <G stroke={color} strokeLinecap="round" strokeWidth={1.5}>
      <Path d="m14.5 9.5-5 5m0-5 5 5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" />
    </G>
  </Svg>
);

export const StarIcon = ({ color = "#FFE457" }) => (
  <Svg width={25} height={25} fill="none">
    <Path
      fill={color}
      d="m12.5 0 2.806 8.637h9.082l-7.347 5.338 2.806 8.638-7.347-5.338-7.347 5.338 2.806-8.638L.612 8.637h9.082L12.5 0Z"
    />
  </Svg>
);

export const StarIconEmpty = ({ color = "#FFE457" }) => (
  <Svg width={25} height={25} fill="none">
    <Path
      stroke={color}
      d="m12.371 2.471 2.33 7.174.113.345H22.72l-6.102 4.434-.294.214.112.345 2.331 7.174-6.102-4.434-.294-.213-.294.213-6.102 4.434 2.33-7.174.113-.345-.294-.214L2.022 9.99H9.928l.112-.345 2.331-7.174Z"
    />
  </Svg>
);

export const LocationIcon = () => (
  <Svg width={22} height={31} fill="none">
    <Path
      fill="red"
      fillRule="evenodd"
      d="M11 31s11-13.925 11-20c0-6.075-4.925-11-11-11S0 4.925 0 11s11 20 11 20Zm0-16a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const FacebookIcon = () => (
  <Svg width={30} height={30} fill="none">
    <Path
      fill="#1877F2"
      d="M28.125 15A13.125 13.125 0 0 0 15 1.875a13.125 13.125 0 0 0-2.051 26.09v-9.172h-3.33V15h3.332v-2.891C12.95 8.82 14.91 7 17.908 7c1.436 0 2.938.257 2.938.257v3.23h-1.655c-1.632 0-2.138 1.013-2.138 2.05V15h3.64l-.582 3.793h-3.06v9.173A13.127 13.127 0 0 0 28.125 15Z"
    />
    <Path
      fill="#fff"
      d="M20.11 18.793 20.69 15h-3.639v-2.462c0-1.037.507-2.05 2.138-2.05h1.655V7.257S19.342 7 17.906 7c-3 0-4.957 1.82-4.957 5.108V15h-3.33v3.793h3.332v9.173c1.359.213 2.743.213 4.102 0v-9.173h3.056Z"
    />
  </Svg>
);

export const WhatsAppIcon = () => (
  <Svg width={27} height={27} fill="none">
    <Path
      fill="#67C15E"
      fillRule="evenodd"
      d="M12.504 0C19.394 0 25 6.055 25 13.5c0 2.952-.882 5.69-2.38 7.913l1.557 5.015-4.804-1.658C17.397 26.183 15.038 27 12.496 27 5.606 27 0 20.944 0 13.5S5.605 0 12.496 0h.008Zm3.49 6.857c.242-.627.425-.65.793-.666.125-.008.264-.016.418-.016.478 0 .978.15 1.279.484.367.405 1.278 1.349 1.278 3.286 0 1.936-1.308 3.81-1.484 4.071-.183.262-2.55 4.294-6.222 5.937-2.873 1.285-3.725 1.166-4.379 1.015-.955-.222-2.153-.984-2.454-1.904-.301-.921-.301-1.707-.213-1.873.088-.167.331-.262.698-.46.367-.2 2.153-1.152 2.49-1.279.331-.134.647-.087.897.294.352.532.698 1.072.977 1.397.22.254.58.286.882.15.404-.182 1.535-.61 2.93-1.952 1.08-1.04 1.816-2.333 2.028-2.722.214-.396.022-.627-.146-.84-.184-.247-.36-.421-.544-.652-.184-.23-.287-.349-.404-.619-.125-.262-.037-.532.051-.73.088-.199.823-2.135 1.124-2.92Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const PhoneIcon = () => (
  <Svg width={26} height={26} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#4D98FA"
        d="M13 25.991c7.18 0 13-5.816 13-12.991S20.18.009 13 .009 0 5.825 0 13s5.82 12.991 13 12.991Z"
      />
      <Path
        fill="#fff"
        d="m17.111 14.56-1.494 1.168 2.862 3.661 1.494-1.168-2.862-3.66ZM17.707 19.994l-2.861-3.663a6.148 6.148 0 0 1-4.497-5.751L7.488 6.919s-2.712 3.884 1.543 9.325c4.255 5.442 8.676 3.75 8.676 3.75ZM9.751 5.148 8.257 6.316l2.861 3.66 1.495-1.167L9.75 5.148Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
