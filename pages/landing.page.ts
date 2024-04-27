import { Page } from '@playwright/test';

export class LandingPage {
  constructor(private page: Page) {}
  searchBar = this.page.getByTestId('search-bar');
  requestLimitText = this.page.getByTestId('rate-limit');
  searchButton = this.page.getByRole('button', { name: 'Search' });

  userBio = this.page.locator('[class="bio"]');
  userFollowers = this.page.locator('[class="followers"]');

  // async findAccount(accountID: string): Promise<void> {
  //   await this.searchBar.fill(accountID);
  //   await this.searchButton.click();
  // }
}
