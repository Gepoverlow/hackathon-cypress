export class CavePage {
  dragAndDropByLetter(letter: string) {
    cy.window().then((win) => {
      const dataTransfer = new win.DataTransfer();

      cy.get(`[data-letter="${letter}"][draggable="true"]`).each(
        (dragEl, index) => {
          cy.get(`[data-letter="${letter}"]:not([draggable])`)
            .eq(index)
            .then((dropEl) => {
              cy.wrap(dragEl).trigger("dragstart", { dataTransfer });
              cy.wrap(dropEl)
                .trigger("dragover", { dataTransfer })
                .trigger("drop", { dataTransfer });
            });

          // cy.wait(500);
        }
      );
    });
  }

  solvePuzzle() {
    ["A", "T", "L", "N", "I", "S"].forEach((letter) =>
      this.dragAndDropByLetter(letter)
    );
  }

  clickDevButton() {
    cy.contains("button", "dev-button 2").click();
  }
}
