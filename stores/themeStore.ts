import { create } from 'zustand'

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
}

const themeStore = create<Theme>((set) => ({
  primary: "#FA5368",
  bg: "#012858",
  white: "#ffffff",
  neutral: "#BDD6F5",
  secondaryText: "#D0D0D0",
  gray: "#2F2F2F",
  gray2: "#363636",
  green: "#06CF32",
  blue: "#62E3FF",
}));

export default themeStore;