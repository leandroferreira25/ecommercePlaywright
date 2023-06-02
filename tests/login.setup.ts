import { test as setup, expect} from '@playwright/test'
import { STORAGE_STATE } from '../playwright.config';
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.EMAIL;
const password = process.env.PASSWORD;
console.log(username, password);

setup('do login', async ({page}) =>{
    await page.goto('/');
    await page.getByRole('button', { name: 'My account' }).click();
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill(username);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('link', { name: ' Change your password'})).toBeVisible();

    await page.context().storageState({
        path: STORAGE_STATE,
    });
});
