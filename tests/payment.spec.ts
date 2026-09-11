import {test, expect} from '@playwright/test';
import {login} from '../pages/login'
import {dashboard} from '../pages/dashboard'
import data from '../testdata/testdata.json'
import {payment} from '../pages/payment'
let dp:login
let dash:dashboard
let pay:payment
test.beforeEach(async({page})=>{
    dp=new login(page)
    dash=new dashboard(page)
    pay=new payment(page)
    await dp.urlLaunch(data.url)
    await dp.loginIntoApplication(data.email,data.password)
    await dash.viewProduct(data.productName)
})
test('paymentcheck',async()=>{
    await pay.selectCountry(data.country)
})

