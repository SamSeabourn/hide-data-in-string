import { END_MARKER } from "../constants/end-marker";
import { START_MARKER } from "../constants/start-marker";
import { encodeMessage } from "./encode-message";

export const embedData = (text: string, hiddenMessage: string) => {
    const hiddenData = encodeMessage(hiddenMessage);
    return `${text}${START_MARKER}${hiddenData}${END_MARKER}`;
}