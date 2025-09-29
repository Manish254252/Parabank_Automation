package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.BaseTest;
import pages.DashboardPage;
import pages.LoginPage;
import pages.SignupPage;
import utils.DataGenerator;

public class AccountSteps {

    SignupPage signupPage;
    LoginPage loginPage;
    DashboardPage dashboardPage;

    String username = DataGenerator.generateUsername();
    String password = DataGenerator.generatePassword();

    @Given("the user is on the signup page")
    public void user_on_signup_page() {
        signupPage = new SignupPage(BaseTest.page);
        signupPage.navigate();
    }

    @When("the user registers with valid details")
    public void user_registers() {
        System.out.println("Registering: " + username + " / " + password);
        signupPage.register("John", "Doe", username, password);


         signupPage.logOut();
    }

    @When("logs in with the same credentials")
    public void logs_in() {
        loginPage = new LoginPage(BaseTest.page); // fixed page reference
        loginPage.navigate();
        System.out.println("Logging in: " + username + " / " + password);
        loginPage.login(username, password);
    }

    @Then("the user should see the account balance displayed")
    public void verify_balance() {
        dashboardPage = new DashboardPage(BaseTest.page);
        String balance = dashboardPage.getBalance();
        System.out.println("Account Balance: " + balance);

        BaseTest.takeScreenshot("balance.png");
    }
}
