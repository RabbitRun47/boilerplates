export const trimText = (textParam: string | undefined, length: number) => {
    const text = textParam || "";
    return text.length > length ? `${text.slice(0, length)}...` : text;
};
