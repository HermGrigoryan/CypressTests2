class SignUp {
    visit() {
      cy.visit("https://automationexercise.com/login");
    }

   getUsername() {
      return cy.get('[data-qa="signup-name"]');
    }
  
    getEmail() {
      return cy.get('[data-qa="signup-email"]');
    }
  
    submit() {
      return cy.get('[data-qa="signup-button"]');
    }
    
    generateRandomName(length,email=''){
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return `test${result}${email}`;
    
    }
    getPassword(value){
      return cy.get('[data-qa="password"]').type(value);
    }
    
  //  getTitleMR(){
  //   const button = cy.get(':nth-child(3) > .top > [data-qa="title"]');
  //   return button;
  //  }
  //  getTitleMS(){
  //   const button = cy.get(':nth-child(4) > .top > [data-qa="title"]');
  //   return button;
  //  }
  //   getFirstName(value) {
  //     return cy.get('[data-qa="first_name"]').type(value);
  //   }
  //   getLastName(value) {
  //     return cy.get('[data-qa="last_name"]').type(value);
  //   }
  //   getCompany(value) {
  //     return cy.get('[data-qa="company"]').type(value);
  //   }
  //   getDateDay(){
  //     return cy.get('[data-qa="days"]');
  //   }
  //   getDateMonth(){
  //     return cy.get('[data-qa="month"]');
  //   }
  //   getDateYear(){
  //     return cy.get('[data-qa="year"]');
  //   }
  //   getNewsLetter(){ 
  //     const button = cy.get('#newsletter')
  //     return button;
  //   }
  //   getOptin(){ 
  //     const button = cy.get('#optin')
  //     return button;
  //   }
  //   getAddress(value) {
  //     return cy.get('[data-qa="address"]').type(value);
  //   }
  //   getAddress2(value) {
  //     return cy.get('[data-qa="address2"]').type(value);
  //   }
  //   getContry(){
  //     return cy.get('[data-qa="country"]');
  //   }
  //   getState(value) {
  //     return cy.get('[data-qa="state"]').type(value);
  //   }
  //   getCity(value) {
  //     return cy.get('[data-qa="city"]').type(value);
  //   }
  //   getZipCode(value) {
  //     return cy.get('[data-qa="zipcode"]').type(value);
  //   }
  //   getMobileNumber(value) {
  //     return cy.get('[data-qa="mobile_number"]').type(value);
  //   }
  //   submit2() {
  //     return cy.get('[data-qa="create-account"]');
  //   }
  }
  
  export const registration = new SignUp();
  