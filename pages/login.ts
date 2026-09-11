import {Page, Locator} from '@playwright/test'
export class login{
    //create object
    page:Page
    email:Locator
    password:Locator
    loginBtn:Locator
    errorMessage:Locator
    homePageIdentifier:Locator  

    //create constructor
    constructor(page:Page){
        this.page=page
        this.email = page.locator('#userEmail')
        this.password = page.locator('#userPassword')
        this.loginBtn =page.locator('#login')
        this.errorMessage =page.locator('#toast-container')
        this.homePageIdentifier =page.locator('[routerLink="/dashboard"]')
    }
    //create methods
    async urlLaunch(url:string){
        await this.page.goto(url)
    }
    async loginIntoApplication(email:string, password:string){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}