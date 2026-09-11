import { Locator,Page } from "@playwright/test";
export class LoginCheckFile {
    //object creation
    page: Page
    email: Locator
    password: Locator
    LoginBtn: Locator
    succesMessage: Locator
    errorMessage: Locator
    //constructor creation
    constructor(page:Page){
        this.page = page
        this.email = page.locator('#userEmail')
        this.password = page.locator('#userPassword')
        this.LoginBtn =page.locator('#login')
        this.errorMessage =page.locator('#toast-container')
        this.succesMessage =page.locator('[routerLink="/dashboard"]')
    }
    //method creation
    async launchUrl(url:string){
        await this.page.goto(url)
    }
    async loginApp(email:string,password:string){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.LoginBtn.click()
    }
}