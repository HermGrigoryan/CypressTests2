class CardAdd {
  visit() {
    cy.visit("https://automationexercise.com");
  }
  getProductCost() {
    return cy.get(".overlay-content>h2");
  }
  getProductName() {
    return cy.get(".overlay-content>p");
  }
  AddToCard() {
    return cy.get(".add-to-cart");
  }
  getImage() {
    return cy.get(".product_image");
  }
  getTotalPrice() {
    return cy.get(".cart_total_price");
  }
  getCount() {
    return cy.get(".disabled");
  }
  getProced() {
    return cy.get(".col-sm-6 > .btn");
  }
  getB() {
    return cy.get(".modal-footer > .btn");
  }
  getText() {
    return cy.get(".modal-body > :nth-child(1)");
  }
  getLogIn() {
    const button = cy.get(".modal-body > :nth-child(2) > a > u");
    return button;
  }
  getEmail(val) {
    return cy.get('[data-qa="login-email"]').type(val);
  }
  getPassword(val) {
    return cy.get('[data-qa="login-password"]').type(val);
  }
  getLoginButton() {
    const button = cy.get('[data-qa="login-button"]');
    return button;
  }
  getCardClick() {
    const button = cy.get(".shop-menu > .nav > :nth-child(3) > a");
    return button;
  }
  getAdressdelivert() {
    return cy.get("#address_delivery");
  }
  getAdressInvoice() {
    return cy.get("#address_invoice");
  }
  getPlaceOrder() {
    const button = cy.get(":nth-child(7) > .btn");
    return button;
  }
  getCardName(val) {
    return cy.get('[data-qa="name-on-card"]').type(val);
  }
  getCardNumber(val) {
    return cy.get('[data-qa="card-number"]').type(val);
  }
  getCVS(val) {
    return cy.get('[data-qa="cvc"]').type(val);
  }
  getExpirationMonth(val) {
    return cy.get('[data-qa="expiry-month"]').type(val);
  }
  getExpirationYear(val) {
    return cy.get('[data-qa="expiry-year"]').type(val);
  }
  getPayButton() {
    const button = cy.get('[data-qa="pay-button"]');
    return button;
  }
  getOrderPlaced() {
    return cy.get(".col-sm-9");
  }
  continue() {
    const button = cy.get('[data-qa="continue-button"]');
    return button;
  }
}
export const card = new CardAdd();
