export const trimText = (textParam, length) => {
    const text = textParam || "";
    return text.length > length ? `${text.slice(0, length)}...` : text;
};
