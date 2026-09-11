import {test,expect} from '@playwright/test'
test('promptqa alert',async({page})=>{
    await page.goto('https://promptqa-shop.web.app/widgets#alerts')
    await page.on('dialog',(d)=>{
        d.accept()
    })
    await page.getByTestId('js-confirm').click()
    await page.getByText('window.confirm').click()
})