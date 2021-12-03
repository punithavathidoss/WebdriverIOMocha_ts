class SignInTesting {


    async pageurl() { await browser.url("http://automationpractice.com/index.php") }
    get signInElement() { return $(".login") }
    get headerElement() { return $(".page-heading") }
    get mailId() { return $('//input[@id="email_create"]') }
    get createaccountbtn() { return $('//*[@name="SubmitCreate"]') }

    async accounturl() {
        await browser.url("http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation")
    }
    get accountHeaderElement() { return $("//h1[text()='Create an account']") }

    get genderradio() { return $('//input[@id="id_gender2"]') }
    get firstName() { return $("//input[@id='customer_firstname']") }
    get lastName() { return $('//input[@id="customer_lastname"]') }
    get password() { return $('//input[@id="passwd"]') }
    get dobdate() { return $('#days') }
    get dobmonth() { return $('#months') }
    get dobyear() { return $('#years') }
    get checkedbox() { return $('//input[@id="optin"]') }
    // get firstName() { return $('//input[@id="firstname"]') }
    // get lastName() { return $('//input[@id="lastname"]') }
    get companyvalue() { return $('//input[@id="company"]') }
    get address1() { return $('//input[@name="address1"]') }
    get address2() { return $('//input[@name="address2"]') }
    get city() { return $('//input[@name="city"]') }
    get state() { return $('//select[@name="id_state"]') }
    get zipCode() { return $('//input[@name="postcode"]') }
    get country() { return $("//select[@id='id_country']") }
    get phoneNumber() { return $('//input[@name="phone_mobile"]') }
    get addressAlias() { return $('//input[@id="alias"]') }
    get registerbtn() { return $('//button[@name="submitAccount"]') }
    get headtext() { return $("//h1[text()='My account']") }

    async setFirstAndLastName(name: { firstname: string, lastname: string }) {
        await this.firstName.setValue(name.firstname)
        await this.lastName.setValue(name.lastname)
    }

    async setPassword(password: string) {
        await this.password.setValue(password)
    }
    async selectDateOfBirth(date: { day: number, month: number, year: number }) {
        await this.dobdate.selectByIndex(date.day)
        await this.dobmonth.selectByAttribute('value', date.month)
        await this.dobyear.selectByIndex(date.year)
    }
    async setCompany(company: string) {
        await this.companyvalue.setValue(company)
    }

    async setAddress(address: { address1: string, address2: string, zipCode: number, city: string }) {
        await this.address1.setValue(address.address1)
        await this.address2.setValue(address.address2)
        await this.city.setValue(address.city)
        // await this.state.selectByIndex(3)
        // await this.country.selectByIndex(1)
        await this.zipCode.setValue(address.zipCode)
    }

    async setPhoneNumber(mobileNumber: string) {
        await this.phoneNumber.setValue(mobileNumber)
    }

    async setAliasAddress(myaddress: string) {
        await this.addressAlias.setValue(myaddress)
    }

    async clickRegister() {
        await this.registerbtn.click()
    }
}

export default new SignInTesting()