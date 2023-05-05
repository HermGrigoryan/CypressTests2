import { apiGet } from "..//../pages/ApiGet";
describe("Products Api Tests", () => {
    it("Get All Products List", () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then(
            (response) => {
                cy.log(response)
            // response.body is automatically serialized into JSON
              expect(response.status).to.eq(200) // true
              expect(response.body[0].title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
              expect(response.body)
                      .to.have.lengthOf(100)
                      .to.be.an('array');
         }          
      )
    }); 
    // it.only("returns a list of products with status code 200", () => {
    //   cy.request({
    //      method: "GET", 
    //      url:  "https://automationexercise.com/api/productsList",
    //   }).then(
    //     (response) => {
    //       cy.log(response)
    //       expect(response.status).to.eq(200);
    //       expect(response.body)
    //         // .to.have.property("products")
    //         // .to.be.an("array")
    //         .to.have.lengthOf(5549);
      //     expect(response.body.products[0]).to.deep.include({
      //       id: 1,
      //       name: "Blue Top",
      //       price: "Rs. 500",
      //       brand: "Polo",
      //       category: {
      //         usertype: {
      //           usertype: "Women",
      //         },
      //         category: "Tops",
      //       },
      //     });
      //   })
      // })
    
  //     it("GET user account detail by email", () => {
  //       cy.request({
  //         method: "GET",
  //         url: "https://automationexercise.com/api/getUserDetailByEmail?email",
  //       }).then((Response) => {
  //         expect(Response.status).to.eq(200);
  //         expect(Response.body[0].name).include("Rana");
  //       });
  
  // });
     
});