import {test,expect} from '@playwright/test'
let email='jegow99556@flosek.com'
let password='Test@123'
let productName='iphone 13 pro'
let country='Singapore'

test('finaltest',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').fill(email)
    await page.locator('#userPassword').fill(password)
    await page.locator('#login').click()
    //count products
    const product=page.locator('div .card-body')
    await product.nth(0).waitFor()
    const productCount= await product.count()
    console.log(productCount)
    await product.filter({hasText:productName}).getByRole('button',{name:' Add To Cart'}).click()
    await page.locator('[routerlink="/dashboard/cart"]').click()
     await page.getByRole('button',{name:'Checkout'}).click()
     await page.locator('input.input.txt.text-validated').last().pressSequentially('in')
     //find locator
     const ddResult=page.locator('button.ta-item')
     await ddResult.filter({hasText:country}).click()
      await page.getByText('Place Order').click()
      
})
