import texts from "./texts.json";

export const getText = (textName) => {
    return texts.result.content[textName];
};
