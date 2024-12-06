class ApplicationPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator(".text-xl"); // Locator for the page title
    this.cardSections = page.locator(".w-80"); // Locator for card sections
    this.mobilePageLink = page.locator("button .font-medium").nth(1);
  }

  //Select MobilePage link
  async selectMenuOption() {
    await this.mobilePageLink.click();
  } 
  
  // return page title locator
  async verifyTitle() {
    return this.pageTitle;
  }

  //Verify specific cards and their tags within sections.
  async mainCard(sectionCheck) {
    const totalCardCount = await this.cardSections.count();
    for (let i = 0; i < totalCardCount; i++) {
      const card = this.cardSections.nth(i); // Reduce redundant calls
      // Wait for the inner element to be available before interacting
      const tagText = await card
        .locator("h2")
        .waitFor({ state: "visible" })
        .then(() => card.locator("h2").textContent());
      const sectionTitle = tagText.split("(")[0].trim(); // Remove extra text in parentheses

      // Check if the section title matches the section name from sectionCheck
      if (sectionTitle === sectionCheck[0]) {
        const innerTabs = await card.locator(".transition-shadow");

        const innerTabCount = await innerTabs.count();

        for (let j = 0; j < innerTabCount; j++) {
          const taskTab = innerTabs.nth(j);
          // Wait for the inner element to be available before interacting
          await taskTab.locator("h3").waitFor({ state: "visible" });
          const taskTitles = await taskTab.locator("h3").allTextContents();

          // Check if the task title matches
          if (taskTitles[0] === sectionCheck[1]) {
            // Return the locator for matching tags
            const verifyTags = await taskTab.locator(".gap-2 span");
            // Return tags or handle error if no tags found
            if ((await verifyTags.count()) > 0) {
              return verifyTags;
            } else {
              console.error("No tags found for task:", taskTitles[0]);
              return null;
            }
          }
        }
      }
    }
  }
}

module.exports = { ApplicationPage };
