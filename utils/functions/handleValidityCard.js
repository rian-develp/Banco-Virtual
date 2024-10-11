export const handleValidityCard = (validityDate) => {
    const month = parseInt(validityDate.split('/')[0]);
    const year = parseInt(validityDate.split('/')[1]);
    const atuallYear = new Date().getUTCFullYear();

    if (month < 0 || month > 12 || year < atuallYear) {
        return false;
    } else {
        return true;
    }
}