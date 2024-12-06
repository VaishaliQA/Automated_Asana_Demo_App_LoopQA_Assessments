const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const dotenv = require("dotenv");
dotenv.config();

let email;
let password;
let loginPage;

// Run before all tests
test.beforeAll(async () => {
  // Initialize the common variable (this will run once before any tests)
  email = process.env.PLAYWRIGHT_USERNAME;
  password = process.env.PLAYWRIGHT_PASSWORD;
});

test.describe("Login to App", () => {
  test("Login to Demo App by adding valid username and password", async ({
    page,
  }) => {
    const title = "Project Board Login";
    loginPage = new LoginPage(page);
    await loginPage.goTo(); // Redirect to Url
    const loginTitle = await loginPage.loginTitleVerify();
    expect(await loginTitle.textContent()).toEqual(title);
    await loginPage.loginUser(email, password);
  });
});
