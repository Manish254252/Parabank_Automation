import { Page } from 'playwright';

export class LoginPage {
  private readonly username = "//input[@name='username']";
  private readonly password = "//input[@name='password']";
  private readonly loginBtn = "//input[@value='Log In']";

  constructor(private readonly page: Page) {}

  async navigate(): Promise<void> {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(user: string, pass: string): Promise<void> {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
}
