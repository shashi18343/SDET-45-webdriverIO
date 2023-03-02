import { expect } from "chai";

class Login{
    get username()
    {
        return $('input[type="text"]')
    }
    get password()
    {
        return $('input[type="password"]')
    }
    get loginBtn()
    {
        return $('input[type="submit"]')
    }


   async login(userName,passWord)
    {
      await  browser.maximizeWindow()
      
      await  browser.url('http://testingserver:8888/');
    // await  browser.url('http://localhost:8888/'); 
    await this.username.setValue(userName);
    await this.password.setValue(passWord);
    await this.loginBtn.click();
    let title= await browser.getTitle();
    console.log( title);
    expect(title).to.equal("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM"); //*********************chai assert
    
    
    }
}

export default new Login();