export class HomePage {
  clickStart() {
    cy.contains("button", "Start").click();
  }
}
