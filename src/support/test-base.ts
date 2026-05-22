import { chromium, Browser, BrowserContext, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import { paths, playwrightUse } from '../config/playwright-settings';

let browser: Browser;
let context: BrowserContext;
export let page: Page;

export async function initBrowser(): Promise<void> {
  browser = await chromium.launch({
    headless: playwrightUse.headless,
    ...playwrightUse.launchOptions,
  });

  context = await browser.newContext({
    recordVideo: playwrightUse.video ? { dir: paths.videos } : undefined,
  });

  page = await context.newPage();
  page.setDefaultTimeout(playwrightUse.actionTimeout);
  page.setDefaultNavigationTimeout(playwrightUse.navigationTimeout);
}

export async function tearDown(): Promise<void> {
  if (context) await context.close();
  if (browser) await browser.close();
}

export async function takeScreenshot(fileName: string): Promise<void> {
  try {
    if (!fs.existsSync(paths.proofs)) {
      fs.mkdirSync(paths.proofs, { recursive: true });
    }
    await page.screenshot({
      path: path.join(paths.proofs, fileName),
      fullPage: true,
    });
    console.log(`Screenshot saved: ${paths.proofs}/${fileName}`);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.log(`Failed to take screenshot: ${message}`);
  }
}
