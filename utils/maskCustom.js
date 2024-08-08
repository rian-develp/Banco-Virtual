export const maskCustom = (maskCustom, text) => {
    var i = 0;
    var lastReplaceIndex = -1;
    text = text.replace(/\D/g , '');
  
    const filledMask = maskCustom.replaceAll('#', (letra ,match) => {
      if (i >= text.length) {
        return '#';
      }
      lastReplaceIndex = match;
      return text[i++];
    });
    var mask = filledMask.substring(0, lastReplaceIndex+1)
    return mask;
  }