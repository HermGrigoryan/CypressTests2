import { registration } from "../pages/SignUp";
import { s } from "../pages/SignIn";
import { data } from "../utils/data";
let userName,secondUserName;
describe("SignIn", () => {  
  it("Verify login functionality with valid credentials and MR", () => {
    registration.visit();
    registration.getUsername().type(registration.generateRandomName(6, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });    
    s.getTitleMR().click(); 
    s.getPassword(data.password);    
    s.getFirstName(data.firstName);
    s.getLastName(data.lastName);
    s.getCompany(data.company);
    s.getAddress(data.adress);
    s.getAddress2(data.adress2);
    s.getState(data.state);
    s.getCity(data.city);
    s.getZipCode(data.zipCode);
    s.getMobileNumber(data.mobilePhone);
    s.submit().click();
    cy.url().should('include', "/account_created");
  });
  it("Verify login functionality with valid credentials and MS", () => {
    registration.visit();
    registration.getUsername().type(registration.generateRandomName(6, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });
    // cy.get('[data-qa="name"]').then(($val)=>{
    //   expect($val).to.include(userName)
    // })
    s.getTitleMR().click();
    s.getPassword(data.password);
    s.getFirstName(data.firstName);
    s.getLastName(data.lastName);
    s.getCompany(data.company);
    s.getAddress(data.adress);
    s.getAddress2(data.adress2);
    s.getState(data.state);
    s.getCity(data.city);
    s.getZipCode(data.zipCode);
    s.getMobileNumber(data.mobilePhone);
    s.submit().click();
    cy.url().should('include', "/account_created");
  });
  it("Verify login functionality with empty credentials", () => {
    registration.visit();
    registration.getUsername().type(registration.generateRandomName(6, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });      
    s.getPassword(data.empty);
    s.getFirstName(data.empty);
    s.getLastName(data.empty);
    s.getCompany(data.empty);
    s.getAddress(data.empty);
    s.getAddress2(data.empty);
    s.getState(data.empty);
    s.getCity(data.empty);
    s.getZipCode(data.empty);
    s.getMobileNumber(data.empty);
    s.submit().click();
    cy.url().should('include', "/account_created");
  });
  it("Verify login functionality with no credentials", () => {
    registration.visit();
    registration.getUsername().type(registration.generateRandomName(6, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });            
    s.submit().click().trigger( "Please fill out this field");    
  });
  it ("Verify login functionality with some no credentials", () => {
    registration.visit();
    registration.getUsername().type(registration.generateRandomName(6, ""));
    registration
      .getUsername()
      .invoke("val")
      .then((val) => {
        userName = val;
        cy.log(userName);
      });
    registration
      .getEmail()
      .type(registration.generateRandomName(5, "@gmail.com"));
    registration.submit().click();
    cy.get('[data-qa="name"]')
      .invoke("val")
      .then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });       
    s.getPassword(data.empty);
    s.getFirstName(data.empty);
    s.getLastName(data.empty);    
    s.getState(data.empty);
    s.getCity(data.empty);
    s.getZipCode(data.empty);
    s.submit().click().trigger( "Please fill out this field");    
  });

});
