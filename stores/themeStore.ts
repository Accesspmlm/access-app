import { create } from 'zustand'

interface Theme {
    primary: string;
    bg: string;
    white: string;
    neutral: string;
}

const themeStore = create<Theme>((set) => ({
  primary: "#FA5368",
  bg: "#012858",
  white: "#ffffff",
  neutral: "#BDD6F5"
}));

export default themeStore;