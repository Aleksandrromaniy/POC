const {get} = cy;

class DynamicFilterPage {

    get columnSettingsButton() {
        return get('button[title="Columns settings"]').eq(0);
    }

    get applyColumnSettingsButton() {
        return get('.ant-btn-green');
    }

    get filtersButton() {
        return get('.vue-query__filter > .filters__active > .filters__active-button');
    }

    get groupByButton() {
        return get('.vue-query__filters-item--group > .filters__active-button');
    }

    get priorityColumnHeader() {
        return get('div[class="ant-table-header ant-table-hide-scrollbar"]')
            .find('th[key="priority"]');
    }

    get applyFilterValueButton() {
        return get('button[class="ant-btn ant-btn-green"]');
    }

    get groupCellElement() {
        return get('div[class="group-cell"]');
    }

    get groupCellCountElement() {
        return get('span[class="group-cell__count"]');
    }

    addColumn(value) {
        get('div[class="ant-row"]')
            .contains(value)
            .find('input[type="checkbox"]')
            .click({force: true});
    }

    scrollToTheLastColumn() {
        get('tbody[class="ant-table-tbody"]')
            .find('td[class="ant-table-column-has-actions ant-table-column-has-sorters"]')
            .contains('Urgent')
            .scrollIntoView();
    }

    scrollToPriorityColumn(value) {
        get('tbody[class="ant-table-tbody"]')
            .find('div[class="vue-query__cell cell-wrapper"]')
            .contains(value)
            .scrollIntoView();
    }

    selectFilterValue(value) {
        get('div[class="filters__popover-row ant-row"]')
            .contains(value)
            .find('input[type="checkbox"]')
            .click({force: true});
    }

    selectPriorityFilterValue(value) {
        get('div[class="ant-select-dropdown-content"]')
            .contains(value)
            .click();
    }

    valueInPriorityColumnEqualsTo(value) {
        get('div[class="ant-table-body"]')
            .find('tbody[class="ant-table-tbody"]')
            .children()
            .each((elm) => {
                expect(elm
                    .find('td[class="ant-table-column-has-actions ant-table-column-has-sorters"]')
                    .text()
                    .trim()).equal(value)
            });
    }

    groupByValue(value) {
        get('div[class="filters__popover-row ant-row"]')
            .contains(value)
            .find('input[type="checkbox"]')
            .click({force: true});
    }

}

export default new DynamicFilterPage();