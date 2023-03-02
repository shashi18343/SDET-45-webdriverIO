class CalenderPage{

    get simpleDateTab()
    {
        return $("//li[@id='Simple Date Picker']")
    }

    get dropdownDatPicker()
    {
        return $("//li[@id='DropDown DatePicker']")
    }

    get iconTriger()
    {
        return $("//li[@id='Icon Trigger']")
    }

    async clickOnSimpleDateTab()
    {
        // await this.simpleDateTab.moveTo();
        await this.simpleDateTab.click();
    }
    async clickOndropdownDatPicker()
    {
        await  this.dropdownDatPicker.click();
    }
    async clickOniconTriger()
    {
        await  this.iconTriger.click();
    }
}

export default new CalenderPage();