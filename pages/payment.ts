import {Locator,Page} from '@playwright/test'
export class payment{
    //create object
    page:Page
    dropdownSection:Locator
    dropdownButton: Locator
    placeOrderBtn:Locator
    //create constructor
    constructor(page:Page){
        this.page=page
        this.dropdownSection=page.locator('.user__name input')
        this.dropdownButton=page.locator('section .ta-results button')
        this.placeOrderBtn=page.getByText('Place Order')
    }
    //create method
    async selectCountry(country:string){
        await this.dropdownSection.last().pressSequentially('in')
        await this.dropdownButton.filter({hasText:country}).click()
        await this.placeOrderBtn.click()
        await this.page.waitForTimeout(3000)
    }
}