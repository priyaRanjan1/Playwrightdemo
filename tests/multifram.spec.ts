import {test,expect} from '@playwright/test';
test('iframe',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    await page.getByText('Iframe with in an Iframe').click()
    const result=await page.frameLocator('#Multiple iframe').frameLocator('.iframe-container iframe').locator("[type='text']")
    await result.fill('raj')
})