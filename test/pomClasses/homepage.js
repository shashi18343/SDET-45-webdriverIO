class homepage
{
    get homePageOption() { return $("//img[@src='themes/softed/images/Home.PNG']")}
    get calenderModule() { return $("//a[contains(.,'Calendar')]") }
    get leadsModule() {   return $("//td[@class='tabUnSelected']/a[contains(.,'Leads')]") }
    get organizationModule() {    return $("//td[@class='tabUnSelected']/a[contains(.,'Organizations')]") }
    get contactsModule() {    return $("//td[@class='tabUnSelected']/a[contains(.,'Contacts')]")  }
    get OpportunitiesModule(){    return $("//td[@class='tabUnSelected']/a[contains(.,'Opportunities')]")}
    get productsModule(){   return $("//td[@class='tabUnSelected']/a[contains(.,'Products')]") }
    get documentsModule(){   return $("//td[@class='tabUnSelected']/a[contains(.,'Documents')]") }
    get emailModule() {  return $("//td[@class='tabUnSelected']/a[contains(.,'Email')]")  }
    get ticketsModule() {    return $("//td[@class='tabUnSelected']/a[contains(.,'Trouble Tickets')]")  }
    get dashboardModule() {   return $("//td[@class='tabUnSelected']/a[contains(.,'Dashboard')]")   }
    get moreModule()  {   return $("//td[@class='tabUnSelected']/a[contains(.,'More')]") }
    get campaignsModule() {   return $("//a[@name='Campaigns']")  }
      get vendorsModule() {    return $("//a[@name='Vendors']")  }
      get administrationOption() { return $("//img[@src='themes/softed/images/user.PNG']") }
      get signOut(){ return $("//a[text()='Sign Out']") }
      get set()  {  return $(" //span[text()=' Administrator']/../../td[4]/img")    }
      get crmSet() {  return  $("//a[text()='CRM Settings']")   }


    async clickHomePageOption()  {    await this.homePageOption.click();  }
    async clickCalenderModule()  {    await this.calenderModule.click();  }
    async clickLeadsModule()  {    await this.leadsModule.click();  }
    async clickOrganizationModule()  {    await this.organizationModule.click();  }
    async clickContactsModule()  {    await this.contactsModule.click();  }
    async clickOpportunitiesModule()  {    await this.OpportunitiesModule.click();  }
    async clickDocumentsModule()  {    await this.documentsModule.click();  }
    async clickEmailModule()  {    await this.emailModule.click();  }
    async clickTicketsModule()  {    await this.ticketsModule.click();  }
    async clickDashboardModule() { await (await this.dashboardModule).click();}
    async moveToMoreModule()  {  await this.moreModule.moveTo();}
    async clickCampaignsModule() { await this.campaignsModule.click();}
    async clickVendorsModule() { await this.vendorsModule.click(); }
    async moveToAdministrationOption() { await this.administrationOption.moveTo(); }
    async clickSignOut() { await this.signOut.click(); }
    async setting()  {  await this.set.moveTo();   }
    async crmSetting() {  await this.crmSet.click()  }






    // get OpportunitiesModule()
    // {
    //     return $("") 
    // }
    // get OpportunitiesModule()
    // {
    //     return $("") 
    // }
}

export default new homepage();