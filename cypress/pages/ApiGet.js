class ApiGet{
    req(){
        return cy.get('https://jsonplaceholder.typicode.com/posts')
    }
    1
}
export const apiGet = new ApiGet();