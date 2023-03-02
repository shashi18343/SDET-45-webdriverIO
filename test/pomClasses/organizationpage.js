import { expect } from "chai"

class Organization{

    get orgModule()
    {
        return $("//td[@class='tabUnSelected']/a[text()='Organizations']")
    }
    get orgButton()
    {
        return $("//img[@title='Create Organization...']")
    }
    get orgName()
    {
        return $("//input[@name='accountname']")
    }
    get orgDesc()
    {
        return $('[name="description"]')
    }
    get orgSaveBtn()
    {
        return $("(//input[@title='Save [Alt+S]'])[2]")
    }
    get createdOrg()
    {
        return $("//span[@class='dvHeaderText']")
    }
    
    orgWithRan
    async creatingOrg(random)
    {
        await this.orgModule.click();
        let title= await browser.getTitle();
        console.log( title);
        expect(title).to.equal("Administrator - Organizations - vtiger CRM 5 - Commercial Open Source CRM"); //*********************chai assert
        await this.orgButton.click();
       this.orgWithRan = "org"+random
        await this.orgName.setValue(this.orgWithRan);
        await this.orgDesc.setValue("new org created"+random);
        await this.orgSaveBtn.click();
    }
    async verCreatedOrg()
    {
       let createdOrgText=await this.createdOrg.getText();
       console.log(createdOrgText);
       expect(createdOrgText).to.contains(this.orgWithRan);
       console.log("***************************************verified organization************************************");
    }
}

export default new Organization();