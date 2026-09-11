import {expect, test} from '@playwright/test'
test('mydropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const data=await page.locator('#country')
    await data.scrollIntoViewIfNeeded()
    await data.selectOption({value:'canada'})
    await data.selectOption({label:'Japan'})
    await data.selectOption({index:4})
    await page.goto('https://demoqa.com/select-menu')
    const devqaresult= await page.locator('#cars');
    await devqaresult.scrollIntoViewIfNeeded()
    await devqaresult.selectOption('Volvo')
    await devqaresult.selectOption({label:'Saab'})
    await devqaresult.selectOption({index:2})
    await devqaresult.selectOption({value:'audi'})
    await devqaresult.selectOption([{value:'audi'},{label:'Saab'}])
})
test('without select', async ({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.locator('#react-select-4-input').click()
    await page.locator('#react-select-4-option-0').click()
    await page.locator('#react-select-4-option-1').click()
    await page.locator('[aria-label="Remove Green"]').click()
})
