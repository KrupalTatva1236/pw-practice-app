import {expect, test} from "@playwright/test"
import { delay } from "rxjs-compat/operator/delay"

    test.beforeEach(async ({page})=>{
      await page.goto("/")
    })
// test.describe.configure({ mode: 'serial' });
// Test Suites Create
test.describe('First Test suites', ()=>{

    test.beforeEach(async ({page})=>{
      await page.getByText('Forms').click()
    })

    // Test Case Create
    test.only("Navigate to Form Layout", async ({page})=>{
    await page.getByText('Form Layout').click()
    const buttonText = await page.locator('nb-card').filter({hasText: "Basic form"})
    const btn_Submit = await buttonText.locator('button').textContent()
    expect(btn_Submit).toEqual('Submit')

    const allContaint =  await page.locator('nb-radio').allTextContents()
    expect(allContaint).toContain('Option 1')
    
        

})
  
    test("Navigate to Form Datepicker", async ({page})=>{
      await page.getByText('Datepicker').click()
})

test('test assertions' ,async ({page})=>{

    // General assertions
    const value = 5
    expect(value).toEqual(5)
})

test('input fields', async ({page})=>{
await page.getByText('Form Layout').click()
    await page.getByRole("textbox", {name:"Email"}).first().click()

    await page.getByRole("textbox", {name:"Email"}).first().pressSequentially("test@gmail.com", {delay:100})
})

test('checkbox fields', async ({page})=>{

 await page.getByText('Modal & Overlays').click()
  await page.getByText('Toastr').click()
 await page.getByRole("checkbox", {name:"Hide on click"}).uncheck({force:true})

 const allOfCheckbox = page.getByRole("checkbox")
 for(const box of await allOfCheckbox.all()){
 
    await box.uncheck({force:true})
    expect(await box.isChecked).toBeFalsy()
}

})
})