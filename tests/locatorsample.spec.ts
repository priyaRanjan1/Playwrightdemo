import {test,expect} from '@playwright/test';
test('locator example',async({page})=>{
    await page.goto('https://demoqa.com/')
    await page.getByText('Elements').click();
    await page.getByText('Check Box').click();
    await page.locator('.rc-tree-switcher.rc-tree-switcher_close').click();
    await page.locator('.rc-tree-switcher.rc-tree-switcher_close').nth(0).click();
    await page.locator('.rc-tree-checkbox').nth(2).click();
})