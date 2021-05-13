const {get} = cy;

class Dashboard {

    get tasksButton() {
        return get('.menu-manager > :nth-child(3) > .issues').last().click();
    }

    get dynamicFilterButton() {
        return get('#tab_4').click({force: true});
    }

}

export default new Dashboard();