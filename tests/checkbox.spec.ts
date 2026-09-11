import{expect, test} from '@playwright/test';
test('checkbox example',async({page})=>{
    await page.goto('https://demoqa.com/')
    await page.getByText('Elements').click()
    //await page.locator('.card-body').nth(0).click()  //chrome not working.
    await page.getByText('Radio Button').click();
    const radioData=await page.locator('#yesRadio')
    await radioData.scrollIntoViewIfNeeded()
    await radioData.click()
})