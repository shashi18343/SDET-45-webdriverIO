describe("interaction with web element",function()
{
    it("enter value in a field", function()
    {
        browser.url('/')

        const search = $('#twotabsearchtextbox')
        search.setValue('Apple Mac Book')

    })
})