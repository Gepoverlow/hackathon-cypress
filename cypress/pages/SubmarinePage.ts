export class SubmarinePage {
  followArrows(times: number) {
    for (let i = 0; i < times; i++) {
      cy.get(".arrow")
        .invoke("attr", "src")
        .then((src) => {
          const direction = src?.split("/").pop();
          switch (direction) {
            case "right.png":
              cy.get("body").type("{rightarrow}");
              break;
            case "left.png":
              cy.get("body").type("{leftarrow}");
              break;
            case "up.png":
              cy.get("body").type("{uparrow}");
              break;
            case "down.png":
              cy.get("body").type("{downarrow}");
              break;
          }
        });
      cy.wait(300);
    }
  }
}
