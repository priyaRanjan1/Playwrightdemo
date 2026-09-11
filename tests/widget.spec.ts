import {test, expect} from '@playwright/test'
test('widget',async({page})=>{
    await page.goto('https://promptqa-shop.web.app/widgets')
    await page.getByText('Skip tour').click()
    await page.getByTestId('widgets-toc-iframe').click()
    const result=await page.locator('#iframe').frameLocator('[data-testid="demo-iframe"]')
    await result.getByTestId('frame-email').fill('priya@gmail.com')
    await result.locator('#frame-submit').click()
})