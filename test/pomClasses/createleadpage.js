import { expect }from 'chai';
class CreateLead
{
    get clickLead_mbtn()
    {
        return $('=Leads')
    }
    get clickCreateLead_btn()
    {
        return $('img[src="themes/softed/images/btnL3Add.gif"]')
    }
    get surName_Slt()
    {
       return $('[name="salutationtype"]')
    }
    get firstName_TF()
    {
        return  $('[name="firstname"]')
    }
    get lastName_TF()
    {
        return $('[name="lastname"]')
    }
    get companyName_TF()
    {
        return $('[name="company"]')
    }
    get mobileNo_TF()
    {
        return $('#mobile')
    }
    get description_TF()
    {
        return  $('[name="description"]')
    }
    get save_Btn()
    {
        return $('input[title="Save [Alt+S]"]')
    }
    get verifyName()
    {
        return $("//span[@class='dvHeaderText']")
    }
    async creatingNewLead(random)
    {
        await this.clickLead_mbtn.click()
        await this.clickCreateLead_btn.click()
        await this.surName_Slt.selectByVisibleText('Mr.')
        await this.firstName_TF.setValue("SHASHIP")
        await this.lastName_TF.setValue("KUMARP"+random)
        await this.companyName_TF.setValue("Test Yantra p")
        await this.mobileNo_TF.setValue("7063200000")
        await this.description_TF.setValue("SHASHIP created")
        expect(await this.save_Btn.isDisplayed()).to.be.true
        await this.save_Btn.click()
// expect(await (this.verifyName).toBeDisplayed).to.be.true;
// (await this.verifyName).isDisplayed
// expect(await this.verifyName.isDisplayed()).to.be.true

    }
}

export default new CreateLead()
