import { atom } from "recoil";
import { getLanguageShortCode } from "./components/utils/languageUtil";
import { LANGUAGE_KEY } from "./contants";

export const errorMessage = atom<string | null>({
  key: "errorMessage",
  default: null,
});

export const language = atom<string>({
  key: "language",
  default: localStorage.getItem(LANGUAGE_KEY) ?? getLanguageShortCode(),
});
