const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/LoginPage");
const { ApplicationPage } = require("../pageobjects/ApplicationPage");
const testData = require("../data/testData.json");
const dotenv = require("dotenv");
dotenv.config();

let email;
let password;
let loginPage;
let applicationPage;

// Run before all tests
test.beforeAll(async () => {
  // Initialize the common variable (this will run once before all tests)
  email = process.env.PLAYWRIGHT_USERNAME;
  password = process.env.PLAYWRIGHT_PASSWORD;
});

// Run before each test
test.beforeEach(async ({ page }) => {
  // Common setup logic that runs before each test
  loginPage = new LoginPage(page);
  applicationPage = new ApplicationPage(page);
  await loginPage.goTo();
  await loginPage.loginUser(email, password);
});

// Utility function for application task verification
const verifyTask = async (menuSection, section, task, tags) => {
  if (menuSection === "Mobile Application") {
    await applicationPage.selectMenuOption();
  }
  expect(await applicationPage.verifyTitle()).toHaveText(menuSection);
  const verifytags = await applicationPage.mainCard([section, task]);
  // Assert tags count and text dynamically
  await expect(verifytags).toHaveCount(tags.length);
  tags.forEach(async (tag, index) => {
    await expect(verifytags.nth(index)).toHaveText(tag);
  });
};

test.describe("Application Task Verification", () => {
  for (const [menuSection, tasks] of Object.entries(testData)) {
    for (const { section, task, tags } of tasks) {
      test(`Verify "${task}" in "${menuSection}" section "${section}" column `, async ({
        page,
      }) => {
        // Use the utility function to verify task and tags
        await verifyTask(menuSection, section, task, tags);
      });
    }
  }
});
