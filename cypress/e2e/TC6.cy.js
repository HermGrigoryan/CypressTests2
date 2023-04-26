import {brand} from "../pages/BrandsSearch"
let numberCountPolo, number

describe('Brnads and Searching', () => {
    it('check if all items available for every brand', () => {

        cy.visit('https://automationexercise.com/')
        cy.get('ul>li').each(($el, index, $list) => {
            expect($list).to.have.length(57)
        });
        brand.getCategory().should("contain", "Category")
        brand.getbutton().eq(0).click();
        brand.getWomanClothes().then(($el) => {
            expect($el).to.contain("Dress")
            expect($el).to.contain("Tops")
            expect($el).to.contain("Saree")
        })
        brand.getManClothes().then(($el) => {
            expect($el).to.contain("TSHIRTS")
            expect($el).to.contain("JEANS")            
        })
        brand.getKidsClothes().then(($el) => {
            expect($el).to.contain("DRESS")
            expect($el).to.contain("TOPS AND SHIRTS")            
        })
        cy.get('.nav > :nth-child(1) > a > .pull-right').invoke('text').then(($el) => {
            numberCountPolo = $el
             number= parseInt(numberCountPolo.slice(1, 2))
            cy.log(typeof(number))
        })

        brand.getBrandName().click()
        cy.get('.product-overlay').each(($el, index, $list) => {
            expect($list).to.have.length(number)
        });

        brand.getBrandName().click()
        // cy.get('.overlay-content > p').then(($el) => {
        //     if ($el.text().includes("Polo")) {
        //         cy.log($el.length)
        //       } else {
        //        cy.log("errorMessage") 
        //       }

           })
        it.only('brands name availbe',()=>{
            cy.visit('https://automationexercise.com/')
            brand.getBrandsNames().should("contain", "Polo")
            //brand.getBrandsNames().should("contain", "H&M")
            brand.getBrandsNames().should("contain", "Madame")
         
            brand.getBrandsNames().should("contain", "Bibo")
        })
        // cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p').should("contain", "Polo")


        })




    
