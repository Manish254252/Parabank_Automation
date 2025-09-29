package stepDefinitions;

import com.microsoft.playwright.*;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import pages.BaseTest;
import io.cucumber.java.AfterAll;
import io.cucumber.java.BeforeAll;

public class Hooks {
    public static Playwright playwright;
    public static Browser browser;
    public static Page page;


    @BeforeAll
    public static void globalSetup() {
        // Initialize Playwright and browser only once
        BaseTest.initBrowser();
    }

    @AfterAll
    public static void globalTearDown() {
        // Close Playwright and browser once after all scenarios
        BaseTest.tearDown();
    }
}


