export class CharacterSelectPage {
  selectCharacter(name: string, age: string, country: string) {
    cy.get("#male").click();
    cy.contains("button", "Yes").click();
    cy.get('input[placeholder="Enter your name"]').type(name);
    cy.get('input[placeholder="Enter your age"]').type(age);
    cy.get("select").select(country);
    cy.contains("button", "Start Game").click();
  }
}
