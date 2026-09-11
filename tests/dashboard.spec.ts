import {test, expect} from '@playwright/test';
import {login} from '../pages/login'
import {dashboard} from '../pages/dashboard'
import data from '../testdata/testdata.json'
let dp:login
let dash:dashboard
test.beforeEach(async({page})=>{
    dp=new login(page)
    dash=new dashboard(page)
    await dp.urlLaunch(data.url)
    await dp.loginIntoApplication(data.email,data.password)
})
test('dashboardcheck',async()=>{
    await dash.viewProduct(data.productName)
})

