export const transformText = (cardName) => {
    
    const text = cardName.trim();
    const transformedText = text.split(" ").join("");
    const newText = transformedText.toLowerCase();
    return newText;
}