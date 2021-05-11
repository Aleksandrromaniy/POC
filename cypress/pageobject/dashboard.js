const {get} = cy;

class Dashboard {

    get tasksButton() {
        return get("a[title='Tasks']").last();
    }

    get dynamicFilterButton() {
        return get('a[id="tab_4"]');
    }

}

export default new Dashboard();