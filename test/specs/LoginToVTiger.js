describe("Login to the V-Tiger application",() => {

    it("enter the login credentials",async () => {
         
         browser.url('http://testingserver:8888/');
        
         const userN = $('input[type="text"]')
         userN.setValue("admin")
         await browser.pause(5000)
         const pass = $('input[type="password"]')
         pass.setValue("admin")
         await browser.pause(5000)
        //  const loginBtn = 
         $('input[type="submit"]').click()
        //  loginBtn.click();
        await browser.pause(5000)
        


       
    })

})