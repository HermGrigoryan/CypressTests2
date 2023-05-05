import {card} from "../pages/cartAdd"
import {data} from "../utils/data"
let productName, productCost,productQuantity; 
describe("HomePage", () => {  
    it("Verify cart adding from home page with logIn", () => {
        cy.visit("https://automationexercise.com");        
         card.getProductCost().eq(0).invoke('text').then(($val)=>{
            productCost = $val;
        }) 
        card.getProductName().eq(0).invoke('text').then(($text)=>{
            productName = $text
        })        
        card.AddToCard().eq(0).click();        
        cy.get('u').click();
        card.getImage().should("be.exist");   
        cy.then(()=>{
        card.getTotalPrice().should("contain", productCost);
       })
       card.getCount().should("contain", "1");
       card.getProced().click();
       card.getB().click();
       card.getText().and("have.text", ("Register / Login account to proceed on checkout.").trim())
       card.getLogIn().click({force: true});
       card.getEmail(data.email);
       card.getPassword(data.password);
       card.getLoginButton().click();
       card.getCardClick().click();
       card.getProced().click();
       card.getAdressdelivert().should("exist");
       card.getAdressInvoice().should("exist");
       card.getPlaceOrder().click();
       card.getCardName(data.cardName);
       card.getCardNumber(data.cardNumber);
       card.getCVS(data.CVC);
       card.getExpirationMonth(data.expirationMonth);
       card.getExpirationYear(data.expirationYear);
       card.getPayButton().click();
       card.getOrderPlaced().should("exist");
       cy.get('.col-sm-9 > .btn-default').click();
       card.continue().click();
    })
    it("Verify cart adding from home page with unvalid card creditianals", () => {
        cy.visit("https://automationexercise.com");        
         card.getProductCost().eq(0).invoke('text').then(($val)=>{
            productCost = $val;
        }) 
        card.getProductName().eq(0).invoke('text').then(($text)=>{
            productName = $text
        })        
        card.AddToCard().eq(0).click();        
        cy.get('u').click();
        card.getImage().should("be.exist");   
        cy.then(()=>{
        card.getTotalPrice().should("contain", productCost);
       })
       card.getCount().should("contain", "1");
       card.getProced().click();
       card.getB().click();
       card.getText().and("have.text", ("Register / Login account to proceed on checkout.").trim())
       card.getLogIn().click({force: true});
       card.getEmail(data.email);
       card.getPassword(data.password);
       card.getLoginButton().click();
       card.getCardClick().click();
       card.getProced().click();
       card.getAdressdelivert().should("exist");
       card.getAdressInvoice().should("exist");
       card.getPlaceOrder().click();
       card.getCardName(data.cardName);
       card.getCardNumber("2121");
       card.getCVS(data.CVC);
       card.getExpirationMonth(data.expirationMonth);
       card.getExpirationYear(data.expirationYear);
       card.getPayButton().click();
       card.getOrderPlaced().should("exist");
       cy.get('.col-sm-9 > .btn-default').click();
       card.continue().click();
    })
    it.only("Verify cart adding from home page with но card creditianals", () => {
        cy.visit("https://automationexercise.com");        
         card.getProductCost().eq(0).invoke('text').then(($val)=>{
            productCost = $val;
        }) 
        card.getProductName().eq(0).invoke('text').then(($text)=>{
            productName = $text
        })        
        card.AddToCard().eq(0).click();        
        cy.get('u').click();
        card.getImage().should("be.exist");   
        cy.then(()=>{
        card.getTotalPrice().should("contain", productCost);
       })
       card.getCount().should("contain", "1");
       card.getProced().click();
       card.getB().click();
       card.getText().and("have.text", ("Register / Login account to proceed on checkout.").trim())
       card.getLogIn().click({force: true});
       card.getEmail(data.email);
       card.getPassword(data.password);
       card.getLoginButton().click();
       card.getCardClick().click();
       card.getProced().click();
       card.getAdressdelivert().should("exist");
       card.getAdressInvoice().should("exist");
       card.getPlaceOrder().click();      
       card.getPayButton().click().trigger( "Please fill out this field");    
    })
})