import {expect, test} from '@playwright/test';
test('radiosample', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const maleRadio= page.locator('#male')
    await maleRadio.scrollIntoViewIfNeeded()
    await maleRadio.check()
    await page.locator('#sunday').check()
    await page.uncheck('#sunday')
    await page.locator('#monday').check()
    await page.waitForTimeout(3000)
})
test('dataentry',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const details=page.locator('[href="https://testautomationpractice.blogspot.com/2018/09/automation-form.html"]')
    const result=await details.textContent()
    console.log(result)
     const details1=page.locator('h2.title')
    const result1=await details1.allTextContents()
    for(let i of result1){
        if(i==="Slider"){
            console.log(i)
        }
    }
    console.log(result1)
})