import {test} from "@playwright/test"

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
    test("Navigate to Form Layout", async ({page})=>{
      await page.getByText('Form Layout').click()
})
  
    test("Navigate to Form Datepicker", async ({page})=>{
      await page.getByText('Datepicker').click()
})
})

test.describe('Second Test suites', ()=>{

    test.beforeEach(async ({page})=>{
      await page.getByText('Charts').click()
    })

    // Test Case Create
    test("Navigate to Form Layout", async ({page})=>{
      await page.getByText('Form Layout').click()
})

    test("Navigate to Form Datepicker", async ({page})=>{
      await page.getByText('Datepicker').click()
})
})