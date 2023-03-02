import loginPage from '../pomClasses/loginPage.js'
import createleadpage from '../pomClasses/createleadpage.js'
import { expect } from 'chai';

// let importClass=require('../pageobjectmodel/createleadpage.js')

describe('My Login application', async () => {
    let random =Math.floor(Math.random() * (100-1)+1);
    it('should login with valid credentials', async () => {
    await loginPage.login("admin","admin");
    });
    it('creating a lead with valid credentials', async () => {
    await createleadpage.creatingNewLead(random);

    expect(await(await createleadpage.verifyName).getText()).to.contains("KUMARP"+random)
    });
});
