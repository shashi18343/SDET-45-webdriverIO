import  calenderPage from '../pageobjects/calender.page.js'

describe("To operate different calender popup",async ()=>{
beforeEach("OpenApp", async()=>{
    await browser.maximizeWindow();
    await browser.url("https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker");
})

    it("first type calender popup",async ()=>{

    await calenderPage.clickOnSimpleDateTab();
    await browser.$("//title[text()='Selenium Practice Datepicker - Default functionality']/../..//input[@id='datepicker']").setValue("02/24/2023")

    })

    xit("first type calender popup",async ()=>{

       await calenderPage.clickOndropdownDatPicker(); 

    })

    xit("first type calender popup",async ()=>{

        await calenderPage.clickOniconTriger();
        

    })
})