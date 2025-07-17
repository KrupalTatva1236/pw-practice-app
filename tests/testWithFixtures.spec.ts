import { test } from "../test-options"
import { NavigationPage } from "../page-objects/navigationPage";
import { FormsLayoutPage } from "../page-objects/formsLayoutPage";
import { DatePickerPage } from "../page-objects/datePickerPage";
import {faker} from '@faker-js/faker';



test('parametrized methods', async ({pageManager} ) =>{

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    await pageManager.onFormsLayoutPage().submitFormUsingGridWithCredentialsAndSelectingOptions("test@test.com","Password","Option 2")
    await pageManager.onFormsLayoutPage().submitInlineForm(randomFullName, randomEmail,true)
})