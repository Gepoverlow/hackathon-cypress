export class DockingBayPage {
  activateSwitches() {
    cy.get(".randomValue").then((elements) => {
      const values = elements
        .toArray()
        .map((element) => element.textContent?.trim() ?? "");

      values.forEach((val, index) => {
        if (val === "1") cy.get(`#switch-${index}`).click();
        if (val === "0") cy.get(`#switch-${index}`).dblclick();
      });
    });
  }

  pressLaunch() {
    cy.get("#button").click();
    cy.get("#submarine").click();
  }
}
