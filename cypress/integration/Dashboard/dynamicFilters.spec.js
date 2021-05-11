import homePage                             from "../../pageobject/home";
import dashboard                            from "../../pageobject/dashboard";
import variables                            from "../../../variables.json";
import dynamicFilterPage                    from "../../pageobject/Dasboard/dynamicFilter.page";

context("Dynamic filter tests", () => {
    let filterBy = 'Priority';
    let filterValue = 'High';
    let groupBy = 'Assignee';
    beforeEach(() => {
        homePage.openLoginPage(variables.URL);
        homePage.login(variables.username, variables.password);
    })

    it("Add priority column", () => {
        dashboard.dynamicFilterButton
            .click({force: true});
        dynamicFilterPage.columnSettingsButton
            .click({force: true});
        dynamicFilterPage.addColumn(filterBy);
        dynamicFilterPage.applyColumnSettingsButton
            .click();
        dynamicFilterPage.scrollToTheLastColumn();
        dynamicFilterPage.priorityColumnHeader
            .should("be.visible");
    })

    it("Filter by Priority => High", () => {
        dashboard.dynamicFilterButton
            .click({force: true});
        dynamicFilterPage.columnSettingsButton
            .click({force: true});
        dynamicFilterPage.addColumn(filterBy);
        dynamicFilterPage.applyColumnSettingsButton
            .click();
        dynamicFilterPage.filtersButton
            .click({force: true});
        dynamicFilterPage.selectFilterValue(filterBy);
        dynamicFilterPage.selectPriorityFilterValue(filterValue);
        dynamicFilterPage.applyFilterValueButton
            .click({force: true});
        dynamicFilterPage.scrollToPriorityColumn(filterValue);
        dynamicFilterPage.valueInPriorityColumnEqualsTo(filterValue);
    })

    it("Group By Assignee", () => {
        dashboard.dynamicFilterButton
            .click({force: true});
        dynamicFilterPage.groupByButton
            .click({force: true});
        dynamicFilterPage.groupByValue(groupBy);
        dynamicFilterPage.groupByButton.click({force: true});
        dynamicFilterPage.groupCellElement
            .should("be.visible");
        dynamicFilterPage.groupCellCountElement
            .should("be.visible");
    })
})