import {test,expect} from '@playwright/test'
test('alert sample', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.on('dialog',(d)=>{
        d.accept('ranjan')
       //d.dismiss()
    })
    await page.locator('#alertBtn').click()
    await page.getByRole('button',{name:'Confirmation Alert'}).click()
    await page.locator('[id="promptBtn"]').click()
  
    
})