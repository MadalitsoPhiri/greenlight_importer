import 'dotenv/config'
import {
  addToProgram,
  createCustomerCard,
  createDigitalWalletCustomer,
  createPosabitCustomer,
  findCardByCustomerId,
  findCardListByCustomerId,
  getCustomerById,
  normalizePhoneNumber,
  subtractFromProgram,
  updateCustomerNativeLoyalty,
} from "./utility/index.js";
import { GreenLightCustomer, PosabitCustomer, PosabitCustomerProperties } from "./utility/types.js";
import csvToJson from "convert-csv-to-json";

let obj = csvToJson
  .fieldDelimiter(",")
  .formatValueByType(true)
  .parseSubArray("*", ",")
  .getJsonFromCsv("./greenlight.csv");
const customers = obj.map((customer: GreenLightCustomer) => customer);

const processCustomer = async (customer: GreenLightCustomer) => {


  if (customer.PhoneNumber) {



      const customerCreationPayload = {
        phone: normalizePhoneNumber(customer.PhoneNumber),
        firstName: customer.FirstName,
        surname: customer.Surname,
        dateOfBirth: customer.Birthday,
        email: customer.EmailAddress,
      };

      const newDigitalWalletCustomer = await createDigitalWalletCustomer(
        customerCreationPayload
      );


 
      
        const newDigitalWalletCard = await createCustomerCard(
          newDigitalWalletCustomer.id,
          process.env.CARD_TEMPLATE_ID
        );

      
        await addToProgram(newDigitalWalletCard.id, customer.TransactionCount);
      
    
  } 
};

for (let i = 0; i < customers.length; i++) {
  if(i === 0 || i === 1) continue;
  try {
    await processCustomer(customers[i]);

  } catch (e: any) {
    console.error("could not process customer",e.message);
  }
} 