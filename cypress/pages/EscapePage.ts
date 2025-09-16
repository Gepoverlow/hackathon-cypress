export class EscapePage {
  tryDoor(index = 0) {
    if (index >= 4) throw new Error("no valid door found");

    cy.get(`#square-${index}`).click();

    cy.get("#floating-banner").then((banner) => {
      const text = banner.text().toLowerCase();
      if (text.includes("are you sure")) {
        cy.get(`#square-${index}`).click();
      } else {
        cy.wait(1000);
        this.tryDoor(index + 1);
      }
    });
  }
}
