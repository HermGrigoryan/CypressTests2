class HomePage{
    visit() {
        cy.visit("https://automationexercise.com/login");
      }
}
export const homePage = new HomePage();
