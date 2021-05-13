const {get} = cy;

class TasksPage {

    get optionsButton() {
        return get('#easy-query-toggle-button-settings > a')
            .click({force: true});
    }

    get applyOptionsSettingsButton() {
        return get('#filter_buttons > .icon-checked')
            .click({force: true});
    }

    get priorityColumnHeader() {
        return get('.priority > .affix-cell-wrap');
    }

    get filterButton() {
        return get('#easy-query-toggle-button-filters').click({force: true});
    }

    get groupedValueBlock() {
        return get('tr[class="easy-entity-list__item easy-entity-list__item-group group "]');
    }

    selectValueFromPriorityDropdown(value) {
        get('#priority_id')
            .click({force: true});
        get('#ui-id-40').find('.ui-menu-item').contains(value)
            .click({force: true});
    }

    deleteFromSelectedPriorityValue(value) {
        get('#div_values_priority_id')
            .find('span')
            .contains(value)
            .find('span[class="icon icon-del"]')
            .click({force: true});
    }

    setPriorityFilter() {
        get('#add_filter_select > optgroup')
            .find('option[value="priority_id"]').eq(0)
            .then($el => $el.get(0).setAttribute('selected', "selected"))
            .parent()
            .trigger('change', {force: true});
    }

    selectColumn(columnName) {
        get('#available_columns').select(columnName);
        get('#modal_selector_move_column_right_button').click({force: true});
    }

    checkPriorityColumnValue(value) {
        get('table[class="list easy-entity-list entities issues sort-by-priority sort-desc list--with_totalrow table-resizer context-menu-container"]')
            .find('tbody')
            .find('tr[id^="entity-"]')
            .each((el) => {
                expect(el
                    .find('.priority > .easy-entity-list__item-attribute-content > .multieditable-parent > .multieditable')
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