import { transformText } from "./transformText";

export const handleCardName = (cardName) => {
    const cardNameGettedFromTransformedText = transformText(cardName);

    switch (cardNameGettedFromTransformedText) {
        case 'nubank':
            return 'NuBank';
            break;

        case 'mastercard':
            return 'MasterCard';
            break;

        case 'itaú':
            return 'Itaú';
            break;

        case 'itau':
            return 'Itaú';
            break;

        case 'hipercard':
            return 'HiperCard';
            break;

        case 'picpay':
            return 'PicPay';
            break;

        default: false
            break;
    }
}