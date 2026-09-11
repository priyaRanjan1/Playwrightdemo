import {test, expect}  from '@playwright/test'
test('textdata', async({page})=>{
  await  page.goto('https://demoqa.com/text-box')
  await page.locator('#userName').fill('priya Ranjan')
  await page.getByPlaceholder('name@example.com').fill('priya@gmail.com')
 /* await page.locator('#currentAddress').fill('patna')
  //check button is enabled or not 
  await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled()

    await page.getByRole('button',{name:'Submit'}).click()
  //validation
  await expect(page.locator('#name')).toContainText('priya')*/
})