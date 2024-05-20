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

export const FilterIcon = ({ color = "#3BA6B8", size = 24 }) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M9.907 4a48.047 48.047 0 0 0 .186 0c.369 0 .731-.001 1.054.085a2.5 2.5 0 0 1 1.768 1.768c.086.323.086.685.085 1.054V7h8a1 1 0 1 1 0 2h-8v.093c0 .369.001.731-.085 1.054a2.5 2.5 0 0 1-1.768 1.768c-.323.086-.685.086-1.054.085h-.186c-.369 0-.731.001-1.054-.085a2.5 2.5 0 0 1-1.768-1.768C7 9.824 7 9.462 7 9.093V9H5a1 1 0 0 1 0-2h2v-.093c0-.369-.001-.731.085-1.054a2.5 2.5 0 0 1 1.768-1.768C9.176 4 9.538 4 9.907 4Zm-.408 2.005c-.107.005-.132.013-.128.012a.5.5 0 0 0-.354.354.834.834 0 0 0-.012.128C9 6.61 9 6.759 9 7v2c0 .242 0 .39.005.501.005.107.013.132.012.128a.5.5 0 0 0 .354.354c-.004-.001.02.007.128.012.112.005.26.005.501.005.242 0 .39 0 .501-.005.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.354c-.001.004.007-.02.012-.128C11 9.39 11 9.241 11 9V7c0-.242 0-.39-.005-.501-.005-.107-.013-.132-.012-.128m-1.484-.366C9.61 6 9.759 6 10 6l-.501.005ZM10 6c.242 0 .39 0 .501.005L10 6Zm.501.005c.094.005.125.011.128.012l-.128-.012ZM15.907 12h.186c.369 0 .731-.001 1.054.085a2.5 2.5 0 0 1 1.768 1.768c.086.323.086.685.085 1.054V15h2a1 1 0 1 1 0 2h-2v.093c0 .369.001.731-.085 1.054a2.5 2.5 0 0 1-1.768 1.768c-.323.086-.685.086-1.054.085h-.186c-.369 0-.731.001-1.054-.085a2.5 2.5 0 0 1-1.768-1.768C13 17.824 13 17.462 13 17.093V17H5a1 1 0 1 1 0-2h8v-.093c0-.369-.001-.731.085-1.054a2.5 2.5 0 0 1 1.768-1.768c.323-.086.685-.086 1.054-.085Zm-.408 2.005c-.107.005-.132.013-.128.012a.5.5 0 0 0-.354.354c.001-.004-.007.021-.012.128C15 14.61 15 14.759 15 15v2c0 .242 0 .39.005.501.005.107.013.132.012.128a.5.5 0 0 0 .354.354c-.004-.001.021.007.128.012.112.005.26.005.501.005.242 0 .39 0 .501-.005.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.354c-.001.004.007-.02.012-.128C17 17.39 17 17.241 17 17v-2c0-.242 0-.39-.005-.501-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.007-.128-.012C16.39 14 16.241 14 16 14c-.242 0-.39 0-.501.005Z"
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

export const Logo = ({ size = 35, color = "#3BA6B8" }) => (
  <Svg width={size} height={size} fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M19.974.392a8 8 0 0 0-4.948 0L9.156 2.3a8 8 0 0 0-4 2.908l-3.63 5A8 8 0 0 0 0 14.908v6.184a8 8 0 0 0 1.526 4.7l3.63 5a8 8 0 0 0 4 2.909l5.87 1.908a8 8 0 0 0 4.948 0l5.87-1.908a8 8 0 0 0 4-2.908l3.63-5a8 8 0 0 0 1.526-4.7v-6.184a8 8 0 0 0-1.526-4.7l-3.63-5a8 8 0 0 0-4-2.909L19.973.392Zm-1.16 12.035-2.422 2.181v16.01h1.569v-3.252h.54v2.364h2.325v-1.324h-1.101v-3.563h1.1V23.52h-2.323v2.396h-.541V15.314l1.978-1.893-1.126-.994Zm-4.165 3.999H12.66L9.741 13.4V9.723l5.71-5.726h4.04l5.325 5.433v3.97l-5.42 5.238v-1.887l4.009-3.904-.096-2.733-4.651-4.653h-2.566l-4.875 4.945v2.506l3.432 3.514Zm-.03-6.883.974 1.04 1.82-1.811 3.638 3.655 1.105-1.04-4.614-4.728-2.924 2.884Zm-1.775 1.666.994-1 2.206 2.355 1.491-1.355.187.161-2.486 2.388-2.392-2.55Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Scan = ({ size = 9, color = "#ffffff" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
    <Path
      fill={color}
      d="M3.333 3.333h5v5h-5v-5Zm13.334 0v5h-5v-5h5Zm-5 9.167h1.666v-1.667h-1.666V9.167h1.666v1.666H15V9.167h1.667v1.666H15V12.5h1.667V15H15v1.667h-1.667V15h-2.5v1.667H9.167v-3.334h2.5V12.5Zm1.666 0V15H15v-2.5h-1.667Zm-10 4.167v-5h5v5h-5ZM5 5v1.667h1.667V5H5Zm8.333 0v1.667H15V5h-1.667ZM5 13.333V15h1.667v-1.667H5ZM3.333 9.167H5v1.666H3.333V9.167Zm4.167 0h3.333V12.5H9.167v-1.667H7.5V9.167ZM9.167 5h1.666v3.333H9.167V5Zm-7.5-3.333V5H0V1.667A1.667 1.667 0 0 1 1.667 0H5v1.667H1.667ZM18.333 0A1.666 1.666 0 0 1 20 1.667V5h-1.667V1.667H15V0h3.333ZM1.667 15v3.333H5V20H1.667A1.667 1.667 0 0 1 0 18.333V15h1.667Zm16.666 3.333V15H20v3.333A1.666 1.666 0 0 1 18.333 20H15v-1.667h3.333Z"
    />
  </Svg>
);

export const Star = ({ size = 20, color = "#FFE457" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
    <Path
      fill={color}
      fillRule="evenodd"
      d="m5.802 3.397.278-.5C7.157.966 7.695 0 8.5 0c.805 0 1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004.238.181.535.248 1.13.383l.54.122c2.091.473 3.136.71 3.385 1.51.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004-.09.293-.06.609.001 1.24l.016.162.04.414c.216 2.224.323 3.336-.328 3.83-.651.494-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384-.295 0-.573.128-1.13.384l-.506.233c-1.957.902-2.936 1.352-3.587.858-.651-.494-.544-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.241-.09-.293-.293-.53-.698-1.003l-.369-.432C.513 8.05-.2 7.215.048 6.415c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383A1.08 1.08 0 0 0 5.2 4.32c.189-.181.339-.45.602-.922Zm6.523 9.353Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Like = ({ size = 20, color = "#1380d8" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z"
      clipRule="evenodd"
    />
  </Svg>
);

export const HoltelsIcon = ({ size = 25, color = "#3BA6B8" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 25">
    <Path
      fill={color}
      d="M12.565 4.017V2.463A2.466 2.466 0 0 0 10.102 0a2.466 2.466 0 0 0-2.463 2.463v1.554C3.255 5.12 0 9.093 0 13.813v5.779c0 .603.489 1.092 1.092 1.092h2.236a2.601 2.601 0 1 0 3.906 0h5.736a2.601 2.601 0 1 0 3.906 0h2.236c.603 0 1.092-.49 1.092-1.092v-5.779c0-4.72-3.256-8.694-7.64-9.796ZM8.73 2.463c0-.756.615-1.37 1.37-1.37.757 0 1.372.614 1.372 1.37v1.344a10.14 10.14 0 0 0-1.371-.095c-.465 0-.923.034-1.371.095V2.463Zm2.944 8.071H8.528v-.612h3.147v.612ZM18.02 18.5h-2.327c.348-.305.572-.747.572-1.244v-5.062c0-.915-.744-1.66-1.66-1.66h-1.472V9.59c0-.619-.504-1.123-1.123-1.123H8.195c-.62 0-1.123.504-1.123 1.123v.945H5.599c-.915 0-1.66.745-1.66 1.66v5.062c0 .497.225.94.572 1.244H2.184v-4.687c0-4.365 3.552-7.917 7.918-7.917s7.917 3.552 7.917 7.917V18.5Z"
    />
  </Svg>
);

export const RestaurantsIcon = ({ size = 25, color = "#B8773B" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 25">
    <Path
      fill={color}
      d="M3.232 13.159c.078.11.204.174.339.174h17.854c.134 0 .26-.065.339-.174l1.487-2.084a.416.416 0 0 0-.338-.658h-.844c-.213-4.954-4.202-8.943-9.154-9.157V.833h.833a.417.417 0 1 0 0-.833h-2.5a.417.417 0 1 0 0 .833h.833v.427c-4.952.214-8.941 4.203-9.154 9.157h-.844a.416.416 0 0 0-.339.658l1.488 2.084Zm2.413-6.285a7.95 7.95 0 0 1 6.853-3.957.417.417 0 1 1 0 .833 7.114 7.114 0 0 0-6.132 3.542.416.416 0 1 1-.72-.418ZM3.333 11.25h18.77l-.893 1.25H3.785l-.893-1.25h.44ZM24.781 15.427c-.733-1.034-1.472-1.056-3.335-.075l-3.593 2.197c-.28.15-.718.243-1.224.301-.393.045-.75.215-1.078.436a.245.245 0 0 1-.137.047h-4.048c-1.25 0-1.25.627-1.25.834a.416.416 0 1 1-.833 0c0-1.044.778-1.667 2.083-1.667h3.898c0-.29-.115-.61-.347-.956-.654-.974-1.773-1.556-2.995-1.556h-1.625c-.882 0-1.73-.272-2.387-.768-1.494-1.127-3.846.091-4.994.82v-.873H0V25h2.916v-1.25h5.416c.853 0 1.704-.064 2.547-.192l5.401-.822a2.82 2.82 0 0 0 .573-.066c.498-.07.973-.307 1.376-.687l6.314-4.918.01-.008c.49-.399.594-1.114.228-1.63Zm-22.698.2v8.539H.833V15h1.25v.628Z"
    />
  </Svg>
);

export const TransportIcon = ({ size = 25, color = "#3B40B8" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 25">
    <Path
      fill={color}
      d="M5.667 0c-2.273 0-5 1.239-5 4.577V20s0 1.667 1.666 1.667v1.666S2.333 25 4 25s1.667-1.667 1.667-1.667v-1.666h11.666v1.666S17.333 25 19 25s1.667-1.667 1.667-1.667v-1.666s1.666 0 1.666-1.667V4.577c0-3.41-2.06-4.577-4.332-4.577H5.667Zm.416 2.5h10.834a.416.416 0 1 1 0 .833H6.083a.416.416 0 1 1 0-.833ZM4 5h15c1.667 0 1.667 1.611 1.667 1.611v5.056s0 1.666-1.667 1.666H4c-1.667 0-1.667-1.666-1.667-1.666v-5S2.333 5 4 5Zm0 11.667A1.667 1.667 0 1 1 4 20a1.667 1.667 0 0 1 0-3.333Zm15 0A1.667 1.667 0 1 1 19 20a1.667 1.667 0 0 1 0-3.333Z"
    />
  </Svg>
);

export const ShopIcon = ({ size = 25, color = "#B83B3B" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 25">
    <Path
      fill={color}
      d="M1.25 12.5c.512.363 1.2.537 1.875.537.688 0 1.362-.175 1.875-.537A3.061 3.061 0 0 0 6.25 10c0 1.037.463 1.925 1.25 2.5.512.363 1.2.537 1.875.537.688 0 1.363-.175 1.875-.537A3.061 3.061 0 0 0 12.5 10c0 1.037.463 1.925 1.25 2.5.512.363 1.2.537 1.887.537.675 0 1.35-.175 1.863-.537a3.061 3.061 0 0 0 1.25-2.5c0 1.037.462 1.925 1.25 2.5.512.363 1.2.537 1.875.537.688 0 1.363-.175 1.875-.537.788-.575 1.25-1.463 1.25-2.5V8.75L21.25 0H5L0 8.75V10c0 1.037.463 1.925 1.25 2.5Zm2.5 11.238H10v-6.25h5v6.25h6.25v-8.75c-.462-.063-.9-.275-1.25-.538-.788-.563-1.25-.912-1.25-1.95 0 1.037-.475 1.387-1.25 1.95-.512.375-1.188.538-1.863.55-.687 0-1.375-.175-1.887-.55-.787-.563-1.25-.912-1.25-1.95 0 1.037-.475 1.387-1.25 1.95-.512.375-1.188.538-1.875.55-.675 0-1.363-.175-1.875-.55-.787-.563-1.25-.912-1.25-1.962 0 1.05-.475 1.4-1.25 1.962-.362.263-.787.475-1.25.55v8.738Z"
    />
  </Svg>
);

export const ToursIcon = ({ size = 25, color = "#B89D3B" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 25 25">
    <Path
      fill={color}
      d="M10.898 18.072a1.197 1.197 0 0 0-.072-.314L9.42 14.025l.197-1.304-.407-.015c-.92-.034-1.541-.695-1.685-1.13L6.248 7.709l2.185 3.567a.998.998 0 0 0 .812.475c1.709.063 2.934.111 3.773.145a.998.998 0 0 0 1.038-.997c0-.539-.426-.981-.965-1.001L9.852 9.78 7.874 6.55l2.336 2.247.273-1.809a1.485 1.485 0 0 0-1.246-1.69L6.62 4.902a1.487 1.487 0 0 0-.369-.01l.472-1.848a2.197 2.197 0 0 0 4.203-.517 2.198 2.198 0 0 0-4.292-.913 1.206 1.206 0 0 0-.678-.458L2.84.36a1.21 1.21 0 0 0-1.472.873l-.343 1.342a1.21 1.21 0 0 0 .873 1.473l.55.14a1.21 1.21 0 0 0-.892.911L.03 11.896a1.21 1.21 0 0 0 .916 1.446l2.095.47c.287.065.573.022.816-.103.007.12.033.24.08.357l1.474 3.76-2.926 3.814a1.195 1.195 0 1 0 1.897 1.455l3.336-4.35c.255-.332.317-.773.164-1.163l-1.257-3.207a.174.174 0 1 1 .325-.125l1.581 4.199.494 5.463a1.195 1.195 0 0 0 2.38-.215l-.507-5.625Z"
    />
  </Svg>
);
