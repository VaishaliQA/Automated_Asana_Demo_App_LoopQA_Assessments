# Automated Asana App Testing using Playwright  

This repository contains an automation framework for verifying login and task functionality of the **Asana Demo App**. The framework is built using **Playwright** with **JavaScript**, following the **Page Object Model (POM)** design pattern for maintainable and scalable test automation.  

## Features  

- **Automated Login**  
  Verifies login functionality using environment-secured credentials.  

- **Task Verification**  
  Checks tasks and associated tags across sections such as "To Do," "In Progress," and "Done" in both Web Application and Mobile Application areas.  

- **Dynamic Test Data**  
  Task details are stored in `testData.json` for flexibility and easy updates.  

- **Error Handling**  
  Includes dynamic waits for handling asynchronous page loads and robust locators for dynamic content.  

- **Reporting**  
  - Generates HTML and JSON reports.  
  - Captures screenshots and traces for debugging.  

- **Parallel Execution**  
  Optimized execution time by running tests in parallel.  

## Technologies Used  

- **Playwright**: End-to-end browser automation framework.  
- **JavaScript**: Programming language for the automation scripts.  
- **Page Object Model (POM)**: Design pattern for modular and reusable code.  
- **Node.js**: Runtime for executing JavaScript on the server.  

## Prerequisites  

Ensure the following are installed on your system:  
- Node.js (v16 or higher)  
- npm (Node Package Manager)  
- Playwright  
- Git  

## Setup and Installation

- **Clone the Repository**   
        git clone https://github.com/VaishaliQA/Automated_Asana_Demo_App_LoopQA_Assessments.git
        cd Automated_Asana_Demo_App_LoopQA_Assessments  

- **Install Dependencies**
        npm install

- **Set Up Environment Variables**
        - Create a .env file in the project root.
        - Add your credentials as shown below:
            env
            PLAYWRIGHT_USERNAME=your_username
            PLAYWRIGHT_PASSWORD=your_password

## Project Structure

    ├── pageObjects/            # Page Object Model classes  
    │   ├── LoginPage.js        # Handles login interactions  
    │   └── ApplicationPage.js  # Manages tasks and navigation  

    ├── tests/                  # Test files  
    │   ├── loginTest.spec.js   # Tests login functionality  
    │   └── tasksTest.spec.js   # Verifies tasks and tags  

    ├── testData/               # Test data for dynamic testing  
    │   └── testData.json       # JSON file containing tasks and tags  

    ├── playwright.config.js    # Playwright configuration file  

    ├── .env                    # Environment variables  

    ├── package.json            # Project dependencies and scripts  

    └── README.md               # Project documentation  

## Running the Tests

    - Execute All Tests
        npx playwright test

    - Run Specific Test Suite
        npx playwright test tests/loginTest.spec.js
        npx playwright test tests/tasksTest.spec.js

    - View Reports
        Upon execution, an HTML report will be generated. Open the report with:
        npx playwright show-report

## Key Highlights

- **Dynamic Locators:** Handles nested and dynamic elements with parent context strategies.
- **Parallel Execution:** Speeds up execution with configurable workers.
- **Error Handling:** Manages asynchronous content loading with waitFor and other Playwright utilities.
- **Maintainability:** Easy addition of test cases and data-driven testing using testData.json.

## Recommendations for Improvement

- **Session Persistence**
    Save login session for reuse across tests to reduce redundant logins.

- **Cross-Browser Testing**
    Extend testing to Chrome, Firefox, and Safari for compatibility validation.

- **Edge Case Coverage**
    Test error handling, invalid inputs, and boundary scenarios.

- **Enhanced Reporting**
    Integrate with tools like Allure Reports for advanced report generation and Slack for real-time notifications.

## License
    This project is licensed under the MIT License.
