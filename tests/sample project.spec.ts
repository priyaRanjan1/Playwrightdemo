import {test,expect} from '@playwright/test'
import { format } from 'node:path'
test.describe('login functionality check',()=>{
    test('valid login',async({page})=>{
        await page.goto('https://promptqa-shop.web.app/cart')
        //skip functionality
       await page.getByText('Skip tour').click()
       //sigin click
        await page.getByTestId('nav-login').click()
        //fill the form
        await page.getByLabel('Email').fill('demo@promptqa.test')
        await page.locator('[type="password"]').fill('Demo@1234')
        await page.getByTestId('login-submit').click()
        await page.waitForTimeout(5000)
    })
    test('invalid login',async({page})=>{
        await page.goto('https://promptqa-shop.web.app/cart')
        //skip functionality
       await page.getByText('Skip tour').click()
       //sigin click
        await page.getByTestId('nav-login').click()
        //fill the form
        await page.getByLabel('Email').fill('demo@promptqa.test')
        await page.locator('[type="password"]').fill('Demo@1')
        await page.getByTestId('login-submit').click()
        //assertion
        await expect(page.getByTestId('login-submit-error')).toBeVisible()
    })
    test('product select',async({page})=>{
        await page.goto('https://promptqa-shop.web.app/cart')
        //skip functionality
       await page.getByText('Skip tour').click()
       //sigin click
        await page.getByTestId('nav-login').click()
        //fill the form
        await page.getByLabel('Email').fill('demo@promptqa.test')
        await page.locator('[type="password"]').fill('Demo@1234')
        await page.getByTestId('login-submit').click()
        //now review the product
        await page.getByTestId('product-details-1').click()
        await page.getByTestId('breadcrumb-category').click()
        await page.getByTestId('product-details-2').click()
        await page.getByTestId('breadcrumb-category').click()
        //add to product
        await page.getByTestId('add-to-cart-1').click() //product 1
        await page.getByTestId('add-to-cart-2').click() //product 2
        //go to cart
        await page.getByTestId('nav-cart').click()
        //cupon
        await page.locator('#coupon').fill('PROMPTQA10')
        //apply cuppon
        await page.getByTestId('apply-coupon').click()
        //checkout button
        await page.getByTestId('checkout-btn').click()
        //form section
        await page.locator('#ship-name').fill('Priya Ranjan') //name  
        await page.locator('#ship-address').fill('patna ,near gardanibagh')//address
        await page.locator('#ship-city').fill('patna')//city
        await page.locator('#ship-zip').fill('patna')//zip
        await page.locator('#ship-country').selectOption('India')
        await page.getByRole('radio',{name:'Express (2–3 days, +$9.99)'}).check()
        await page.getByTestId('step-next').click()//click next page
        await page.getByTestId('card-number').fill('1234-5678-9000')
        await page.locator('#card-expiry').fill('12/30')
        await page.locator('#card-cvv').fill('900')
        await page.locator('#card-name').fill('PRIYA RANJAN')
        await page.getByTestId('step-next').click()
        await page.getByRole('checkbox',{name:'I confirm this is a dummy order'}).check() //final check for product
        await page.getByTestId('place-order').click()
        await page.getByTestId('back-home').click
        await page.waitForTimeout(3000)
    })
})