//done

describe("Create opportunities with organization and campaign",async () =>{
    it(" opp with org and camp HC", async () =>{

        let random = Math.floor(Math.random()*(100-1+1)+1)
        await browser.maximizeWindow();

        await browser.url('http://testingserver:8888/');
       // await browser.url('http://localhost:8888/');

        await  browser.$('[name="user_name"]').setValue("admin");
        await browser.$('[name="user_password"]').setValue("admin");
        await browser.$('input#submitButton').click();
        expect(browser).toHaveTitle("vtiger CRM 5 - Commercial Open Source CRM");
        console.log(await browser.getTitle());
        
        console.log("-------------------------------------Login to the application-------------------------------------------------");
        await browser.$("//td[@class='tabUnSelected']/a[text()='More']").moveTo()
        await browser.$("//a[@name='Campaigns']").click()
       
        console.log("---------------------------------------------creating new campaign---------------------------------------------");

        console.log("output ---------------->>>>>"+await browser.$("//td[@class='moduleName']/a[text()='Campaigns']").isDisplayed());
        await browser.$("//img[@title='Create Campaign...']").click();
        await browser.$("//input[@name='campaignname']").setValue("Campaign"+random);
        await browser.$("//input[@name='closingdate']").clearValue();
        await browser.$("//input[@name='closingdate']").setValue("2023-02-26");
        await browser.$("//textarea[@class='detailedViewTextBox']").setValue("creating a new campaign ");
        await browser.$("(//input[@title='Save [Alt+S]'])[2]").click();

        console.log("---------------------------------verification of created campaign name----------------------------------------------");

        var campRanText=await browser.$("//td[@id='mouseArea_Campaign Name']").getText();
        campRanText=campRanText.trim();
        await browser.$("//td[@class='moduleName']/a[text()='Campaigns']").click();
        var listNames=await browser.$$("//a[@title='Campaigns']/../../../tr/td[3]/a");

        listNames.forEach(async element =>{
           var ref= await element.getText();
            if(campRanText===ref)
            {
            console.log("campaign name has successfully been created and verified");
            }
            else
            {
                console.log("name not found");
            }
        })

        console.log("---------------------------------------------creating new organization---------------------------------------------");

        await browser.$("//td[@class='tabUnSelected']/a[text()='Organizations']").click();
        await browser.$("//img[@title='Create Organization...']").click();
        await browser.$("//input[@name='accountname']").setValue("org"+random);
        await browser.$('[name="description"]').setValue("new org created");
        await browser.$("(//input[@title='Save [Alt+S]'])[2]").click();
        var orgcreated=await browser.$("//span[@id='dtlview_Organization Name']").getText();
        await browser.$("//td[@class='tabSelected']/a[text()='Organizations']").click();
        var listOrg=await browser.$$("//a[@title='Organizations']");

        listOrg.forEach(async element=>{
            var listnameOrg=await element.getText();
            console.log("datalist"+listnameOrg);
            console.log(orgcreated);
            if(orgcreated===listnameOrg)
            {
                console.log("organization name has successfully been created and verified");
            }
            else
            {
                console.log("orgname not found");
            }
        })

         console.log("---------------------------------------------creating new opportunities---------------------------------------------");

         await browser.$("//a[text()='Opportunities']").click();
         await browser.$("//img[@title='Create Opportunity...']").click();
         await browser.$("//input[@name='potentialname']").setValue("opp"+random)
         await browser.$("(//img[@alt='Select'])[1]").click();

         await browser.switchWindow('http://testingserver:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=vtlibPopupView&forfield=related_to&srcmodule=Potentials&forrecord=')
        // await browser.switchWindow('http://localhost:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=vtlibPopupView&forfield=related_to&srcmodule=Potentials&forrecord=')
         
        await browser.$("//a[@id='1']").waitForDisplayed();
        await browser.$("//a[@id='1']").click();
        
        await browser.switchWindow('http://testingserver:8888/index.php?module=Potentials&action=EditView&return_action=DetailView&parenttab=Sales')
        //await browser.switchWindow('http://localhost:8888/index.php?module=Potentials&action=EditView&return_action=DetailView&parenttab=Sales')

        await browser.$("//input[@name='closingdate']").setValue("2023-02-26");
        console.log("switching window***************************");
        await browser.$("(//input[@title='Save [Alt+S]'])[1]").click();
// await browser.debug();

    })

});