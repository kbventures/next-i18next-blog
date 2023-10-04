import { test, expect } from '@playwright/test';

// test('Check if the homepage loads and has the correct h1 text', async ({ page }) => {
//   await page.goto('http://localhost:3000'); // Adjust the URL as per your Next.js app's setup
  
//   const h1Element = await page.$('h1');

//   if(h1Element){
//     const h1Text = await h1Element.innerText();
//     expect(h1Text).toBe('Hello World!');
//   } else {
//     throw new Error('<h1> element not found on the page');
//   }
  
// });

// test('Check if the homepage loads and has the correct h1 text in french', async ({ page }) => {
//   await page.goto('http://localhost:3000/fr'); 
  
//   const h1Element = await page.$('h1');
  
//   if (h1Element) {
//     const h1Text = await h1Element.innerText();
    
//     expect(h1Text).toBe('Salut Monde!');
//   } else {
//     throw new Error('<h1> element not found on the page');
//   }
// });

// test('Check if language selector is working when language is currenty English and you select the french language option', async ({ page }) => {
//   await page.goto('http://localhost:3000/');

//   // Click on the dropdown to open it
//   await page.click('select#language-selector');

//   // Wait for the option you want to select to become visible
//   await page.waitForSelector('select#language-selector option[value="fr"]');

//   // Click on the option you want to select (e.g., "French")
//   await page.click('select#language-selector option[value="fr"]');

//   // Wait for the navigation to complete to the French version of the page
//   await page.waitForNavigation();

//   const h1Element = await page.$('h1');

//   if (h1Element) {
//     const h1Text = await h1Element.innerText();
//     expect(h1Text).toBe('Salut Monde!');
//   } else {
//     throw new Error('<h1> element not found on the page');
//   }
// });


test('Check if language selector is working when language is currently English and you select the French language option', async ({ page }) => {
  // Navigate to the English version of the homepage
  await page.goto('http://localhost:3000/');

  // Click on the dropdown to open it
  await page.click('select#language-selector');

  // Wait for the "French" option to become visible in the dropdown
  await page.waitForSelector('select#language-selector option[value="fr"]',{ state: 'attached' });


// Use a more specific selector for the select element
  const selectElement = await page.$('select#language-selector');

  if (selectElement) {
    // Select the "French" option by its value
    await selectElement.selectOption({ value: 'fr' });
  } else {
    throw new Error('Select element not found on the page');
  }
  // Wait for the navigation to complete to the French version of the page
    await page.waitForNavigation();

  // Check the URL to ensure it has changed to the French version
  const currentURL = page.url();
  expect(currentURL).toBe('http://localhost:3000/fr')

  // Check the content to verify it's in French
  const h1Element = await page.$('h1');
  if (h1Element) {
    const h1Text = await h1Element.innerText();
    expect(h1Text).toBe('Salut Monde!');
  } else {
    throw new Error('<h1> element not found on the page');
  }
});





// test('Check if language selector is working when language is currently French', async ({ page }) => {
//   await page.goto('http://localhost:3000/fr');

//   // Use selectOption to choose English
//   await page.selectOption('select#language-selector', 'en');

//   const h1Element = await page.$('h1');

//   if (h1Element) {
//     const h1Text = await h1Element.innerText();
//     expect(h1Text).toBe('Hello World!');
//   } else {
//     throw new Error('<h1> element not found on the page');
//   }
// });

