import {test,expect} from '@playwright/test'
test('end to end ',async({page})=>{
    let email='jegow99556@flosek.com'
    let password='Test@123'
    let productName='iphone 13 pro'
    let country='Singapore'
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').fill(email)
    await page.locator('#userPassword').fill(password)
    await page.locator('#login').click()
    //validate login is succesful or not
    await expect(page.locator('.fa-sign-out')).toBeVisible()
    const product=page.locator('div.card-body') 
    product.nth(0).waitFor()
    const countOfProduct=await product.count()
    //filter the product
    await product.filter({hasText:productName}).locator('.button').last().click()
    //cart click
    await page.locator('[routerlink="/dashboard/cart"]').click()
    //checkout
    await page.getByRole('button',{name:'Checkout'}).click()
    //select dropdown
    await page.locator('div.user__name input').last().pressSequentially('in')
    //finding button
    await page.locator('section.ta-results button').filter({hasText:country}).click()
    //place order
    await page.locator('a.btnn').click()
    await page.waitForTimeout(3000)
})