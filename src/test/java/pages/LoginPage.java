package pages;

import com.microsoft.playwright.Page;

public class LoginPage extends BaseTest{
    private Page page;

    private String username = "//input[@name='username']";
    private String password = "//input[@name='password']";
    private String loginBtn = "//input[@value='Log In']";

    public LoginPage(Page page) {
        this.page = page;
    }

    public void navigate() {
        page.navigate("https://parabank.parasoft.com/parabank/index.htm");
    }

    public void login(String user, String pass) {
        page.fill(username, user);
        page.fill(password, pass);
        page.click(loginBtn);
    }
}
