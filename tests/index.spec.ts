import { test, expect } from '@playwright/test';

test('Check if the homepage loads and has the correct h1 text', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Adjust the URL as per your Next.js app's setup
  
  const h1Element = await page.$('h1');

  if(h1Element){
    const h1Text = await h1Element.innerText();
    expect(h1Text).toBe('Hello World!');
  } else {
    throw new Error('<h1> element not found on the page');
  }
  
});

test('Check if the homepage loads and has the correct h1 text in french', async ({ page }) => {
  await page.goto('http://localhost:3000/fr'); 
  
  const h1Element = await page.$('h1');
  
  if (h1Element) {
    const h1Text = await h1Element.innerText();
    
    expect(h1Text).toBe('Salut monde!');
  } else {
    throw new Error('<h1> element not found on the page');
  }
});

