const {get, visit} = cy;
class HomePage {

    get userNameField() {
        return get('input[id=username]');
    }

    get userPasswordField() {
        return get('input[id=password]');
    }

    get loginButton() {
        return get('tr[id=login_submit_field]').click();
    }

    open(url) {
        visit(url);
    }

    login(user, password) {
        this.userNameField.type(user);
        this.userPasswordField.type(password);
        this.loginButton;
    }
}

export default new HomePage();