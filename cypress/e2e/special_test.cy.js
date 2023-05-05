import { func } from "../pages/functions";
import { data } from "../utils/data1";
describe("SignIn", () => {  
it("Verify login functionality with valid credentials and MR", () => {
  func.visit();
  func.getPageWithButton();
  func.getName(data.name);
  func.getEmail(data.email);
  func.getMessege(data.messege);

//   cy.get(".et_pb_button").eq(1).realHover().then(($element)=>{
//     cy.wrap($element)
//     .invoke('css', 'background-color')
//     .then(background => {
//         cy.log(background)
//         expect($element).to.have.css("background-color",background)
//     })
//    })
})
it("second link",() => {
    func.visit();
    func.getSecondLink();
    func.getMainBannerSecond().should("exist");    
   })
it("third link",() => {
    func.visit();
    func.getThirdLink();
    func.getMainBannerThird().should("exist");    
   })
it("4th link",() => {
    func.visit();
    func.get4thLink();
    func.get4thName(data.name);
    func.get4thMessege(data.messege); 
   })
it("5th link",() => {
    func.visit();
    func.get5thLink();
    func.get5thName(data.name);
    func.button5();
    func.get5thMain().should("exist");   
   })
it("6th link",() => {
    func.visit();
    func.get7thLink();
    func.buttonClick();
    //func.button2();
    // func.getExample();
   })
it.only("About button", () =>{
    func.visit();
    func.getAbout();
    func.getimg().should("exist");
    func.getText().should("exist");
    func.getBigBox().should("exist");
    func.getNameBox(data.name);
    func.getMailBox(data.email);
    func.getMessegeBox(data.messege);

}) 
  
})