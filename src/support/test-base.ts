import { chromium, Browser, BrowserContext, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

let browser: Browser;
let context: BrowserContext;
export let page: Page;

export async function initBrowser(): Promise<void> {
  browser = await chromium.launch({
    headless: false,
    slowMo: 250,
  });

  context = await browser.newContext({
    recordVideo: { dir: 'videos' },
  });

  page = await context.newPage();
  page.setDefaultTimeout(15_000);
  page.setDefaultNavigationTimeout(30_000);
}

export async function tearDown(): Promise<void> {
  if (context) await context.close();
  if (browser) await browser.close();
}

export async function takeScreenshot(fileName: string): Promise<void> {
  try {
    const proofsDir = path.join('proofs');
    if (!fs.existsSync(proofsDir)) {
      fs.mkdirSync(proofsDir, { recursive: true });
    }
    await page.screenshot({
      path: path.join(proofsDir, fileName),
      fullPage: true,
    });
    console.log(`Screenshot saved: proofs/${fileName}`);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.log(`Failed to take screenshot: ${message}`);
  }
}
