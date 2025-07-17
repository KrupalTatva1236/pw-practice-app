import { test } from "@playwright/test"
import { PageManager } from "../page-objects/pageManager";  
import { NavigationPage } from "../page-objects/navigationPage";
import { FormsLayoutPage } from "../page-objects/formsLayoutPage";
import { DatePickerPage } from "../page-objects/datePickerPage";
import {faker} from '@faker-js/faker';

 test.beforeEach(async ({page})=>{
      await page.goto("/")
    })

test('navigation to form page', async ({page}) =>{

    const pm = new PageManager(page);
    await pm.navigationTo().formLayoutPage();
    await pm.navigationTo().datePickerPage();
    await pm.navigationTo().smartTablePage();
    await pm.navigationTo().toasterPage();
    await pm.navigationTo().tooltipPage();
})

test('parametrized methods', async ({page}) =>{

    const pm = new PageManager(page);
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    await pm.navigationTo().formLayoutPage();
    await pm.onFormsLayoutPage().submitFormUsingGridWithCredentialsAndSelectingOptions("test@test.com","Password","Option 2")
    await pm.onFormsLayoutPage().submitInlineForm(randomFullName, randomEmail,true)
    await pm.navigationTo().datePickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerFromToday(3)


})