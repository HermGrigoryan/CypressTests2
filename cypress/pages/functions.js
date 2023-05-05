class functions{
    visit(){
        return cy.visit('https://ultimateqa.com/automation');
    }
    getPageWithButton(){
        return cy.get('.et_pb_text_inner > ul > :nth-child(1) > a').click();
    }
    getName(value){
        return cy.get('#et_pb_contact_name_0').type(value);
    }
    getEmail(value){
        return cy.get('#et_pb_contact_email_0').type(value)
    }
    getMessege(value){
        return cy.get('#et_pb_contact_message_0').type(value);
    }
    getSecondLink(){
        return cy.get('.et_pb_text_inner > ul > :nth-child(2) > a').click();
    }
    getMainBannerSecond(){
        return cy.get('.et_pb_section_0');
    }
    getThirdLink(){
        return cy.get('.et_pb_text_inner > ul > :nth-child(3) > a').click();
    }
    getMainBannerThird(){
        return cy.get('.et_pb_row_0 > .et_pb_column');
    }
    get4thLink(){
        return cy.get('.et_pb_text_inner > ul > :nth-child(4) > a').click();
    }
    get4thName(value){
        return cy.get('#et_pb_contact_name_0').type(value);
    }
    get4thMessege(value){
        return cy.get('#et_pb_contact_message_0').type(value);
    }
    get5thLink(){
        return cy.get('.et_pb_text_inner > ul > :nth-child(5) > a').click();
    }
    get5thName(value){
        return cy.get('[name="firstname"]').type(value);
    }
    button5(){
        return cy.get('#submitForm').click();
    }
    get5thMain(){
        return cy.get('h1 > span');
    }
    get6thLink(){
        return  cy.get('.et_pb_text_inner > ul > :nth-child(6) > a').click();
    }
    get7thLink(){
        return cy.get('.et_pb_text_inner > ul > :nth-child(7) > a').click();
    }
    buttonClick(){
        return cy.get(':nth-child(3) > #button1').click();
    }
    // button2(){
    //     return cy.get('#button2').eq(1).click();
    // }
    getExample(){
        return cy.get('#idExample').click();
    }
    getAbout(){
        return cy.get('#menu-item-217538 > a').click();
    }
    getimg(){
        return cy.get('.wp-image-217540');
    }
    getText(){
        return cy.get('.et_pb_blurb_2 > .et_pb_blurb_content');
    }
    getBigBox(){
        return cy.get('.et_pb_section_4');
    }
    getNameBox(value){
        return cy.get('#et_pb_contact_name_0').type(value);
    }
    getMailBox(value){
        return cy.get('#et_pb_contact_email_0').type(value);
    }
    getMessegeBox(value){
        return cy.get('#et_pb_contact_message_0').type(value);
    }
}

export const func = new functions();