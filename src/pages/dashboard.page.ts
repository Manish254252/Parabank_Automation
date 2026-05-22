import { Page } from 'playwright';

export class DashboardPage {
  private readonly balanceLocator = "//table[@id='accountTable']/tbody/tr[2]/td[2]/b";

  constructor(private readonly page: Page) {}

  async getBalance(): Promise<string> {
    await this.page.waitForTimeout(4000);
    const balance = await this.page.textContent(this.balanceLocator);
    return balance ?? '';
  }
}
