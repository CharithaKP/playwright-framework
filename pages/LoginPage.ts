import { Page } from '@playwright/test';
import path from 'path';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    const filePath = 'file://' + path.resolve('./test-pages/login.html');
    await this.page.goto(filePath);
    await this.page.waitForLoadState('networkidle');
  }

  async login(username: string, password: string) {
    await this.page.waitForSelector('#username');
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }

  async getErrorMessage(): Promise<string> {
    await this.page.waitForSelector('#flash');
    return await this.page.textContent('#flash') || '';
  }
}
