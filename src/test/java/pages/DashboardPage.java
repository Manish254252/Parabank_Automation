package pages;

import com.microsoft.playwright.Page;

public class DashboardPage extends BaseTest {
    private Page page;
    private String balanceLocator = "//table[@id='accountTable']/tbody/tr[2]/td[2]/b";

    public DashboardPage(Page page) {
        this.page = page;
    }

    public String getBalance() {
        page.waitForTimeout(4000);
        return page.textContent(balanceLocator);
    }
}
