import { expect } from "chai"

class Campaign
{
    get mouseHoverToMore()
    {
        return $("//td[@class='tabUnSelected']/a[text()='More']")
    }
    get campaignModule()
    {
        return $("//a[@name='Campaigns']")
    }
    get createCampaignButton()
    {
        return $("//img[@title='Create Campaign...']")
    }
    get campName()
    {
        return $("//input[@name='campaignname']")
    }
    get clearValueOfClosingDate()
    {
        return $("//input[@name='closingdate']")
    }
    get setValueOfClosingDate()
    {
        return $("//input[@name='closingdate']")
    }
    get descripTextBox()
    {
       return $("//textarea[@class='detailedViewTextBox']") 
    }
    get saveBtnCamp()
    {
        return $("(//input[@title='Save [Alt+S]'])[2]")
    }
    get confCampName()
    {
        return $("//span[@id='dtlview_Campaign Name']")
    }


 campWithRan
    async creatingcampaign(random)
    {
        await this.mouseHoverToMore.moveTo();
        await this.campaignModule.click();
        let title= await browser.getTitle();
        console.log( title);
        expect(title).to.equal("Administrator - Campaigns - vtiger CRM 5 - Commercial Open Source CRM"); //*********************chai assert
        await this.createCampaignButton.click();
         this.campWithRan="camp"+random;
        await this.campName.setValue(this.campWithRan);
        await this.clearValueOfClosingDate.clearValue();
        await this.setValueOfClosingDate.setValue("2023-02-26");
        await this.descripTextBox.setValue("creating a new campaign");
        await this.saveBtnCamp.click();

    }

    async verCreatedCamp()
    {
       let confCampNameText=await this.confCampName.getText();
       console.log("created campaign name************************>>>>>>>>"+confCampNameText);
        expect(confCampNameText).to.equal(this.campWithRan);
        console.log("***************************************verified campaign************************************");
    }

}

export default new Campaign();