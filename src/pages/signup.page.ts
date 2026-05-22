import { Page } from 'playwright';

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
    await this.page.fill(this.firstName, 'John');
    await this.page.fill(this.lastName, 'Doe');
    await this.page.fill(this.address, '221B Baker Street');
    await this.page.fill(this.city, 'Springfield');
    await this.page.fill(this.state, 'California');
    await this.page.fill(this.zipCode, '90210');
    await this.page.fill(this.phone, '5551234567');
    await this.page.fill(this.ssn, '123-45-6789');
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.fill(this.confirmPassword, pass);
    await this.page.click(this.registerBtn);
    await this.page.waitForSelector(this.logoutBtn, { timeout: 15_000 });
  }
}
