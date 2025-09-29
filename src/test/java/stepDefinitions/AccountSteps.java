package stepDefinitions;

import com.microsoft.playwright.*;
import io.cucumber.java.en.*;
import pages.*;

public class AccountSteps {
    Playwright playwright;
    Browser browser;
    Page page;
    SignupPage signupPage;
    LoginPage loginPage;
    DashboardPage dashboardPage;
    String username = "testuser" + System.currentTimeMillis();
    String password = "Password123";

    @Given("the user is on the signup page")
    public void user_on_signup_page() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
        page = browser.newPage();
        signupPage = new SignupPage(page);
        signupPage.navigate();
    }

    @When("the user registers with valid details")
    public void user_registers() {
        signupPage.register("John", "Doe", username, password);
    }

    @When("logs in with the same credentials")
    public void logs_in() {
        loginPage = new LoginPage(page);
        loginPage.navigate();
        loginPage.login(username, password);
    }

    @Then("the user should see the account balance displayed")
    public void verify_balance() {
        dashboardPage = new DashboardPage(page);
        String balance = dashboardPage.getBalance();
        System.out.println("Account Balance: " + balance);
        browser.close();
        playwright.close();
    }
}
