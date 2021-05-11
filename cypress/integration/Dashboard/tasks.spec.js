import homePage                     from "../../pageobject/home";
import variables                    from "../../../variables.json";
import dashboard                    from "../../pageobject/dashboard";
import tasksPage                    from "../../pageobject/Dasboard/tasks.page";


context("Tasks tests", () => {
    let priorityColumnHeader = 'Priority';
    let addColumn = 'priority';
    let filterValue = 'High';
    let groupBy = 'Assignee';
    beforeEach(() => {
        homePage.openLoginPage(variables.URL);
        homePage.login(variables.username, variables.password);
    })

    it("Priority column is displayed", () => {
        dashboard.tasksButton
            .click();
        cy.wait(1500);
        tasksPage.optionsButton
            .click({force: true});
        tasksPage.selectColumn(addColumn);
        tasksPage.applyOptionsSettingsButton
            .click({force: true});
        tasksPage.priorityColumnHeader
            .should('have.text', priorityColumnHeader);
    })

    it("Sort b priority column", () => {
        dashboard.tasksButton.click();
        cy.wait(1500);
        tasksPage.optionsButton
            .click({force: true});
        tasksPage.selectColumn(addColumn);
        tasksPage.applyOptionsSettingsButton
            .click({force: true});
        tasksPage.priorityColumnHeader
            .should('have.text', priorityColumnHeader);
        tasksPage.filterButton
            .click({force: true});
        tasksPage.setPriorityFilter();
        tasksPage.selectValueFromPriorityDropdown(filterValue);
        tasksPage.deleteFromSelectedPriorityValue('Low');
        tasksPage.applyOptionsSettingsButton
            .click({force: true});
        tasksPage.checkPriorityColumnValue(filterValue);
    })

    it("Group results by Assigned", () => {
        dashboard.tasksButton
            .click();
        cy.wait(1500);
        tasksPage.optionsButton
            .click({force: true});
        tasksPage.groupBy(groupBy);
        tasksPage.applyOptionsSettingsButton
            .click({force: true});
        tasksPage.groupedValueBlock
            .should("be.visible");
    })

})