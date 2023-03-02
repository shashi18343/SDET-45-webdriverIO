describe("creating new vendor details",async ()=>{

    it("new vendor details",async () => {

        var random=Math.floor(Math.random()*(100-1)+1);
        await browser.maximizeWindow();
        console.log("-----------------------------------------opening the browser-----------------------------------------");
       // await browser.url("http://localhost:8888/");
        await browser.url("http://testingserver:8888/");
        console.log("-----------------------------------------login to the application-----------------------------------------");
        await browser.$('[name="user_name"]').setValue("admin");
        await browser.$('[name="user_password"]').setValue("admin");
        await browser.$('#submitButton').click();
        console.log("-----------------------------------------creating vendor-----------------------------------------");
        await browser.$("//td[@class='tabUnSelected']/a[text()='More']").moveTo();
        await browser.$("//a[@name='Vendors']").click();
        await browser.$("//img[@title='Create Vendor...']").click();
        await browser.$('[name="vendorname"]').setValue("vendor"+random);
        await browser.$('[name="description"]').setValue("new vendor created");
        await browser.$("(//input[@title='Save [Alt+S]'])[1]").click();
        var createdVen=await browser.$("//td[@id='mouseArea_Vendor Name']").getText();
        console.log(createdVen);
        var createdVen=createdVen.trim();
        console.log(createdVen);
        await browser.$("//a[text()='Vendors'][@class='hdrLink']").click();
        var listVendor=await browser.$$("//tr/td/a[@title='Vendors']");

        listVendor.forEach(async ele =>{
            var ele=await ele.getText();
           // console.log("data"+createdVen);
            // console.log("other"+ele);
            if(ele===createdVen)
            {
                console.log("vendor has been created successfully");
            }
            else{
                console.log("vendor not created");
            }
        })
        console.log("-----------------------------------------verification of vendor done-----------------------------------------");
        await browser.$("//td[@class='tabUnSelected']/a[text()='Products']").click();
        await browser.$("//img[@title='Create Product...']").click();
        await browser.$("//input[@name='vendor_id']/../img").click();
        
    //     //await browser.switchWindow("http://localhost:8888/index.php?module=Vendors&action=Popup&html=Popup_picker&popuptype=specific&form=EditView&fromlink=");
        await browser.switchWindow("http://testingserver:8888/index.php?module=Vendors&action=Popup&html=Popup_picker&popuptype=specific&form=EditView&fromlink=");
        
        await browser.$("//input[@name='search_text']").setValue(createdVen);
        await browser.$("//input[@name='search']").click();
     await browser.waitUntil(async ()=>{
        await browser.$$("//tr[@class='lvtColData']/td/a").length >0
      })
        var verVendor=await browser.$$("//tr[@class='lvtColData']/td/a");
        console.log("................................................................................................");
        console.log(verVendor);
       // var verVendor=await browser.$(`a=${createdVen}`);
        //await verVendor.waitForDisplayed()

        //expect(await verVendor.getText()).toBe(createdVen)
       // console.log(await verVendor.getText());

        verVendor.forEach(async elem =>{
            var eleText=await elem.getText();
            console.log(eleText);
        if(eleText.includes(createdVen))
        {
            console.log("vendor is diplayed in this page---------------------");
        }
        else
        {
            console.log("*******************vendor is not displayed******************");


         }
     })
        console.log("---------------------created vendor is verified in the product module-------------------------");
    //    await browser.debug();



    })

})