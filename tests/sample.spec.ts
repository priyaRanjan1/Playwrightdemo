import { test, expect } from '@playwright/test';

test('radio button', async ({ page }) => {
    await page.goto("https://demoqa.com");
    //  Click on Elements 
    await page.getByText('Elements').click();
    // Navigate to radio button section
    await page.getByText('Radio Button').click();
       
//  Assert that "Yes" is not checked initially
    await expect(page.locator('#yesRadio')).not.toBeChecked();
       
  //Select the "Yes" radio button
    await page.getByRole('radio', { name: 'Yes' }).click();
// Confirm it is now checked
    await expect(page.locator('#yesRadio')).toBeChecked();
});