import { expect } from "chai"

class vendor
{
    get moreModule()
    {
        return $("//td[@class='tabUnSelected']/a[text()='More']")
    }
    get vendorOption()
    {
        return $("//a[@name='Vendors']")
    }
    get createNewVendor()
    {
        return $("//img[@title='Create Vendor...']")
    }
    get vendorName()
    {
        return $('[name="vendorname"]')
    }
    get vendorDesc()
    {
        return $('[name="description"]')
    }
    get clickVendorSave()
    {
        return $("(//input[@title='Save [Alt+S]'])[1]")
    }
    get createdVendorName()
    {
        return $("//td[@id='mouseArea_Vendor Name']")
    }
    get vendorModule()
    {
        return $("//a[text()='Vendors'][@class='hdrLink']")
    }
    get listVendorCreated()
    {
        return $$("//tr/td/a[@title='Vendors']");

    }


    async createVendor(random)
    {
        await  this.moreModule.moveTo();
        await  this.vendorOption.click();
        let title= await browser.getTitle();
        console.log( title);
        expect(title).to.equal("Administrator - Vendors - vtiger CRM 5 - Commercial Open Source CRM"); //*********************chai assert
        await this.createNewVendor.click();
        await this.vendorName.setValue("vendor"+random);
    //    let vendorName= await this.vendorName.getText();
    // //     console.log(vendorName);
        await this.vendorDesc.setValue("vendor is created and name is--------------");
        await this.clickVendorSave.click();
    }

    async verifyCreatedVendor()
    {
       let vendorNameCreated=await this.createdVendorName.getText();
       console.log(vendorNameCreated);
       await this.vendorModule.click();

        this.listVendorCreated.forEach(async nameText => {

            let eachNameText = await nameText.getText();
            expect(eachNameText).to.equal(vendorNameCreated)
            
        });

        // expect(this.listVendorCreted).to.contain(vendorNameCreated);
    //    expect(vendorNameCreated).to.equal(this.vendorName);
    }
}


export default new vendor();