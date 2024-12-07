import { decodeMessage } from "./decode-message";
import { hasEmbeddedData } from "./has-embedded-data";
import { START_MARKER } from "../constants/start-marker";
import { END_MARKER } from "../constants/end-marker";

export const extractData = (text: string) => {
    if (!hasEmbeddedData(text)) {
        return null;
    }
    const startIndex = text.indexOf(START_MARKER);
    const endIndex = text.indexOf(END_MARKER);

    if (startIndex === -1 || endIndex === -1) {
        return '';
    }

    const hiddenData = text.slice(startIndex + 1, endIndex);
    return decodeMessage(hiddenData);
}