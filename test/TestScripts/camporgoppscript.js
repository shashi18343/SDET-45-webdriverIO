import loginPage from '../pageobjectmodel/loginPage.js'
import Campaign from '../pageobjectmodel/campaignpage.js';
import Organization from '../pageobjectmodel/organizationpage.js';
import Opportunities from '../pageobjectmodel/opportunitypage.js';




describe('My Login application', async () => {
    let random = Math.floor(Math.random() * (100-1)+1);


it('should login with valid credentials', async () => {
    await loginPage.login("admin","admin");
})
it('should create new campaign with valid credentials', async () => {
    await Campaign.creatingcampaign(random);
})
it('should validate the new campaign created', async () => {
    await Campaign.verCreatedCamp();
})



it('should create new organization with valid credentials', async () => {
    await Organization.creatingOrg(random);
})
it('should validate the new organization created', async () => {
    await Organization.verCreatedOrg();
})



it('should create new opportunities with valid credentials', async () => {
    await Opportunities.creatingOpportunities(random);

    })
it('should create new opportunities with valid credentials', async () => {
        await Opportunities.verCreatedOppo();
    
    })
});
