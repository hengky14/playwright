// @ts-check
const { test, expect } = require('@playwright/test');

test('assetion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

  const getTitle = await page.title();
  await expect(getTitle).toBe('Swag Labs');


 const userName = 'standard_user';
 const password = 'secret_sauce';

  const userNameInput = page.locator('#user-name');
  await userNameInput.fill(userName);
  await expect(userNameInput).toHaveValue(userName);

  const passwordInput = page.locator('#password');
  await passwordInput.fill(password);
  await expect(passwordInput).toHaveValue(password);
  
  await page.click('#login-button');


  await page.click('.inventory_item:first-child .btn_inventory');
  
  await page.click('.shopping_cart_link');
  await page.click('#checkout');


  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '12345');


  await page.click('#continue');

  
  await expect(page.locator('.checkout_summary_container')).toBeVisible();

 
  await page.click('#finish');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');


})


