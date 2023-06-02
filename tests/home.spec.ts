import { expect, test } from '@playwright/test';
//import fs from 'fs';
//import path from 'path';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('home contains name and title', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /Top categories /i })).toBeVisible();
  await expect(page.getByText('This is a dummy website for Web Automation Testing')).toBeVisible();
});

test('home page has links', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Blog' })).toHaveCount(2);
});

test('home page has Top Trending Categories with 8 items', async ({ page }) => {
 // const recentPosts = await page.getByRole('group', { name: /TOP TRENDING CATEGORIES/i });
  const recentPosts = await page.locator('div[id="entry_213250"]');
  await expect(recentPosts.getByRole('figure')).toHaveCount(8);
});

test('home page has recent blog post with 10 items', async ({ page }) => {
  //const recentPosts = await page.getByRole('region', { name: /FROM THE BLOG/i });
  const recentPosts = await page.locator('div[id="mz-article-tab-73213272-0"]');
  await expect(recentPosts.getByRole('group')).toHaveCount(10);
});

test('home page has recent promotion images with 3 items', async ({ page }) => {
  //const recentPosts = await page.getByRole('region', { name: /Recent Podcasts/i });
  const recentPosts = await page.locator('div[id="entry_213239"]').locator('div[class="carousel-inner"]');
  await expect(recentPosts.locator('a')).toHaveCount(3);
});


// test('testing api content', async ({ page }) => {

//   await page.route('**/_payload', route => route.fulfill({
//   status: 200,
//   body: fs.readFileSync(path.join(__dirname, 'homepage-payload.js'), 'utf8'),
//   }));
  
//   await page.goto('/');
//   page.getByRole('article', { name: 'Featured Post' }).getByRole('listitem').getByRole('link', { name: 'nuxt' }).click();
// });
