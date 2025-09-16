import { HomePage } from "../pages/HomePage";
import { CharacterSelectPage } from "../pages/CharacterSelectPage";
import { OfficePage } from "../pages/OfficePage";
import { DockingBayPage } from "../pages/DockingBayPage";
import { SubmarinePage } from "../pages/SubmarinePage";
import { EscapePage } from "../pages/EscapePage";
import { CavePage } from "../pages/CavePage";
import { CrashPage } from "../pages/CrashPage";

const homePage = new HomePage();
const charPage = new CharacterSelectPage();
const officePage = new OfficePage();
const dockPage = new DockingBayPage();
const subPage = new SubmarinePage();
const crashPage = new CrashPage();
const escapePage = new EscapePage();
const cavePage = new CavePage();

describe("Hackathon", () => {
  it("should complete the game flow", () => {
    cy.visit("/");

    homePage.clickStart();

    charPage.selectCharacter("Bob", "33", "Belgium");

    officePage.clickMapAndCrystal();

    dockPage.activateSwitches();
    dockPage.pressLaunch();

    subPage.followArrows(10);

    crashPage.escapeCave();

    escapePage.tryDoor(0);

    cavePage.solvePuzzle();
    cavePage.clickDevButton();
  });
});
