//DONE

describe("Login to the V-Tiger application",() => {

            it("enter the login credentials",async () => {
                await browser.maximizeWindow()
                await browser.url('http://localhost:8888/');
                
                 (await browser.$('input[type="text"]')).setValue("admin")
                 await browser.$("//input[@name='user_password']").setValue("admin")
                await browser.$("//input[@type='submit']").click()
                let LeadLink = $('=Leads')
                console.log(LeadLink.getText());
                console.log(LeadLink.getAttribute('href'));
                await LeadLink.click();
                await browser.$("//img[@title='Create Lead...']").click();
                await browser.$('[name="salutationtype"]').selectByVisibleText('Mr.')
                await browser.$('[name="firstname"]').setValue("SHASHI2")
                await browser.$('[name="lastname"]').setValue("KUMAR2")
                await browser.$('[name="company"]').setValue("Test Yantra2")
                await browser.$('#mobile').setValue("7063200000")
                await browser.$('[name="description"]').setValue("SK2 created")
                await browser.$('input[title="Save [Alt+S]"]').click()
                await LeadLink.click();
                var leadName = $('=SHASHI2')
                console.log(leadName.getText());
                await expect(leadName).toHaveText('SHASHI2')
                console.log("verification done for created lead");
                await leadName.click();
                await browser.$('input[title="Edit [Alt+E]"]').click()
                await browser.$('#mobile').clearValue();
                await browser.$('#mobile').setValue("7063200001")
                await browser.$('input[title="Save [Alt+S]"]').click()
                let updatedMobileNum = $('#dtlview_Mobile')
                console.log(updatedMobileNum.getText());
                await expect(updatedMobileNum).toHaveText('7063200001')
                console.log("mobile number verified");
                await browser.$('img[src="themes/softed/images/user.PNG"]').moveTo()
                await browser.$('=Sign Out').click()
                
            })
        
        })