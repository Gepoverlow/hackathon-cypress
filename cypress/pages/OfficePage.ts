export class OfficePage {
  clickMapAndCrystal() {
    cy.get("#the-map").click();
    cy.get("#popup-image").click();
    cy.get("#the-crystal").click();
    cy.get("#take-crystal").click();
    cy.get(".door").click();
  }
}
