// @ts-check
const { test, expect } = require('@playwright/test');

test('assetion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

  const getTitle = await page.title();
  await expect(getTitle).toBe('Swag Labs');

  await page.fill('#user-name', 'standard_user');
  await expect(page.locator('#user-name')).toHaveValue('standard_user');
  await page.fill('#password', 'secret_sauce');
  await expect(page.locator('#password')).toHaveValue('secret_sauce');
  
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


test('checkout test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');



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
});
