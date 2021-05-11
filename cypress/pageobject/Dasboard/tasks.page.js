const {get} = cy;

class TasksPage {

    get optionsButton() {
        return get('div[id="easy-query-toggle-button-settings"]').find('i[class="icon-toggler"]');
    }

    get applyOptionsSettingsButton() {
        return get('#filter_buttons > .icon-checked');
    }

    get priorityColumnHeader() {
        return get('.affix-cell-wrap > .sort');
    }

    get filterButton() {
        return get('#easy-query-toggle-button-filters > a');
    }

    get groupedValueBlock() {
        return get('tr[class="easy-entity-list__item easy-entity-list__item-group group "]');
    }

    selectValueFromPriorityDropdown(value) {
        get('.span_values_priority_id > .easy-multiselect-tag-container > .easy-autocomplete-tag > .ui-button')
            .click({force: true});
        get('ul[id="ui-id-40"]').find('li[class="ui-menu-item"]').contains(value).click({force: true});
    }

    deleteFromSelectedPriorityValue(value) {
        get('div[id="div_values_priority_id"]')
            .find('span')
            .contains(value)
            .find('span[class="icon icon-del"]')
            .click({force: true});
    }

    setPriorityFilter() {
        get('[id="add_filter_select"] > optgroup')
            .find('option[value="priority_id"]').eq(0)
            .then($els => $els.get(0).setAttribute('selected', "selected"))
            .parent()
            .trigger('change', {force: true});
    }

    selectColumn(columnName) {
        get('[id="available_columns"]').select(columnName);
        get('[id="modal_selector_move_column_right_button"').click({force: true});
    }

    checkPriorityColumnValue(value) {
        get('table[class="list easy-entity-list entities issues sort-by-priority sort-desc list--with_totalrow table-resizer context-menu-container"]')
            .find('tbody')
            .find('tr[id^="entity-"]')
            .each((elm) => {
                expect(elm
                    .find('td[class="easy-entity-list__item-attribute priority"]')
                    .find('span[class="multieditable editable multieditable-initialized"]')
                    .text()
                    .trim()).equal(value)
            });
    }

    groupBy(value) {
        get('#group_by_')
            .type(value, {force: true});
        get('li[class="ui-menu-item"]')
            .contains(value)
            .click({force: true});
    }
}

export default new TasksPage();