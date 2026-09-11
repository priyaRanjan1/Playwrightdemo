import {test,expect} from '@playwright/test';
test('formDetails',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#name').fill('priya ranjan')
    await page.getByPlaceholder('Enter EMail').fill('priya@gmail.com')
    await page.locator('#phone').fill('7022981924')
    await page.locator('#textarea').fill('patna gandhi maidan')
    let radio=await page.getByRole('radio',{name:'Male',exact:true})
    await radio.scrollIntoViewIfNeeded()
    await radio.check()
    //for sunday
    let sunday=await page.getByRole('checkbox',{name:'Sunday'})
    await sunday.scrollIntoViewIfNeeded()
    await expect(sunday).not.toBeChecked()
    await sunday.check()
    //for monday
     let monday=await page.getByRole('checkbox',{name:'Monday'})
    await monday.scrollIntoViewIfNeeded()
    await expect(monday).not.toBeChecked()
    await monday.check()
    //date picker
    await page.locator('#datepicker').fill('06/06/2024')
    await page.locator('#txtDate').click()
    await page.waitForTimeout(6000)
    //start date and end date
    await page.locator('#start-date').click()
    await page.waitForTimeout(6000)
    await page.locator('#end-date').click()
    //submit button
    await page.locator('.submit-btn').click()
})