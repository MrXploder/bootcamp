// https://docs.cypress.io/api/introduction/api.html

describe("Test TodoList Cases", () => {
  it("should target input and read the given text", () => {
    cy.visit("localhost:8080");
    cy.get('[data-cy="todo-input"]')
      .type("Pagar el netflix", { delay: 250 })
      .should("have.value", "Pagar el netflix");
  });

  it("should add todo to todolist", () => {
    cy.get("[data-cy='add-todo-btn']").click();
    cy.get("[data-cy='todo-list']").contains("Pagar el netflix");
  });

  it("should change the first todo item text", () => {
    cy.get("[data-cy='modify-todo-btn']").click();
    cy.get("[data-cy='todo-item-text']").type(" o el amazon", { delay: 250 });
    cy.get("[data-cy='modify-todo-btn']").click();
    cy.get("[data-cy='todo-list']").contains("Pagar el netflix o el amazon");
  });
});
