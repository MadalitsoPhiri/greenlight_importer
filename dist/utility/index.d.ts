import { Card, DigitalWalletCreateCustomerDto, DigitalWalletCustomerObjectDto, PosabitCustomer, PosabitCustomerProperties, changePointsInProgramResponseDto } from "./types.js";
export declare const getCustomerById: (customerId: number) => Promise<PosabitCustomer | void>;
export declare const extractNumberCharacters: (stringWithNumbers: string) => string;
export declare const normalizePhoneNumber: (phoneNumber: string) => string;
export declare const createDigitalWalletCustomer: (payload: DigitalWalletCreateCustomerDto) => Promise<DigitalWalletCustomerObjectDto>;
export declare const createCustomerCard: (customerId: string, templateId: number | string) => Promise<Card>;
export declare const createPosabitCustomer: (customer: PosabitCustomerProperties) => Promise<PosabitCustomer | void>;
export declare const updateCustomerNativeLoyalty: (customerId: number, pointsToUpdate?: number) => Promise<PosabitCustomer | void>;
export declare const addToProgram: (cardId: string, amountToAdd: number) => Promise<{
    data: changePointsInProgramResponseDto;
}>;
export declare const subtractFromProgram: (cardId: string, amountToSubtract: number) => Promise<{
    data: changePointsInProgramResponseDto;
}>;
export declare const findCardListByCustomerId: (customerId: string) => Promise<Card[] | void>;
export declare const findCardByCustomerId: (customerId: string) => Promise<Card | void>;
