// https://docs.cypress.io/api/introduction/api.html

describe("agregar un que-hacer a la lista de que-haceres", () => {
  it("deberia visitar la url base", () => {
    cy.visit("http://localhost:8080");
    cy.contains("h1", "Crea una nueva tarea");
  });

  it("deberia escribir y agregar la tarea a la lista", () => {
    cy.get("[data-cy='campo-texto']").type("pagar el netflix", { delay: 500 });
    cy.get("[data-cy='boton-crear']").click();
    cy.get("[data-cy='lista-tareas']").contains("pagar el netflix");
  });
});
