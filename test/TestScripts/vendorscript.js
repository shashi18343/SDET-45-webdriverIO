import vendorpage from "../pageobjectmodel/vendorpage.js";
import loginPage from "../pageobjectmodel/loginPage.js";

describe("login and cretaing a new vendor",async()=>
{
    let random = Math.floor(Math.random() * (100-1)+1);

    it("login to the application",async ()=>{
        await loginPage.login("admin","admin");
    })
        it("creating a new vendor",async ()=>{
        await vendorpage.createVendor(random);
     
    })
    it("verifying the vendor is created or not",async ()=>{
        await vendorpage.verifyCreatedVendor();
        
    })
});