
import { test, expect, Page } from "@playwright/test";

test.describe.configure({ mode: 'serial' });

    test.beforeAll(async ({page})=>{
      await page.goto("https://qa.solv.com.au/#/app/core/login");
    })

// This is a Test Suite to run all checklist for Regression of SI NSW Policy
test.describe('Verifing NSW SI Policy Checklist', () =>{
// Test case to verify that a user can login successfully and select an account
test('01 User can select the Account successfully', async ({ page }) => {

    /// Navigate to the login page
        const baseUrl = process.env.BASE_URL!;
        

        // Enter the username and password
        await page.getByRole('textbox', { name: "Username" }).fill("username");
        await page.getByRole('textbox', { name: "Password" }).fill("password");
});

test('02 User can select the Account successfully', async ({ page }) => {
        // Click on the login button
        await page.locator('[value="Login"]').click();

            // Assert that the Account selection page is visible
           await expect(page.getByText('Accounts')).toBeVisible({ timeout: 5000  });
        
            // Assert that the page title matches the expected title after login
            await expect(page).toHaveTitle('Solv - Account Selection');

});
});