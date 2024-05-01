import 'dotenv/config';
import { addToProgram, createCustomerCard, createDigitalWalletCustomer, normalizePhoneNumber, } from "./utility/index.js";
import csvToJson from "convert-csv-to-json";
let obj = csvToJson
    .fieldDelimiter(",")
    .formatValueByType(true)
    .parseSubArray("*", ",")
    .getJsonFromCsv("./greenlight.csv");
const customers = obj.map((customer) => customer);
const processCustomer = async (customer) => {
    if (customer.PhoneNumber) {
        const customerCreationPayload = {
            phone: normalizePhoneNumber(customer.PhoneNumber),
            firstName: customer.FirstName,
            surname: customer.Surname,
            dateOfBirth: customer.Birthday,
            email: customer.EmailAddress,
        };
        console.log('customerCreationPayload', customerCreationPayload);
        const newDigitalWalletCustomer = await createDigitalWalletCustomer(customerCreationPayload);
        console.log('newDigitalWalletCustomer', newDigitalWalletCustomer);
        const newDigitalWalletCard = await createCustomerCard(newDigitalWalletCustomer.id, process.env.CARD_TEMPLATE_ID);
        console.log('newDigitalWalletCard', newDigitalWalletCard);
        console.log('newDigitalWalletCard.id', newDigitalWalletCard.id);
        console.log('customer.TransactionCount', customer.TransactionCount);
        await addToProgram(newDigitalWalletCard.id, customer.TransactionCount);
    }
};
for (let i = 0; i < customers.length; i++) {
    console.log('customer', customers[0]);
    if (i === 0)
        continue;
    try {
        await processCustomer(customers[i]);
    }
    catch (e) {
        console.error("could not process customer", e.message);
    }
    console.log('complete');
    break;
}
//# sourceMappingURL=index.js.map