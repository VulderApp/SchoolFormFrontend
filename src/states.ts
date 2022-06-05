import { atom } from "recoil";
import { getLanguageShortCode } from "./utils/languageUtil";
import { LANGUAGE_KEY } from "./contants";

export const errorMessage = atom<string | null>({
  key: "errorMessage",
  default: null,
});

export const language = atom<string>({
  key: "language",
  default: localStorage.getItem(LANGUAGE_KEY) ?? getLanguageShortCode(),
});

export const darkMode = atom<boolean>({
  key: "darkMode",
  default: window.matchMedia("(prefers-color-scheme: dark)").matches,
});
