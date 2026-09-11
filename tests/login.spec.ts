import {test, expect} from '@playwright/test';
import {login} from '../pages/login'
import data from '../testdata/testdata.json'
let dp:login
test.beforeEach(async({page})=>{
    dp=new login(page)
})
test('logincheck',async()=>{
    await dp.urlLaunch(data.url)
    await dp.loginIntoApplication(data.email,data.password)
    await expect(dp.homePageIdentifier).toBeVisible()   
})