import {expect,test} from '@playwright/test'
import path from 'node:path'
test('single file upload',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const singleUpload=await page.locator('#singleFileInput')
    singleUpload.scrollIntoViewIfNeeded()
    singleUpload.setInputFiles("C:/Users/ranja/Desktop/resume/PRIYA_RANJAN.docx")
    await page.getByText('Upload Single File').click()
    //multi file handle
    await page.goto('https://testautomationpractice.blogspot.com/')
    const multiUpload=await page.locator('#multipleFilesInput')
    multiUpload.scrollIntoViewIfNeeded()
    multiUpload.setInputFiles(["C:/Users/ranja/Desktop/resume/PRIYA_RANJAN.docx","C:/Users/ranja/Desktop/resume/PRIYA_RANJAN.pdf"])
    page.getByText('Upload Multiple Files').click()
})
test('singlefile using test data',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const filepath=await path.join(__dirname,'../testdata/PRIYA_RANJAN.docx')
    await page.locator('#singleFileInput').setInputFiles(filepath)
    await page.getByText('Upload Single File').click()

    //multi path
     await page.goto('https://testautomationpractice.blogspot.com/')
    const filepath1=await path.join(__dirname,'../testdata/PRIYA_RANJAN.docx')
    const filepath2= await path.join(__dirname,'../testdata/PRIYA_RANJAN_Testing.pdf')
    await page.locator('#multipleFilesInput').setInputFiles([filepath1,filepath2])
    await page.getByText('Upload Multiple Files').click()
})