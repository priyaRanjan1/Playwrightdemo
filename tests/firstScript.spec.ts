import {test, expect} from '@playwright/test';
test('login validation', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-logi/')
    console.log(await page.url());
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.locator('#submit').click()
    //await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
    //await expect(page.getByText('Logged In Successfully')).toBeVisible()
    await expect(page.getByText('Logged In Successfully')).toContainText('Logged')
   // await expect(page.getByText('Your password is invalid!')).toBeVisible()
   //await expect(page.getByText('Your password is invalid!')).toContainText('Your password is inv')
   //await expect(page.locator('#error')).toBeVisible()
    //await expect(page.locator('#error')).toContainText('Your password is inv')
})
