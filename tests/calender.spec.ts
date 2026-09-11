import {test,expect} from '@playwright/test'
test('calander',async({page})=>{
    page.goto('https://www.hyrtutorials.com/p/calendar-practice.html')
    await page.locator('.ui-datepicker-trigger').click()
    const targetDate='20'
    const targetMonth='August'
    const targetYear='2028'
    const monthPicker=await page.locator('.ui-datepicker-month')
    const yearPicker=await page.locator('.ui-datepicker-year')
    const nextButton=await page.getByText('Next')
    while(true){
        if((await monthPicker.textContent()===targetMonth)&&(await yearPicker.textContent()===targetYear)){
            await page.getByText(targetDate,{exact:true}).click()
            break
        }
        await nextButton.click()
    }
})