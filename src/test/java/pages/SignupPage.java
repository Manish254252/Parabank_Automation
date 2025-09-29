package pages;

import com.microsoft.playwright.Page;

public class SignupPage extends BaseTest{
    private Page page;

    // Locators
    private String firstName = "input[name='customer.firstName']";
    private String lastName = "input[name='customer.lastName']";
    private String address = "input[name='customer.address.street']";
    private String city = "input[name='customer.address.city']";
    private String state = "input[name='customer.address.state']";
    private String zipCode = "input[name='customer.address.zipCode']";
    private String phone = "input[name='customer.phoneNumber']";
    private String ssn = "input[name='customer.ssn']";
    private String username = "input[name='customer.username']";
    private String password = "input[name='customer.password']";
    private String confirmPassword = "input[name='repeatedPassword']";
    private String registerBtn = "input[value='Register']";

    private String registerLink = "//a[text()='Register']";
    private String logoutBtn = "//a[text()='Log Out']";

    // Constructor
    public SignupPage(Page page) {
        this.page = page;
    }

    // Navigate to signup page
    public void navigate() {
        page.navigate("https://parabank.parasoft.com/parabank/register.htm");
    }

    public void logOut() {
        page.click(logoutBtn);
    }
    // Perform registration with all fields
    public void register(String fName, String lName, String user, String pass) {
        page.fill(firstName, fName);
        page.fill(lastName, lName);
        page.fill(address, "221B Baker Street");
        page.fill(city, "Springfield");
        page.fill(state, "California");
        page.fill(zipCode, "90210");
        page.fill(phone, "5551234567");
        page.fill(ssn, "123-45-6789");
        page.fill(username, user);
        page.fill(password, pass);
        page.fill(confirmPassword, pass);
        page.click(registerBtn);
        page.waitForTimeout(2000);
    }

    // Click the Register link (from homepage login box)
    public void clickRegisterLink() {
        page.click(registerLink);
    }
}
