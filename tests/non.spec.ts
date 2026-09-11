import {test,expect} from '@playwright/test'
test('without selectdata', async ({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.locator('#withOptGroup').click()
    await page.getByText('Group 1, option 1').click()

})
