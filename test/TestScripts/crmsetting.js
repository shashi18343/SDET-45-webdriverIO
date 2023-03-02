import Login from "../pomClasses/loginPage.js";
import Crmsetting from "../pomClasses/crmsetting.js";


describe('workflow of crmsetting', async () => {
    let random =Math.floor(Math.random() * (100-1)+1);

it("should login with valid credentials", async () => {
    await Login.login("admin","admin");
    })

it("creating workflow with valid credentials",async () =>{
    await Crmsetting.crmWorkflow(random);
    })

it("verify the created workflow",async ()=> {
        await Crmsetting.verWorkFcreated();
    })
    
it("check whether the created workflow is deleted or not by clicking on delete btn",async ()=>{
    await Crmsetting.deleteCreatedWorkflow();
        await Crmsetting.verWorkFcreatedIsDlted();
    })
  
});
