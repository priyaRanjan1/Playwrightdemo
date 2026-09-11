import {test, expect} from '@playwright/test'
    const url='https://practicetestautomation.com/practice-test-login/'
    const testData=[
        {
            name:'valid data',
            username:"student",
            password:"Password123",
            expectedResult:""
        },
        {
            name:'invalid username',
            username:"dent",
            password:"Password123",
            expectedResult:"Your username is invalid!"
        },
        {
            name:'invalid Password',
            username:"student",
            password:"xcy",
            expectedResult:"Your password is invalid!"

        },
        {
             name:'Missing password',
            username:"student",
            password:"",
            expectedResult:"Your password is invalid!"
        }
    ]
    for(const data of testData){
        test(`Parameter paractise ${data.name}`,async({page})=>{
           await page.goto(url)
            await page.locator('#username').fill(data.username)
            await page.locator('#password').fill(data.password)
            await page.locator('#submit').click()
            if(data.expectedResult){
                await expect(page.locator('#error')).toBeVisible()
                 await expect(page.locator('#error')).toHaveText(data.expectedResult)
            }else{
                await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible()
                await page.getByText('Log out').click()
            }
        })
    }
