import {Page, Locator} from "@playwright/test";
export class LoginPage {
    page: Page
    email: Locator
    password: Locator
    LoginBtn: Locator
    errorMessage: Locator
    homePageIdentifier: Locator

    constructor(page:Page) {
        this.page = page
        this.email = page.locator('#userEmail')
        this.password = page.locator('#userPassword')
        this.LoginBtn =page.locator('#login')
        this.errorMessage =page.locator('#toast-container')
        this.homePageIdentifier =page.locator('[routerLink="/dashboard"]')
    }

    async launchUrl(url:string){
        await this.page.goto(url)
    }
    async loginIntoApplication(email:string, password:string){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.LoginBtn.click()
    }
} 