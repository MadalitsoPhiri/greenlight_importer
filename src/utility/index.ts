import axios from "axios";
import { Card, DigitalWalletCreateCustomerDto, DigitalWalletCustomerObjectDto, PROGRAM_ENDPOINTS, PROGRAM_TYPES_PROPERTY, PosabitCustomer, PosabitCustomerProperties, changePointsInProgramResponseDto } from "./types.js";

 export const getCustomerById = async (
    customerId: number,
  ): Promise<PosabitCustomer | void> =>{
    try {
      const { data }: { data: { customer: PosabitCustomer } } = await axios({
        method: 'get',
        url: `${process.env.POSABIT_BASE_URL}/v2/venue/customers/${customerId}`,
        headers: {
          Authorization: `Bearer ${process.env.POSABIT_API_TOKEN}`,
          Accept: 'application/json',
        },
      });

      return data?.customer as PosabitCustomer;
    } catch (error) {
     
      return error;
    }
  }

  export const extractNumberCharacters = (stringWithNumbers: string) => {
    const extractedNumberCharacters = stringWithNumbers.replace(/\D/g, '');
    return extractedNumberCharacters;
  };

  export const normalizePhoneNumber = (phoneNumber: string) => {
    let formattedPhoneNumber = extractNumberCharacters(phoneNumber);
  
    const alreadyStartsWithOne = formattedPhoneNumber.charAt(0) === '1';
    if (!alreadyStartsWithOne) {
      formattedPhoneNumber = '1' + formattedPhoneNumber;
    }
  
    return formattedPhoneNumber;
  };
  export const createDigitalWalletCustomer = async(
    payload: DigitalWalletCreateCustomerDto,
  ): Promise<DigitalWalletCustomerObjectDto>=> {
    try {
      const { data }: { data: { data: DigitalWalletCustomerObjectDto } } =
        await axios({
          method: 'post',
          url: `${process.env.DIGITAL_WALLET_URL}/customers`,
          headers: {
            'X-API-Key':process.env.DIGITAL_WALLET_API_KEY,
          },
          data: payload,
        });

      return data?.data;
    } catch (error) {
       console.log('failed to create digitalwallet customer',error);
      return null;
    }
  }

  export const createCustomerCard = async(
    customerId: string,
    templateId: number | string,
  ): Promise<Card> =>{
    try {
      const { data }: { data: { data: Card } } = await axios({
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

      return data?.data;
    } catch (error) {
     console.error('failed to create card',error)
      return null;
    }
  }

  export const createPosabitCustomer = async(
    customer: PosabitCustomerProperties,
  ): Promise<PosabitCustomer | void> => {
    try {
      const { data }: { data: { customer: PosabitCustomer } } = await axios({
        method: 'post',
        url: `${process.env.POSABIT_BASE_URL}/v2/venue/customers`,
        headers: {
          Authorization: `Bearer ${process.env.POSABIT_API_TOKEN}`,
          Accept: 'application/json',
        },
        data: { customer: customer },
      });

      return data?.customer as PosabitCustomer;
    } catch (error) {
console.error('failed to create posabit customer',error)

      return null;
    }
  }

export const updateCustomerNativeLoyalty = async(
    customerId: number,
    pointsToUpdate = 0,
  ): Promise<PosabitCustomer | void> =>{
    try {
      const { data }: { data: { customer: PosabitCustomer } } = await axios({
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

      return data?.customer;
    } catch (error) {
    console.error('updateCustomerNativeLoyalty failed',error)
    
    }
  }

 export const addToProgram = async (cardId: string, amountToAdd: number) => {
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
   const { data }: { data: { data: changePointsInProgramResponseDto } } =
     axiosCall;

   return data;
 };

 export const subtractFromProgram = async (
   cardId: string,
   amountToSubtract: number
 ) => {
   if (amountToSubtract <= 0) {
     return;
   }

   //  https://api.digitalwallet.cards/api/v2/cards/{id}/add-transaction-amount
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
   const { data }: { data: { data: changePointsInProgramResponseDto } } =
     axiosCall;

   return data;
 };

 export const findCardListByCustomerId = async (
   customerId: string
 ): Promise<Card[] | void> => {
   try {
     const { data } = await axios({
       method: "get",
       url: `${process.env.DIGITAL_WALLET_URL}/cards`,
       headers: {
         "X-API-Key": process.env.DIGITAL_WALLET_API_KEY,
       },
       params: { customerId },
     });

     const cardListFound = data?.data || [];

     return cardListFound;
   } catch (error) {
     console.log("error", error);
     return [];
   }
 };

 export const findCardByCustomerId = async (
   customerId: string
 ): Promise<Card | void> => {
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

     const cardFound = data?.data?.[0];

     if (!cardFound) {
       return;
     }

     return cardFound;
   } catch (error) {
     console.log("error", error);
   }
 };