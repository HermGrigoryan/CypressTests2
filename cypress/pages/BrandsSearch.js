class BrandSearch{
    getCategory(){
        return cy.get('.left-sidebar > h2');
    }
    getbutton(){
        return cy.get('[data-parent="#accordian"]');
    }
    getWomanClothes(){
        return cy.get('#Women > .panel-body');
    }
    getManClothes(){
        return cy.get('#Men > .panel-body');
    }
    getKidsClothes(){
        return cy.get('#Kids > .panel-body');
    }
    getBrandName(){
        return cy.get('.brands-name > .nav > :nth-child(1) > a');
    }
    getBrandsNames(){
        return cy.get('.overlay-content > p');
    }
 
}
export const brand = new BrandSearch();