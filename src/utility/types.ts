export interface GreenLightCustomer {
  ReferenceID: string,
  FirstName: string,
  Surname: string,
  EmailAddress:string,
  PhoneNumber: string,
  Nickname: string,
  CompanyName: string,
  StreetAddress1: string,
  StreetAddress2: string,
  City: string,
  State: string,
  PostalCode:string,
  Birthday:string,
  Memo:string,
  SquareCustomerID: string,
  CreationSource: string,
  FirstVisit: string,
  LastVisit: string,
  TransactionCount: number,
  TotalSpend: string,
  EmailSubscriptionStatus: string,
  InstantProfile: string
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
  


export class DigitalWalletCreateCustomerDto {
  public firstName: string;
  public phone?: string;
  public surname?: string;
  public email?: string;
  public dateOfBirth?: Date | string;
}



export class DigitalWalletCustomerObjectDto {

  public id: string;

  public phone: string;


  public email: string;


  public gender: number;

  public dateOfBirth: Date | string;


  public surname: string;


  public firstName: string;


  public externalUserId: string;

  public createdAt: Date | string;

 
  public updatedAt: Date | string;
}




class BalanceObject {

  public currentNumberOfUses: number;


  public numberStampsTotal: number;


  public numberRewardsUnused: number;


  public balance: number;


  public discountPercentage: number;


  public discountAmount: number;


  public bonusBalance: number;


  public stampsBeforeReward: number;
}

class DirectInstallLinkObject {

  public universal: string;


  public apple: string;


  public google: string;


  public pwa: string;
}

class CustomFieldsObject {

  public id: number;


  public name: string;


  public type: string;

  public order: number;


  public value: string;


  public required: true;


  public unique: true;
}
export class Card {
  public id: string;

  public companyId: number;


  public templateId: number;


  public customerId: string;


  public type: string;


  public device: string;


  public status: string;


  public customFields: CustomFieldsObject[];


  public balance: BalanceObject;


  public installLink: string;


  public shareLink: string;


  public directInstallLink: DirectInstallLinkObject;


  public couponRedeemed: true;

  
  public expiresAt: string | Date;

  public createdAt: string | Date;


  public updatedAt: string | Date;


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
export enum PROGRAM_ENDPOINTS {
  AMOUNT = 'transaction-amount',
  POINT = 'point',
  REWARD = 'reward',
  SCORE = 'scores',
  STAMPS = 'stamp',
  VISIT = 'visit',
}

export enum PROGRAM_TYPES_PROPERTY {
  AMOUNT = 'amount',
  POINT = 'points',
  REWARD = 'rewards',
  SCORE = 'scores',
  STAMPS = 'stamps',
  VISIT = 'visits',
}



class CustomFieldDTO {

  id: number;


  name: string;


  type: string;


  order: number;


  value: string;


  required: boolean;


  unique: boolean;
}

class BalanceDTO {

  currentNumberOfUses: number;


  numberStampsTotal: number;


  numberRewardsUnused: number;


  balance: number;


  discountPercentage: number;


  discountAmount: number;

 
  bonusBalance: number;


  stampsBeforeReward: number;
}

class DirectInstallLinkDTO {

  universal: string;


  apple: string;


  google: string;


  pwa: string;
}

export class changePointsInProgramResponseDto {

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
