import homePage from "../pageobject/home";
import variables from "../../variables.json";

context("Home page tests", () => {
    beforeEach(() => {
        homePage.open(variables.URL);
    })
    it("Login Page is displayed", () => {
        cy.location().should((loc) => {
            expect(loc.href).to.include('/login')
        });
        homePage.userNameField.should("be.visible");
        homePage.userPasswordField.should("be.visible");
        homePage.loginButton.should("be.visible");
    })

})