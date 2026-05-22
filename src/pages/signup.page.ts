import { Page } from 'playwright';
import { loadSignupTestData } from '../utils/test-data-loader';

export class SignupPage {
  private readonly firstName = "input[name='customer.firstName']";
  private readonly lastName = "input[name='customer.lastName']";
  private readonly address = "input[name='customer.address.street']";
  private readonly city = "input[name='customer.address.city']";
  private readonly state = "input[name='customer.address.state']";
  private readonly zipCode = "input[name='customer.address.zipCode']";
  private readonly phone = "input[name='customer.phoneNumber']";
  private readonly ssn = "input[name='customer.ssn']";
  private readonly username = "input[name='customer.username']";
  private readonly password = "input[name='customer.password']";
  private readonly confirmPassword = "input[name='repeatedPassword']";
  private readonly registerBtn = "input[value='Register']";
  private readonly logoutBtn = "//a[text()='Log Out']";

  constructor(private readonly page: Page) {}

  async navigate(): Promise<void> {
    await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
  }

  async logOut(): Promise<void> {
    await this.page.click(this.logoutBtn);
  }

  async register(user: string, pass: string): Promise<void> {
    const data = loadSignupTestData();

    await this.page.fill(this.firstName, data.firstName);
    await this.page.fill(this.lastName, data.lastName);
    await this.page.fill(this.address, data.address);
    await this.page.fill(this.city, data.city);
    await this.page.fill(this.state, data.state);
    await this.page.fill(this.zipCode, data.zipCode);
    await this.page.fill(this.phone, data.phone);
    await this.page.fill(this.ssn, data.ssn);
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.fill(this.confirmPassword, pass);
    await this.page.click(this.registerBtn);
    await this.page.waitForSelector(this.logoutBtn, { timeout: 15_000 });
  }
}
