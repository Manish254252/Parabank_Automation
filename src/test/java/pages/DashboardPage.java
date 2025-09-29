package pages;

import com.microsoft.playwright.Page;

public class DashboardPage {
    private Page page;
    private String balanceLocator = "td[id*='balance']";

    public DashboardPage(Page page) {
        this.page = page;
    }

    public String getBalance() {
        return page.textContent(balanceLocator);
    }
}
