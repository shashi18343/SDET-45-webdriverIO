describe("automating igp.com",async ()=>{
    it("verifying the elements",async ()=>{

        await browser.maximizeWindow();
        await browser.url("https://www.igp.com/");
        await browser.$("//span[@class='selection-panel-text'][text()='Plants']").click();
        await browser.$("//img[@alt='Self Watering Plants Online']").click();
        await browser.$("//img[@alt='Aglaonema In Motivational Planter']").click();
        let price1=await browser.$("//img[@alt='Aglaonema In Motivational Planter']/../div[2]//span[@class='number']");
        console.log("price1-->"+await price1.getText());
        let price2=await browser.$("//div[@class='prod-price-container ']/span[@class='number prod-price  ']");
        console.log("price2-->"+await price2.getText());
        await browser.$("//input[@id='location-input']").setValue("560076");
        await browser.$("//button[@id='pincode-check-btn']").click();
        let  pinCheckBtn=await browser.$("//div[@class='col s3 no-padding wrapper-check-pincode']");
        expect(await pinCheckBtn.isDisplayed());
        await browser.$("//input[@id='std-datepicker']").click();
        await browser.$("//a[@class='ui-datepicker-next ui-corner-all']/span[@class='ui-icon ui-icon-circle-triangle-e'][text()='Next']").click();
        await browser.scroll(0,60);
        await browser.$("//table[@class='ui-datepicker-calendar']//a[@class='ui-state-default'][text()='3']").click();
        await browser.$("//button[@id='add-cart']").click();
        let cartQuant=await browser.$("//input[@class='qty number c-item-qty-val c-item-qty-val-revamp']");
        let cartQuant1=await cartQuant.getAttribute('value');
        console.log(cartQuant1);
        await browser.$("//span[@class='symbol inc-quantity']").click();
        let totalCartVlu=await browser.$("//span[@id='cart-total-val']");
        console.log(await totalCartVlu.getText());
        let prodNameInCart=await browser.$("//p[@class='c-item-name ']");
        console.log(await prodNameInCart.getText());
        
// await browser.debug();


    })
})

 //img[@alt='Aglaonema In Motivational Planter']/../../..//p[@class='product-name product-name-revamp']
// expect(cartQuant).toBeGreaterThan(1);
        //     let incQuant=await browser.$("//input[@class='qty number c-item-qty-val c-item-qty-val-revamp']");
        //    let incQuantdata=await incQuant.getAttribute('value');
        //     console.log(incQuantdata);
        // await browser.$("//a[contains(.,' Proceed To Checkout')]").click();