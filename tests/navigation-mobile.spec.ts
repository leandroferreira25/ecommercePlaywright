import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('logo links to home page', async ({ page }) => {
  await page.getByRole('link', { name: 'Poco Electro' }).click();
  await expect(page).toHaveURL('/index.php?route=common/home');
});


test.describe('navigation', () => {

  test(`header nav links to correct pages`, async ({ page, isMobile }) => {

    const hamburgerMenu = page.getByRole('button', { name: 'open menu' });

    if (isMobile) {
      await hamburgerMenu.click();
    }
    await page.getByRole('navigation').getByRole('link', { name: 'Cameras', exact:true }).click();
    await expect(page).toHaveURL('category');
      
    if (isMobile) {
      await hamburgerMenu.click();
    }
    await page.getByRole('navigation').getByRole('link', { name: 'Software' }).click();
    await expect(page).toHaveURL('17');
      
    if (isMobile) {
      await hamburgerMenu.click();
    }
    await page.getByRole('navigation').getByRole('link', { name: ' Phone, Tablets & Ipod' }).click();
    await expect(page).toHaveURL('57');
      
    if (isMobile) {
      await hamburgerMenu.click();
    }
    await page.getByRole('navigation').getByRole('link', { name: ' Laptops & Notebooks' }).click();
    await expect(page).toHaveURL('18');
      
    if (isMobile) {
      await hamburgerMenu.click();
    }
    await page.getByRole('navigation').getByRole('link', { name: 'Components' }).click();
    await expect(page).toHaveURL('25');

  })
/*
  test(`footer nav links to correct pages`, async ({ page, isMobile }) => {
    test.skip(isMobile, 'Still working on it');
      await page.getByRole('contentinfo').getByRole('link', { name: 'about' }).click();
      await expect(page).toHaveURL('about');

      await page.getByRole('contentinfo').getByRole('link', { name: 'videos' }).click();
      await expect(page).toHaveURL('videos');
        
      await page.getByRole('contentinfo').getByRole('link', { name: 'podcasts' }).click();
      await expect(page).toHaveURL('podcasts');
        
      await page.getByRole('contentinfo').getByRole('link', { name: 'courses' }).click();
      await expect(page).toHaveURL('courses');
        
      await page.getByRole('contentinfo').getByRole('link', { name: 'blog' }).click();
      await expect(page).toHaveURL('blog');
    })*/
})
