import { INVISIBLE_CHARS } from "../constants/invisible-chars";
import { toBinary } from "./to-binary";

export const encodeMessage = (message: string): string => {
    const binary = toBinary(message);
    return binary
        .match(/.{1,2}/g)!
        .map((bits) => INVISIBLE_CHARS[parseInt(bits, 2)])
        .join('');
};