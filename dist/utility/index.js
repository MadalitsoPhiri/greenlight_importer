import axios from "axios";
export const getCustomerById = async (customerId) => {
    try {
        const { data } = await axios({
            method: 'get',
            url: `${process.env.POSABIT_BASE_URL}/v2/venue/customers/${customerId}`,
            headers: {
                Authorization: `Bearer ${process.env.POSABIT_API_TOKEN}`,
                Accept: 'application/json',
            },
        });
        return data === null || data === void 0 ? void 0 : data.customer;
    }
    catch (error) {
        return error;
    }
};
export const extractNumberCharacters = (stringWithNumbers) => {
    const extractedNumberCharacters = stringWithNumbers.replace(/\D/g, '');
    return extractedNumberCharacters;
};
export const normalizePhoneNumber = (phoneNumber) => {
    let formattedPhoneNumber = extractNumberCharacters(phoneNumber);
    const alreadyStartsWithOne = formattedPhoneNumber.charAt(0) === '1';
    if (!alreadyStartsWithOne) {
        formattedPhoneNumber = '1' + formattedPhoneNumber;
    }
    return formattedPhoneNumber;
};
export const createDigitalWalletCustomer = async (payload) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: `${process.env.DIGITAL_WALLET_URL}/customers`,
            headers: {
                'X-API-Key': process.env.DIGITAL_WALLET_API_KEY,
            },
            data: payload,
        });
        return data === null || data === void 0 ? void 0 : data.data;
    }
    catch (error) {
        console.log('failed to create digitalwallet customer', error);
        return null;
    }
};
export const createCustomerCard = async (customerId, templateId) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: `${process.env.DIGITAL_WALLET_URL}/cards`,
            headers: {
                'X-API-Key': process.env.DIGITAL_WALLET_API_KEY,
            },
            data: {
                templateId,
                customerId,
            },
        });
        return data === null || data === void 0 ? void 0 : data.data;
    }
    catch (error) {
        console.error('failed to create card', error);
        return null;
    }
};
export const createPosabitCustomer = async (customer) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: `${process.env.POSABIT_BASE_URL}/v2/venue/customers`,
            headers: {
                Authorization: `Bearer ${process.env.POSABIT_API_TOKEN}`,
                Accept: 'application/json',
            },
            data: { customer: customer },
        });
        return data === null || data === void 0 ? void 0 : data.customer;
    }
    catch (error) {
        console.error('failed to create posabit customer', error);
        return null;
    }
};
export const updateCustomerNativeLoyalty = async (customerId, pointsToUpdate = 0) => {
    try {
        const { data } = await axios({
            method: 'put',
            url: `${process.env.POSABIT_BASE_URL}/v2/venue/customers/${customerId}`,
            headers: {
                Authorization: `Bearer ${process.env.POSABIT_API_TOKEN}`,
                Accept: 'application/json',
            },
            data: {
                customer: {
                    points_adjustment: pointsToUpdate,
                },
            },
        });
        return data === null || data === void 0 ? void 0 : data.customer;
    }
    catch (error) {
        console.error('updateCustomerNativeLoyalty failed', error);
    }
};
export const addToProgram = async (cardId, amountToAdd) => {
    if (amountToAdd <= 0) {
        return;
    }
    const axiosCall = await axios({
        method: "post",
        url: `${process.env.DIGITAL_WALLET_URL}/cards/${cardId}/add-stamp`,
        headers: {
            "X-API-Key": process.env.DIGITAL_WALLET_API_KEY,
        },
        data: {
            stamps: amountToAdd,
        },
    });
    const { data } = axiosCall;
    return data;
};
export const subtractFromProgram = async (cardId, amountToSubtract) => {
    if (amountToSubtract <= 0) {
        return;
    }
    const axiosCall = await axios({
        method: "post",
        url: `${process.env.DIGITAL_WALLET_URL}/cards/${cardId}/subtract-reward`,
        headers: {
            "X-API-Key": process.env.DIGITAL_WALLET_API_KEY,
        },
        data: {
            rewards: amountToSubtract,
        },
    });
    const { data } = axiosCall;
    return data;
};
export const findCardListByCustomerId = async (customerId) => {
    try {
        const { data } = await axios({
            method: "get",
            url: `${process.env.DIGITAL_WALLET_URL}/cards`,
            headers: {
                "X-API-Key": process.env.DIGITAL_WALLET_API_KEY,
            },
            params: { customerId },
        });
        const cardListFound = (data === null || data === void 0 ? void 0 : data.data) || [];
        return cardListFound;
    }
    catch (error) {
        console.log("error", error);
        return [];
    }
};
export const findCardByCustomerId = async (customerId) => {
    var _a;
    try {
        if (!customerId) {
            return;
        }
        const { data } = await axios({
            method: "get",
            url: `${process.env.DIGITAL_WALLET_URL}/cards`,
            headers: {
                "X-API-Key": process.env.DIGITAL_WALLET_API_KEY,
            },
            params: { customerId },
        });
        const cardFound = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a[0];
        if (!cardFound) {
            return;
        }
        return cardFound;
    }
    catch (error) {
        console.log("error", error);
    }
};
//# sourceMappingURL=index.js.map