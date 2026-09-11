import {test, expect} from '@playwright/test'
const URL='https://www.saucedemo.com/'
const details=[{
    name:'valid data 1',
    username:'standard_user',
    password: 'secret_sauce',
    result: ''
},
/*{
    name:'valid data 2',
    username:'locked_out_user',
    password: 'secret_sauce',
    result: ''
},*/
{
    name:'Wrong password',
    username:'standard_user',
    password: 'xyz',
    result: 'Epic sadface: Username and password do not match any user in this service' 
},
{
    name:'Wrong username',
    username:'lvbhh',
    password: 'secret_sauce',
    result: 'Epic sadface: Username and password do not match any user in this service' 
},
{
    name:'missing passord data',
    username:'standard_user',
    password: '',
    result: 'Epic sadface: Password is required' 
},
]
for (let data of details){
    test(`saucedemo parameter ${data.name}`, async({page})=>{
        await page.goto(URL)
        await page.locator('#user-name').fill(data.username)
        await page.locator('#password').fill(data.password)
        await page.locator('#login-button').click()
        if(data.result){
            await expect(page.locator('[data-test="error"]')).toHaveText(data.result)
        }else{
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        }
    })
}