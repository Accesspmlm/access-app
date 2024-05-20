import { create } from "zustand";

interface Theme {
  primary: string;
  bg: string;
  white: string;
  neutral: string;
  secondaryText: string;
  gray: string;
  gray2: string;
  green: string;
  blue: string;
  black: string;
  yellow: string;
  hotelsColor: string;
  restaurantsColor: string;
  transportColor: string;
  shopColor: string;
  toursColor: string;
  red: string;
}

const themeStore = create<Theme>((set) => ({
  primary: "#3AC1D7",
  bg: "#f1f1f1",
  white: "#ffffff",
  neutral: "#E0E0E0",
  secondaryText: "#7C7C7C",
  gray: "#2F2F2F",
  gray2: "#363636",
  green: "#06CF32",
  blue: "#62E3FF",
  black: "#1F1F1F",
  yellow: "#FFE457",
  hotelsColor: "#3BA6B8",
  restaurantsColor: "#B8773B",
  transportColor: "#3B40B8",
  shopColor: "#B83B3B",
  toursColor: "#B89D3B",
  red: "#FF2F2F",
}));

export default themeStore;
