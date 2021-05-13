import homePage                     from "../../pageobject/home";
import variables                    from "../../../variables.json";
import dashboard                    from "../../pageobject/dashboard";
import tasksPage                    from "../../pageobject/Dasboard/tasks.page";
import testData                     from "../../../testData.json";


context("Tasks tests", () => {
    beforeEach(() => {
        homePage.open(variables.URL);
        homePage.login(variables.username, variables.password);
    })

    it("Priority column is displayed", () => {
        dashboard.tasksButton;
        cy.wait(1500);
        tasksPage.optionsButton;
        tasksPage.selectColumn(testData.addColumn);
        tasksPage.applyOptionsSettingsButton;
        tasksPage.priorityColumnHeader
            .should('have.text', testData.priorityColumnHeader);
    })

    it("Sort b priority column", () => {
        dashboard.tasksButton;
        cy.wait(1500);
        tasksPage.optionsButton;
        tasksPage.selectColumn(testData.addColumn);
        tasksPage.applyOptionsSettingsButton;
        tasksPage.filterButton;
        tasksPage.setPriorityFilter();
        tasksPage.selectValueFromPriorityDropdown(testData.filterValue);
        tasksPage.deleteFromSelectedPriorityValue('Low');
        tasksPage.applyOptionsSettingsButton;
        tasksPage.checkPriorityColumnValue(testData.filterValue);
    })

    it("Group results by Assigned", () => {
        dashboard.tasksButton;
        cy.wait(1500);
        tasksPage.optionsButton;
        tasksPage.groupBy(testData.groupBy);
        tasksPage.applyOptionsSettingsButton;
        tasksPage.groupedValueBlock
            .should("be.visible");
    })

})