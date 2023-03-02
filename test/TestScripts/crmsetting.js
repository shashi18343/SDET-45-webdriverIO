import Login from "../pageobjectmodel/loginPage.js";
import Crmsetting from "../pageobjectmodel/crmsetting.js";


describe('workflow of crmsetting', async () => {
    let random =Math.floor(Math.random() * (100-1)+1);
    it('should login with valid credentials', async () => {
    await Login.login("admin","admin");
});
    // it('creating workflow with valid credentials', async () => {
    // await Crmsetting.crmWorkflow("well maintained and stable");

    // });

    // it("verify the created workflow",async ()=>
    // {
    //     await crmsetting.verWorkFcreated();
    // })
    // it('login',async()=>{
    //     await browser.url('http://testingserver:8888/')
    // })
});
