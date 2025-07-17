import {test} from "@playwright/test"

test.beforeEach(async ({page})=>{
    await page.goto("/")
    await page.locator("[title='Forms']").click()
    await page.getByText('Form Layout').click()
})

test("Locator Test",async ({page})=>{

    await page.getByRole("textbox", {name:"Email"}).first().click()
    await page.getByRole("textbox", {name:"Password"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()
    
})

test('Child locator', async ({page}) =>{

    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
})

test('Parent locator', async ({page}) =>{

    await page.locator('nb-card' , {hasText: "Using the Grid"}).getByRole("textbox", {name:"Email"}).click()
    await page.locator('nb-card', {has : page.locator('#inputEmail1')}).getByRole("textbox", {name:"Email"}).click()

    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole("textbox", {name:"Password"}).click()

    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"})
    .getByRole("textbox", {name:"Email"}).click()

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole("textbox", {name:"Email"}).click()
})

test('Resuse locator', async ({page}) =>{
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})
    const emailLocator = basicForm.getByRole("textbox", {name:"Email"})

    await emailLocator.fill('test@test.com')
    await basicForm.getByRole("textbox", {name:"Password"}).fill('Welcome123')
    await basicForm.locator("nb-checkbox").click()
    await basicForm.getByRole("button").click()
})