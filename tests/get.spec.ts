import {test,expect} from '@playwright/test'
const api_key='pro_110e19004b98f049bc0de2f3c26f2b402dc66fc10a200f9989ef3711d9926f8c'
test('get data', async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2',{
        headers:{
            'key': api_key
        }
    })
    expect(response.status()).toBe(200)
    const data=await response.json()
    console.log(data)
})