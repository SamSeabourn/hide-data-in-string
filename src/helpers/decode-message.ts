import { CHAR_TO_BINARY } from "../constants/char-to-binary";
import { fromBinary } from "./from-binary";

export const decodeMessage = (encoded: string): string => {
    const binary = Array.from(encoded)
        .map((char) => CHAR_TO_BINARY[char])
        .join('');
    return fromBinary(binary);
};