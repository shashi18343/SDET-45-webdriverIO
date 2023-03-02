describe("Create opportunities with organization and campaign",async () =>{
    it(" opp with org and camp HC", async () =>{

        let random=Math.floor(Math.random()* (100-1)+1);
      

        await browser.maximizeWindow();
        //await browser.url('http://testingserver:8888/');
        await browser.url('http://localhost:8888/');
        await  browser.$('[name="user_name"]').setValue("admin");
        await browser.$('[name="user_password"]').setValue("admin");
        await browser.$('input#submitButton').click();
        expect(browser).toHaveTitle("vtiger CRM 5 - Commercial Open Source CRM");
        console.log(await browser.getTitle());
        console.log("-------------------------------------Login to the application-------------------------------------------------");
        await browser.$("//img[@src='themes/softed/images/mainSettings.PNG']").moveTo();
        await browser.$("//a[text()='CRM Settings']").click();
        const eleWorkflow= await browser.$("//a[contains(.,'Workflows')]");
        await eleWorkflow.scrollIntoView();
        await eleWorkflow.click();
        await browser.$('#new_workflow').click();
        await browser.$('#new_workflow_popup_save').click();
        await browser.$('#save_description').setValue("well deserved");
        
        const saveBtn=await browser.$('#save_submit');
        await saveBtn.waitForDisplayed(10000);
        await saveBtn.click();
        const eleWorkFl=await browser.$("//a[contains(.,'Workflows')]");
        await eleWorkFl.scrollIntoView();
        await eleWorkFl.click();
        await browser.$("//td[@class='genHeaderSmall']/../td[2]/img").moveTo();
        await browser.$("//a[text()='Sign Out']").click();
// await browser.debug();


    })

});