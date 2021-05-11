const {get, visit} = cy;
class HomePage {

    get userNameField() {
        return get('input[id=username]');
    }

    get userPasswordField() {
        return get('input[id=password]');
    }

    get loginButton() {

        return get('tr[id=login_submit_field]')
    }

    openLoginPage(url) {
        visit(url);
    }

    login(user, password) {
        this.userNameField.type(user)
        this.userPasswordField.type(password);
        this.loginButton.click();
    }
}

export default new HomePage();