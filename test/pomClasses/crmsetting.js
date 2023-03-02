

import { expect } from "chai"

class CrmSetting
{
    get settings()
    {
        return $("//span[.=' Administrator']/../following-sibling::td[last()]/img")
    }
    get crmSetting()
    {
        return $("//a[text()='CRM Settings']")
    }
    get workflow()
    {
        return $("//a[contains(.,'Workflows')]")
    }
    get newWorkflow()
    {
        return $('#new_workflow')
    }
    get workflowPop()
    {
        return $('#new_workflow_popup_save')
    }
    get description()
    {
        return $("//input[@id='save_description']")
    }
    get saveBtn()
    {
        return $("//input[@id='save_submit']")
    }
    get workFlowOpt()
    {
        return $("//a[contains(.,'Workflows')]")
    }
    get savedDescription()
    {
        return $("//input[@class='detailedViewTextBox'][@id='save_description']")
    }
    get listWorkflow()
    {
        return $$("//table[@id='expressionlist']//td[2]")
    }
    async crmWorkflow(random)
    {
        await this.settings.moveTo();
        await this.crmSetting.click();
        await this.workflow.scrollIntoView();
        await this.workflow.click();
        await this.newWorkflow.click();
        await this.workflowPop.click();
        await this.description.setValue("newly crated workflow"+random)
        expect (await this.saveBtn.waitForDisplayed()).to.be.true
        await this.saveBtn.click();
        this.savedDescriptionText=await(await this.savedDescription).getValue();
        console.log(this.savedDescriptionText);
        await this.workFlowOpt.click();
        console.log(this.savedDescriptionText);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------------
    deleteWF="";
    async verWorkFcreated(){
        let arr = [];
        await this.listWorkflow.forEach(async list => {
           let text = await list.getText();
           arr.push(text);
        })
        console.log(arr);
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]==this.savedDescriptionText)
            {
                this.deleteWF=arr[i];
                console.log(arr[i]+" is available in the list of workflow table");
            }
        }
        console.log("*********************workflow description had been saved successfully***************************");
    }
//--------------------------------------------------------------------------------------------------------------------------------------------------
    async deleteCreatedWorkflow()
    {
        let workflowDlt=await browser.$("//td[.='"+this.deleteWF+"']/following-sibling::td/a[2]");
                await workflowDlt.scrollIntoView();
                await workflowDlt.click();
                console.log(browser.isAlertOpen());
                console.log(await browser.getAlertText());
                await browser.acceptAlert();
    }
//--------------------------------------------------------------------------------------------------------------------------------------------------
    async verWorkFcreatedIsDlted(){
        var arr1 = [];
            await this.listWorkflow.forEach(async list => {
               let text = await list.getText();
               arr1.push(text);
            })
            console.log(arr1);
            for(let i=0;i<arr1.length;i++)
            {
                if(arr1[i]==this.savedDescriptionText)
                {
                   
                }
                else{
                    console.log(" is not available in the list of workflow table");
                }
            }
            console.log("*********************workflow description had been deleted successfully***************************");
        }
}
export default new CrmSetting();