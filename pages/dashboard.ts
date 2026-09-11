import {Page,Locator} from '@playwright/test'
export class dashboard{
    //object creation
    page:Page
    products:Locator
    productName:Locator
    addToCartBtn:Locator
    checkoutBtn:Locator
    //constructor creation
    constructor(page:Page)
    {
        this.page=page
        this.products=page.locator('div .card-body')
        this.productName=page.locator('div .card-body h5')
        this.addToCartBtn=page.locator('[routerlink="/dashboard/cart"]')
        this.checkoutBtn=page.getByRole('button',{name:'Checkout'})
    }
    async viewProduct(productName:string){
        await this.products.nth(0).waitFor()
        await this.products.filter({hasText:productName}).getByRole('button',{name:'Add To Cart'}).click()
        await this.addToCartBtn.click()
        await this.checkoutBtn.click()
        await this.page.waitForTimeout(3000)
    }
}
