import { Given, Then, When } from '@cucumber/cucumber';
import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { page, takeScreenshot } from '../support/test-base';
import { generatePassword, generateUsername } from '../utils/data-generator';

let signupPage: SignupPage;
let loginPage: LoginPage;
let dashboardPage: DashboardPage;

const username = generateUsername();
const password = generatePassword();

Given('the user is on the signup page', async function () {
  signupPage = new SignupPage(page);
  await signupPage.navigate();
});

When('the user registers with valid details', async function () {
  console.log(`Registering: ${username} / ${password}`);
  await signupPage.register(username, password);
  await signupPage.logOut();
});

When('logs in with the same credentials', async function () {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
  console.log(`Logging in: ${username} / ${password}`);
  await loginPage.login(username, password);
});

Then('the user should see the account balance displayed', async function () {
  dashboardPage = new DashboardPage(page);
  const balance = await dashboardPage.getBalance();
  console.log(`Account Balance: ${balance}`);
  await takeScreenshot('balance.png');
});
