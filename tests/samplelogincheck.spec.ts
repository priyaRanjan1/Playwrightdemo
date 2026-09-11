import {test,expect} from "@playwright/test";
import { LoginCheckFile } from "../pages/loginCheckfile";
import data from "../testdata/testdata.json"
let dp:LoginCheckFile
test.beforeEach(async({page})=>{
    dp=new LoginCheckFile(page)
})
test('logindatacheck',async({page})=>{
    await dp.launchUrl(data.url)
    await dp.loginApp(data.email,data.password)
    await expect(dp.succesMessage).toBeVisible()
})