describe("Locators", () => {
  it("verify adding product to cart", () => {
    cy.visit("https://www.amazon.in/");
    cy.get("#twotabsearchtextbox").type("USB Drive");
    cy.get(".nav-search-submit.nav-sprite").click();
    cy.get('a').invoke('removeAttr', 'target')
    cy.get("[data-component-id='12']").find('a').eq(0).click()
    cy.get("#add-to-cart-button").click();
  });
});
