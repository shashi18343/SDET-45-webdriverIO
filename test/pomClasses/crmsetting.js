const { expect } = require("chai")

class CrmSetting
{
    get settings()
    {
        // return $("//span[@class='userName']/../../td[4]/img")
        return $("//span[.=' Administrator']/../following-sibling::td[last()]/img")     //using last index position
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
        return $('#save_description')
    }
    get saveBtn()
    {
        return $('#save_submit')
    }
    get workFlowOpt()
    {
        return $("//a[contains(.,'Workflows')]")
    }
    get listWorkflow()
    {
        return $$("//td[@class='listTableRow small']")
    }

    async crmWorkflow(desc)
    {
        await this.settings.moveTo();
        await this.crmSetting.click();
        await this.workflow.scrollIntoView().click();
        await this.newWorkflow.click();
        await this.workflowPop.click();
        await this.description.setValue(desc)
        await this.saveBtn.click();
        await this.workFlowOpt.scrollIntoView.click();

    }

    async verWorkFcreated()
    {
        await this.listWorkflow.forEach(async listWF => {
            let listWFText=await listWF.getText()
            expect(listWFText).to.equal()

            
        });
    }


}

export default new CrmSetting();