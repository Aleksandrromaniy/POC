import homePage                             from "../../pageobject/home";
import dashboard                            from "../../pageobject/dashboard";
import variables                            from "../../../variables.json";
import dynamicFilterPage                    from "../../pageobject/Dasboard/dynamicFilter.page";
import testData                             from "../../../testData.json";

context("Dynamic filter tests", () => {
    beforeEach(() => {
        homePage.open(variables.URL);
        homePage.login(variables.username, variables.password);
    })

    it("Add priority column", () => {
        dashboard.dynamicFilterButton;
        dynamicFilterPage.columnSettingsButton;
        dynamicFilterPage.addColumn(testData.filterBy);
        dynamicFilterPage.applyColumnSettingsButton;
        dynamicFilterPage.scrollToLastColumn();
        dynamicFilterPage.priorityColumnHeader
            .should("be.visible");
    })

    it("Filter by Priority => High", () => {
        dashboard.dynamicFilterButton;
        dynamicFilterPage.columnSettingsButton;
        dynamicFilterPage.addColumn(testData.filterBy);
        dynamicFilterPage.applyColumnSettingsButton;
        dynamicFilterPage.filtersButton;
        dynamicFilterPage.selectFilterValue(testData.filterBy);
        dynamicFilterPage.selectPriorityFilterValue(testData.filterValue);
        dynamicFilterPage.applyFilterValueButton;
        dynamicFilterPage.scrollToPriorityColumn(testData.filterValue);
        dynamicFilterPage.valueInPriorityColumnEqualsTo(testData.filterValue);
    })

    it("Group By Assignee", () => {
        dashboard.dynamicFilterButton;
        dynamicFilterPage.groupByButton;
        dynamicFilterPage.groupBy(testData.groupBy);
        dynamicFilterPage.groupByButton;
        dynamicFilterPage.groupCell
            .should("be.visible");
        dynamicFilterPage.groupCellCount
            .should("be.visible");
    })
})