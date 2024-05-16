/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.intercept({
      method: "GET",
      url: "https://run.mocky.io/v3/5fff4edb-8f5c-4dd6-a305-2935268be086",
    }).as("getEvents");
    cy.visit("/");
  });

  it("Shoes the navbar as expected", () => {
    cy.contains("Betbetbet");

    const navbarButtonSelector = ".MuiToolbar-root > .MuiButtonBase-root";
    cy.get(navbarButtonSelector);
  });

  it("shows the loading state while fetching", () => {
    cy.contains("loading");
  });

  it("loads and displays the events", () => {
    cy.wait("@getEvents");
    cy.contains("loading").should("not.exist");

    const eventsListItemsSelector = ".events-list > .MuiListItem-root";
    cy.get(eventsListItemsSelector).should("have.length.at.least", 1);
  });

  it("open drawer, shows empty view", () => {
    const navbarButtonSelector = ".MuiToolbar-root > .MuiButtonBase-root";
    cy.get(navbarButtonSelector).click();

    cy.get(".MuiPaper-elevation16");
    cy.get(".user-selections-list > li").should("have.length", 0);
  });

  it("select market selection", () => {
    const selectionButton =
      ":nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiToggleButtonGroup-root > .MuiToggleButtonGroup-firstButton";
    cy.get(selectionButton).click();

    const navbarButtonSelector = ".MuiToolbar-root > .MuiButtonBase-root";
    cy.get(navbarButtonSelector).click();

    cy.get(".user-selections-list > li").should("have.length", 1);
  });

  it("delete market selection", () => {
    const selectionButton =
      ":nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiList-root > :nth-child(1) > .MuiToggleButtonGroup-root > .MuiToggleButtonGroup-firstButton";
    cy.get(selectionButton).click();

    const navbarButtonSelector = ".MuiToolbar-root > .MuiButtonBase-root";
    cy.get(navbarButtonSelector).click();

    cy.get(".MuiCardActions-root .MuiButtonBase-root").click();
    cy.get(".user-selections-list > li").should("have.length", 0);
  })
});
