// https://docs.cypress.io/api/table-of-contents

describe("Rick and Morty characters list", () => {
  it("should render characters list", () => {
    cy.visit("/");
    cy.get(".avatar").should("have.length", 5);
  })

  it("should the first be Rick Sanchez", () => {
    cy.visit("/");
    cy.get(".avatar").first().contains("Rick Sanchez");
  })

  it("should write slowly the given text", () => {
    cy.visit("/")
    cy.get(".prueba").type("hola mundo", { delay: 500 });
    cy.get(".prueba").should("have.value", "hola mundo");
  
  })
})