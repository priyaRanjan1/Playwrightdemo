import {test,expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage"
const url='https://rahulshettyacademy.com/client/#/auth/login'
let email='jegow99556@flosek.com'
let password='Test@123'
let errorMessage='Incorrect email or password.'
let invalidPassword='Test@1234'
let lp:LoginPage
test.beforeEach(async ({page})=>{
    lp=new LoginPage(page)
    await lp.launchUrl(url)
})

test('login using valid credential',async({page})=>{
   //const lp= new LoginPage(page)
   //await lp.launchUrl(url)
    await lp.loginIntoApplication(email,password)
    await expect(lp.homePageIdentifier).toBeVisible()
})
test('login using invalid credential',async({page})=>{
   //const lp= new LoginPage(page)
   //await lp.launchUrl(url)
    await lp.loginIntoApplication(email,invalidPassword)
    await expect(lp.errorMessage).toBeVisible()
})