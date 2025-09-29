package pages;

import com.microsoft.playwright.*;

import java.nio.file.Paths;

public class BaseTest {
    public static Playwright playwright;
    public static Browser browser;
    public static BrowserContext context;
    public static Page page;

    public static void initBrowser() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
                .setHeadless(false)
                .setSlowMo(250));

        // Create a context with video recording
        context = browser.newContext(new Browser.NewContextOptions()
                .setRecordVideoDir(Paths.get("videos"))); // folder where videos will be saved

        page = context.newPage();
        page.setDefaultTimeout(15000);
        page.setDefaultNavigationTimeout(30000);
    }

    public static void tearDown() {
        if (context != null) context.close();  // closes video recording
        if (browser != null) browser.close();
        if (playwright != null) playwright.close();
    }
    public static void takeScreenshot(String fileName) {
        try {
            // Save screenshot in proofs/ folder
            page.screenshot(new Page.ScreenshotOptions()
                    .setPath(Paths.get("proofs/" + fileName))
                    .setFullPage(true)); // captures full page
            System.out.println("Screenshot saved: proofs/" + fileName);
        } catch (Exception e) {
            System.out.println("Failed to take screenshot: " + e.getMessage());
        }
    }

}
