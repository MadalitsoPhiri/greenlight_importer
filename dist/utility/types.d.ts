export interface GreenLightCustomer {
    ReferenceID: string;
    FirstName: string;
    Surname: string;
    EmailAddress: string;
    PhoneNumber: string;
    Nickname: string;
    CompanyName: string;
    StreetAddress1: string;
    StreetAddress2: string;
    City: string;
    State: string;
    PostalCode: string;
    Birthday: string;
    Memo: string;
    SquareCustomerID: string;
    CreationSource: string;
    FirstVisit: string;
    LastVisit: string;
    TransactionCount: number;
    TotalSpend: string;
    EmailSubscriptionStatus: string;
    InstantProfile: string;
}
export interface PosabitCustomerProperties {
    first_name?: string;
    terms_agreed?: boolean;
    points?: number;
    last_name?: string;
    birth_year?: number;
    gender?: string;
    telephone?: string;
    email?: string;
    active?: boolean;
    sms_opt_out?: boolean;
    sms_opt_in?: boolean;
    address?: string;
    zipcode?: string;
    city?: string;
    state?: string;
    birthday?: string;
    customer_type?: string;
    drivers_license?: string;
    id_expiration?: string;
    medical_card_expiration?: string;
    points_adjustment?: number;
}
export declare class DigitalWalletCreateCustomerDto {
    firstName: string;
    phone?: string;
    surname?: string;
    email?: string;
    dateOfBirth?: Date | string;
}
export declare class DigitalWalletCustomerObjectDto {
    id: string;
    phone: string;
    email: string;
    gender: number;
    dateOfBirth: Date | string;
    surname: string;
    firstName: string;
    externalUserId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}
declare class BalanceObject {
    currentNumberOfUses: number;
    numberStampsTotal: number;
    numberRewardsUnused: number;
    balance: number;
    discountPercentage: number;
    discountAmount: number;
    bonusBalance: number;
    stampsBeforeReward: number;
}
declare class DirectInstallLinkObject {
    universal: string;
    apple: string;
    google: string;
    pwa: string;
}
declare class CustomFieldsObject {
    id: number;
    name: string;
    type: string;
    order: number;
    value: string;
    required: true;
    unique: true;
}
export declare class Card {
    id: string;
    companyId: number;
    templateId: number;
    customerId: string;
    type: string;
    device: string;
    status: string;
    customFields: CustomFieldsObject[];
    balance: BalanceObject;
    installLink: string;
    shareLink: string;
    directInstallLink: DirectInstallLinkObject;
    couponRedeemed: true;
    expiresAt: string | Date;
    createdAt: string | Date;
    updatedAt: string | Date;
    customer: DigitalWalletCustomerObjectDto;
}
export interface PosabitCustomerProperties {
    first_name?: string;
    terms_agreed?: boolean;
    points?: number;
    last_name?: string;
    birth_year?: number;
    gender?: string;
    telephone?: string;
    email?: string;
    active?: boolean;
    sms_opt_out?: boolean;
    sms_opt_in?: boolean;
    address?: string;
    zipcode?: string;
    city?: string;
    state?: string;
    birthday?: string;
    customer_type?: string;
    drivers_license?: string;
    id_expiration?: string;
    medical_card_expiration?: string;
    points_adjustment?: number;
}
export interface PosabitCustomer {
    id: number;
    first_name: string;
    terms_agreed: boolean;
    points: number;
    last_name: string;
    birth_year: number;
    gender: string;
    telephone: string;
    email: string;
    active: boolean;
    sms_opt_out: boolean;
    sms_opt_in: boolean;
    address: string;
    zipcode: string;
    city: string;
    state: string;
    birthday: string;
    customer_type: string;
    drivers_license: string;
    id_expiration?: string;
    medical_card_expiration?: string;
}
export declare enum PROGRAM_ENDPOINTS {
    AMOUNT = "transaction-amount",
    POINT = "point",
    REWARD = "reward",
    SCORE = "scores",
    STAMPS = "stamp",
    VISIT = "visit"
}
export declare enum PROGRAM_TYPES_PROPERTY {
    AMOUNT = "amount",
    POINT = "points",
    REWARD = "rewards",
    SCORE = "scores",
    STAMPS = "stamps",
    VISIT = "visits"
}
declare class CustomFieldDTO {
    id: number;
    name: string;
    type: string;
    order: number;
    value: string;
    required: boolean;
    unique: boolean;
}
declare class BalanceDTO {
    currentNumberOfUses: number;
    numberStampsTotal: number;
    numberRewardsUnused: number;
    balance: number;
    discountPercentage: number;
    discountAmount: number;
    bonusBalance: number;
    stampsBeforeReward: number;
}
declare class DirectInstallLinkDTO {
    universal: string;
    apple: string;
    google: string;
    pwa: string;
}
export declare class changePointsInProgramResponseDto {
    responseId: string;
    createdAt: string;
    code: number;
    customFields: CustomFieldDTO[];
    balance: BalanceDTO;
    installLink: string;
    shareLink: string;
    directInstallLink: DirectInstallLinkDTO;
    couponRedeemed: boolean;
    expiresAt: string;
    updatedAt: string;
}
export {};
