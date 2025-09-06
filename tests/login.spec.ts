import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page); // Initialize LoginPage with Playwright's Page object
    await loginPage.navigate();
  });

  test('should login with valid credentials', async ({ page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/.*secure/);
  });

  test('should show error message for invalid login', async ({ page }) => {
    await loginPage.login('invalidUser', 'invalidPassword');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Your username is invalid!');
  });
});
