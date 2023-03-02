import { expect } from "chai";

class Opportunities
{
    get opportModule()
    {
        return $("//a[text()='Opportunities']");
    }
    get oppButton()
    {
        return $("//img[@title='Create Opportunity...']")
    }
    get oppName()
    {
        return $("//input[@name='potentialname']")
    }
    get orgLookupIcon()
    {
        return $("(//img[@alt='Select'])[1]")
    }
    // get childUrl()
    // {
        
    //     // return ('http://testingserver:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=vtlibPopupView&forfield=related_to&srcmodule=Potentials&forrecord=')
    //     // return browser.switchWindow('http://testingserver:8888/index.php?module=Accounts&action=Popup&html=Popup_picker&form=vtlibPopupView&forfield=related_to&srcmodule=Potentials&forrecord=')
    // }
    // get waitForDisplay()
    // {
    //     return $("//a[@id='1']")
    // }
    get searchorg()
    {
        return $("//input[@name='search_text']")
    }
    get searchBtn()
    {
        return $("//input[@name='search']")
    }
    get selectFirstOrg()
    {
        return $("//a[@id='1']")
    }
    get oppoClosingDate()
    {
        return $("//input[@name='closingdate']")
    }
    get oppSave()
    {
        return $("(//input[@title='Save [Alt+S]'])[1]")
    }
    get createdOppo()
    {
        return $("//span[@class='dvHeaderText']")
    }

    oppWithRan
async creatingOpportunities(random)
{
    await this.opportModule.click();
    let title= await browser.getTitle();
        console.log( title);
        expect(title).to.equal("Administrator - Opportunities - vtiger CRM 5 - Commercial Open Source CRM"); //*********************chai assert
    await this.oppButton.click();
    this.oppWithRan = "opp"+random
    await this.oppName.setValue(this.oppWithRan)
    await this.orgLookupIcon.click();
    let win = await browser.getWindowHandles()
    await browser.switchToWindow(win[1])
    await this.searchorg.setValue(this.oppWithRan);
    await this.searchBtn.click();
    await this.selectFirstOrg.moveTo();
    await this.selectFirstOrg.click();
    await browser.switchToWindow(win[0])
//await this.childUrl.switchWindow;
// await this.waitForDisplay.waitForDisplayed();
    await this.oppoClosingDate.setValue("2023-02-26");
    await this.oppSave.click();

}
async verCreatedOppo()
{
    let createdOppoText=await this.createdOppo.getText();
    console.log(createdOppoText);
    expect(createdOppoText).to.contains(this.oppWithRan);
    console.log("***************************************verified opportunities************************************");
}



}

export default new Opportunities();

