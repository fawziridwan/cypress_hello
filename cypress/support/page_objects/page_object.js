class PageObject {
    navigateToUrl() {
        cy.visit('https://magento.softwaretestingboard.com/')
    }

    menuSignIn() {
        cy.get('.panel > .header > :nth-child(2) > a').click()
    }

    inputEmail(email) {
        const field = cy.get('#email')
        field.clear();
        field.type(email);
        return this;
    }

    inputPassword(password) {
        const field = cy.get('#pass')
        field.clear();
        field.type(password);
        return this;
    }

    submitLogin() {
        const button = cy.get('#send2')
        button.click()
    }

    loginIntoApplication(email, password) {
        this.inputEmail(email);
        this.inputPassword(password);
        this.submitLogin();
    }

}

export default PageObject;