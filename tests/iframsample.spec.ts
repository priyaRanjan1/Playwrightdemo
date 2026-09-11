import {test,expect} from '@playwright/test';
test('iframe',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')

    const frame=await page.frameLocator('#singleframe')
    await frame.locator("[type='text']").fill('priya ranjan')

})