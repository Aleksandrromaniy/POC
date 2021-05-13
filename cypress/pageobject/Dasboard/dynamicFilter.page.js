const {get} = cy;

class DynamicFilterPage {

    get columnSettingsButton() {
        return get('button[title="Columns settings"]').eq(0)
            .click({force: true});
    }

    get applyColumnSettingsButton() {
        return get('.ant-btn-green')
            .click({force: true});
    }

    get filtersButton() {
        return get('.vue-query__filter > .filters__active > .filters__active-button')
            .click({force: true});
    }

    get groupByButton() {
        return get('.vue-query__filters-item--group > .filters__active-button')
            .click({force: true});
    }

    get priorityColumnHeader() {
        return get('div[class="ant-table-header ant-table-hide-scrollbar"]')
            .find('th[key="priority"]');
    }

    get applyFilterValueButton() {
        return get('.vue-query__filters-modal-inline > .ant-btn')
            .click({force: true});
    }

    get groupCell() {
        return get('div.group-cell');
    }

    get groupCellCount() {
        return get('span.group-cell__count');
    }

    addColumn(value) {
        get('div.ant-row')
            .contains(value)
            .find('input[type="checkbox"]')
            .click({force: true});
    }

    scrollToLastColumn() {
        get('tbody.ant-table-tbody')
            .find('td[class="ant-table-column-has-actions ant-table-column-has-sorters"]')
            .contains('Urgent')
            .scrollIntoView();
    }

    scrollToPriorityColumn(value) {
        get('tbody.ant-table-tbody')
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
        get('div.ant-select-dropdown-content')
            .contains(value)
            .click();
    }

    valueInPriorityColumnEqualsTo(value) {
        get('div.ant-table-body')
            .find('tbody.ant-table-tbody')
            .children()
            .each((elm) => {
                expect(elm
                    .find('td[class="ant-table-column-has-actions ant-table-column-has-sorters"]')
                    .text()
                    .trim()).equal(value)
            });
    }

    groupBy(value) {
        get('div[class="filters__popover-row ant-row"]')
            .contains(value)
            .find('input[type="checkbox"]')
            .click({force: true});
    }

}

export default new DynamicFilterPage();