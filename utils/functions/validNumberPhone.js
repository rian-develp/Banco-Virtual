export const validNumberPhone = (numberPhone) => {
    if(!numberPhone.match(/\(?[1-9][1-9]\)?[\s]?(9[0-9]{4}|8[0-9]{3})[-]([0-9]{4})/gm)){
        return false;
    } else {
        return true;
    }
}   