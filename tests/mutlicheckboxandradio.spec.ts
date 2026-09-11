import {expect, test} from '@playwright/test'
test('multicheck',async({page})=>{
    await page.goto('https://promptqa-shop.web.app/widgets')
    await page.getByText('Skip tour').click()
    //await page.getByText('Checkboxes & radios').click()..mutliple place it was there so i escaped it
    page.locator('.widgets-toc-link-num').nth(1).click()
})