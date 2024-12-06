class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.password = page.locator("#password");
    this.logInButton = page.locator("[type='submit']");
    this.loginPageTitle = page.locator(".font-bold");
  }

  //Redirect to link
  async goTo() {
    await this.page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
  }

  //Validate login page title
  async loginTitleVerify() {
    return this.loginPageTitle;
  }

  // Login user with credential
  async loginUser(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.logInButton.click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = { LoginPage };
