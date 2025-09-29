package pages;

import com.microsoft.playwright.Page;

public class SignupPage {
    private Page page;

    private String firstName = "input[name='customer.firstName']";
    private String lastName = "input[name='customer.lastName']";
    private String username = "input[name='customer.username']";
    private String password = "input[name='customer.password']";
    private String confirmPassword = "input[name='repeatedPassword']";
    private String registerBtn = "input[value='Register']";

    public SignupPage(Page page) {
        this.page = page;
    }

    public void navigate() {
        page.navigate("https://parabank.parasoft.com/parabank/register.htm");
    }

    public void register(String fName, String lName, String user, String pass) {
        page.fill(firstName, fName);
        page.fill(lastName, lName);
        page.fill(username, user);
        page.fill(password, pass);
        page.fill(confirmPassword, pass);
        page.click(registerBtn);
    }
}
