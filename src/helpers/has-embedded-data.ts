import { CHAR_TO_BINARY } from "../constants/char-to-binary";

export const hasEmbeddedData = (text: string): boolean =>
    Array.from(text).some((char) => char in CHAR_TO_BINARY);