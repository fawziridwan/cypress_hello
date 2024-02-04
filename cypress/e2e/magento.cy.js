const { italic } = require("colorette")

import PageObject from './../support/page_objects/page_object'
require('cypress-xpath');

describe('Add New Address', () => {

  const LoginPage = new PageObject();

  beforeEach(() => {
    LoginPage.navigateToUrl()
    LoginPage.menuSignIn()
    cy.url().should('contain', '/customer/account/login/')  
  })

  it('Passed to Add Default Billing Address', () => {
    LoginPage.loginIntoApplication('tes.mbagasrw@yopmail.com', 'Welcome@123')
    cy.wait(10000)
    cy.xpath("/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button", {timeout: 5000, multiple: true}).click()
    cy.xpath("//div[@aria-hidden='false']//a[normalize-space()='My Account']", {timeout: 10000}).click()
    cy.xpath("//div[@class='column main']//div[@class='block block-dashboard-addresses']//div[@class='block-content']//div[@class='box box-billing-address']//div[@class='box-actions']//a[@class='action edit']/span",{ multiple: true }).click()
    cy.get('#firstname').clear()
    cy.get('#firstname').type('Bagas')
    cy.get('#lastname').clear()
    cy.get('#lastname').type('Bagas')
    cy.get('#company').clear()
    cy.get('#company').type('Student')
    cy.get('#telephone').clear()
    cy.get('#telephone').type('08512345678')
    cy.get('#street_1').clear()
    cy.get('#street_1').type('Jl.Sanber')
    cy.get('#street_2').clear()
    cy.get('#street_2').type('no 1')
    cy.get('#street_3').clear()
    cy.get('#street_3').type('jakarta barat')
    cy.get('#country', {timeout: 10000}).select('United States')
    cy.get('#region_id', {timeout: 10000}).select('Alabama')
    cy.get('#city').type('Jakarta')
    cy.get('#zip').type('12345')
    cy.get('.action.save.primary').click()
  })
})