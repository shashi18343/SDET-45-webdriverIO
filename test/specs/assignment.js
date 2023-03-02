describe("Online food ordering sysytem",async ()=>{

    it("Opening the browser and login to the application using login credentials",async ()=>{

        await browser.maximizeWindow();
        await browser.url("http://testingserver/domain/Online_Food_Ordering_System/");
        await browser.$("//a[@class='nav-link active'][text()='Login']").click();
        await browser.$("//input[@name='username']").setValue("sk");
        await browser.$("//input[@name='password']").setValue("sk7063278343");
        await browser.$("//input[@name='submit']").click();
        await browser.$("//a[@class='nav-link active'][contains(.,'Restaurants')]").click();
        await browser.$("//div[@class='entry-logo']/..//a[contains(.,'Nan Xiang Xiao Long Bao')]").click();
        let menuName= await browser.$("//a[contains(.,'Prawn Crackers')]").getText();
        console.log("menuName-->"+menuName);
        let price=await browser.$("//a[contains(.,'Prawn Crackers')]/ancestor::div[@class='food-item']//span[@class='price pull-left']").getText();
        console.log("initial price-->"+price);
        let quantity=await browser.$("//a[contains(.,'Prawn Crackers')]/ancestor::div[@class='food-item']//input[@name='quantity']");
        await quantity.clearValue();
        await quantity.setValue("3");
        await browser.$("//a[contains(.,'Prawn Crackers')]/ancestor::div[@class='food-item']//input[@value='Add To Cart']").click();
        let cartMenuName= await browser.$("//div[@class='title-row']").getText();
        console.log("cartMenuName-->"+cartMenuName);
        if(menuName===cartMenuName)
        {
            console.log("varifying the names of menu-->true");
        }
        else
        {
            console.log("varifying the names of menu-->false");
        }
        let CartQuant=await browser.$('#example-number-input');
        let CartQuantNo=await CartQuant.getAttribute('value');
        console.log("cart quantity-->"+CartQuantNo);
        let cartProductPri=await browser.$('#exampleSelect1');
        let cartProductPrice=await cartProductPri.getAttribute('value');
        console.log("cart product price-->"+cartProductPrice);
        let totalAmount=await browser.$("//div[@class='widget-body']//strong").getText();
        console.log("Total amount in cart-->"+totalAmount);
        await browser.$("//a[@class='btn btn-success btn-lg active']").click();
        let finalCartPrice=await browser.$("//div[@class='cart-totals-fields']//td[@class='text-color']/following-sibling::td/strong").getText();
        console.log("final cart price displayed-->"+finalCartPrice);
        if(totalAmount===finalCartPrice)
        {
            await browser.$("//input[@class='btn btn-success btn-block']").click();  
        }
        else
        {
            console.log("price not matched");
        }

        let alertpop=await browser.getAlertText();
        console.log("alert text-->"+alertpop);
        await browser.acceptAlert();
        let alertpopConf=await browser.getAlertText();
        console.log("alert text-->"+alertpopConf);
        await browser.acceptAlert();

//     // await browser.debug();
    })
})










//-------------------------------------------------------getValue()------------------------------------------------------------------------
// describe("login to the application",async ()=>{
//     it("performing different operations", async ()=>{
//         await browser.maximizeWindow();
//         await browser.url("http://testingserver:8888/");
//         await browser.$("//input[@name='user_name']").setValue("admin");
//         await browser.$("//input[@name='user_password']").setValue("admin");
//         await browser.$("//input[@id='submitButton']").click();
//         await browser.$("//td[@class='tabUnSelected']/a[contains(.,'Opportunities')]").click();
//         let dDown=await browser.$("//div[@id='basicsearchcolumns_real']/select[@id='bas_searchfield']");
//         await dDown.click();
//         let relaTo=await dDown.selectByAttribute('value','related_to');
//         console.log(await dDown.getValue());

//     })
// });

//-------------------------------------------------------scrollIntoView()------------------------------------------------------------------------

// describe("login to the application",async ()=>{
//     it("performing different operations", async ()=>{
//         await browser.maximizeWindow();
//         await browser.url("https://www.amazon.in/");

//         let scrollOpt=await browser.$("//span[@class='a-color-base'][contains(.,'small businesses')]/../following-sibling::span/a");

//         //let scrollOpt=await browser.$("//li[@class='nav_first']/a[@class='nav_a'][contains(.,'Sell on Amazon')]");
//         await scrollOpt.scrollIntoView();
//         console.log(await scrollOpt.getText());
//     })
// });

//-------------------------------------------------------(MOUSE HOVER)moveTo()------------------------------------------------------------------------


// describe("login to the application",async ()=>{
//     it("performing different operations", async ()=>{
//         await browser.maximizeWindow();
//         await browser.url("http://testingserver:8888/");
//         await browser.$("//input[@name='user_name']").setValue("admin");
//         await browser.$("//input[@name='user_password']").setValue("admin");
//         await browser.$("//input[@id='submitButton']").click();
//         await browser.$("//td[@class='small']//img[@src='themes/softed/images/mainSettings.PNG']").moveTo();
//         await browser.$("//a[@class='drop_down_usersettings'][text()='CRM Settings']").click();
//     })
// })

//-------------------------------------------------------CAPTURING ERROR MESSAGE------------------------------------------------------------------------

// describe("login to the application",async ()=>{
//         it("performing different operations", async ()=>{
//             await browser.maximizeWindow();
//             await browser.url("http://testingserver:8888/");
//             await browser.$("//input[@name='user_name']").setValue("admin");
//             await browser.$("//input[@name='user_password']").setValue("admin");
//             await browser.$("//input[@id='submitButton']").click();
//             let errMess=await browser.$("//div[@class='errorMessage']");
//             expect(errMess).toBeDisplayed();
//             console.log(errMess.getText());
    //     })
    // })
    
//-------------------------------------------------------$$ method------------------------------------------------------------------------
        
describe("login to the application",async ()=>{
     it("performing different operations", async ()=>{

        await browser.maximizeWindow();
        await browser.url("http://testingserver:8888/");
        await browser.$("//input[@name='user_name']").setValue("admin");
        await browser.$("//input[@name='user_password']").setValue("admin");
        await browser.$("//input[@id='submitButton']").click();
        await browser.$("//td[@class='tabUnSelected']/a[text()='Organizations']").click();
        console.log("-------------using findelements method--------------");
        let listOrg=await browser.$$("//td/a[@title='Organizations']");
        // listOrg.forEach(async element=>{
        // console.log(await element.getText());

        // })
        //or
        // let listO=listOrg.filter(async ele=>{
        //     console.log(await ele.getText());
        // })
        //or
        // for(let i=0;i<listOrg.length;i++)
        // {
        //     console.log(await listOrg[i].getText());
        // }
       
        let listO=await Promise.all(listOrg.map(async elem=>
            await elem.getText()
        ));
        console.log(listO);

        console.log("-------------------printed all the elements--------------------");
        })
    });
    
        
//-------------------------------------------------------Handling dropdowns------------------------------------------------------------------------
        
// describe("login to the application",async ()=>{
//          it("performing different operations", async ()=>{
    
//             await browser.maximizeWindow();
//             await browser.url("http://testingserver:8888/");
//             await browser.$("//input[@name='user_name']").setValue("admin");
//             await browser.$("//input[@name='user_password']").setValue("admin");
//             await browser.$("//input[@id='submitButton']").click();
//             await browser.$("//td[@class='tabUnSelected']/a[text()='Organizations']").click();
//             let dropDown=await browser.$('#basicsearchcolumns_real #bas_searchfield');
//             await dropDown.selectByAttribute('value','bill_city');
//             console.log(await dropDown.getValue());
//          //console.log(await dropDown.getValue());
//          //await dropDown.selectByIndex(3);
//          //await dropDown.selectByVisibleText("Phone");
        
//     })
// })

//-------------------------------------------------------Handling calender popup------------------------------------------------------------------------


// describe("login to the application",async ()=>{
//     it("performing different operations", async ()=>{
//         await browser.maximizeWindow();
//         await browser.url("http://testingserver:8888/");
//         await browser.$("//input[@name='user_name']").setValue("admin");
//         await browser.$("//input[@name='user_password']").setValue("admin");
//         await browser.$("//input[@id='submitButton']").click();
//         await browser.$("//a[text()='Email']").click();
//         await browser.$("//img[@title='Open Calendar...']").click();
//         await browser.$("//a[text()='26']").click();
//         console.log("calander popoup-------------------------------------------------");

//         //  await browser.debug();
//     })
// });




/*
Note:-->
'it.skip' and 'xit' is used to skip a particular 'it' block.
skipping a complete .js file   "include that .js file in exclude block"
*/

