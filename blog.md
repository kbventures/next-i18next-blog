Codesplitting:

"To be reworded:  
In Next.js, code splitting is an automatic feature that helps optimize your application's performance by breaking the bundled JavaScript code into smaller chunks. These chunks are then loaded on-demand as the user navigates through the application, reducing the initial load time and improving the overall user experience. `next-i18next` fully supports code splitting, so translations are only loaded when needed, further enhancing performance. GIVE EXAMPLE. This could go in the optional section"

WHY No other requirements: `next-i18next` simplifies internationalisation for your [**Next.js**](https://nextjs.org/) app without extra dependencies.

Production ready: `next-i18next` supports passing translations and configuration options into pages as props with SSG/SSR support.

## Introduction

Hello there! Having found your way to this blog, you probably want to know how to make your app or website multilingual.

Specifically, you want to internationalize your web application and localize the translation to specific languages and or cultures.

As a software engineer, it's likely something you’ll need to learn, as making your content available in more languages will make your content more accessible, allow you to grow your customer base, and or increase reach.

In some geopolitical regions, there are laws requiring governments and companies to offer services in more than one language, and internationalizing your web application and localizing content is a must, not a choice.

This blog will walk you through step by step how to internationalize and localize your static content using Next.js and next-i18next.

In case you didn't know, internationalizing has to do with making your web application able to support several languages while localization takes care of the actual language translation aspects.

## Overview of technologies used

In this guide, we’ll be using Next.js, Typescript, Tailwind CSS, a next-i18next, Node.js & NPM.

Having some basic React, Javascript, HTML & CSS skills is a requirement for this tutorial.

You'll also need to have \[Node.js, and NPM\]([https://nodejs.org/en/download](https://nodejs.org/en/download)) installed in order to complete this tutorial.

\[Next.js\]([https://nextjs.org/](https://nextjs.org/)) is a popular open-source framework for building web applications with React.

If you've ever had the pleasure of building applications only using vanilla React web applications you'll come to appreciate how Next.js makes it easy to build server-side rendered or static-site-generation, automatic code splitting, zero-configuration web applications with a rich echo system, developer experience, and community support.

\[Typescript\]([https://www.typescriptlang.org/](https://www.typescriptlang.org/)) is a language superset of Javascript. It enforces type safety which makes your applications robust, and scalable. It provides a powerful intelligence tool for finding and solving type safety errors pre-build.

\[Tailwind\]([https://tailwindcss.com/](https://tailwindcss.com/)) CSS is a very popular utility-first, customizable, responsive posts-CSS-based framework.

\&gt;"\[Node.js\]([https://nodejs.org/en](https://nodejs.org/en)) is an open-source JavaScript runtime environment based on Chrome's V8 engine, enabling server-side scripting with a non-blocking I/O model, asynchronous programming, a rich ecosystem of modules through NPM, and an event-driven architecture for efficient handling of concurrent connections. "

\-- Courtesy of chatGPT! :)

\[NPM\]([https://www.npmjs.com/](https://www.npmjs.com/)) is a javascript dependencies package manager tool primarily used with Node.js

And finally, \[Next-i18next\]([https://next.i18next.com/](https://next.i18next.com/)) enables internationalization and localization seamlessly with Next.js and uses i18next & react-i18next under the hood.

\[i18next\]([https://www.i18next.com/](https://www.i18next.com/)) is the core:

"...**internationalization framework**... ...written in and for JavaScript. ..."

While react-i18next provides support for the i18n standard for react apps, it requires more configuration.

## Project Setup

First, we will need to create a Next.js application.

In your chosen terminal type the following and then press enter:

```plaintext
npx create-next-app@latest next-i18next
```

\[NPX\]([https://docs.npmjs.com/cli/v8/commands/npx](https://docs.npmjs.com/cli/v8/commands/npx)) is a package runner that comes with NPM that allows you to run packages without installing them globally.

\[Create-next-app\]\[[https://nextjs.org/docs/pages/api-reference/create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app)\] is a package utility to set up a Next.js app and the @latest flag selects to installs the most up-to-date version.

Next.js supports many of the tools we will be using out of the box and configured for you.

You will be prompted with the following:

```plaintext
next-i18next
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes
√ What import alias would you like configured? ... @/*
```

To follow along with this tutorial choose yes for typescript, tailwind CSS, no for src directory (we'll cover how to set the SRC directory once basic setups are covered), and the App Router, and click on yes for the default import alias(Choose the default "@/\*" import alias).

We will also need to install the following package:

```plaintext
npm i next-i18next
```

Next-i18next is a library that simplifies internationalization (i18n) in Next.js applications. It provides tools and utilities to manage translations, language switching, and localization in your Next.js projects.

Now we are ready to internationalize & localize the application.

### Namespaces, loading namespaces, nesting & sub-directories...

Let's organize our translation content with simple French and English namespaces, which will also be used to demonstrate loading, nesting, and sub-directories to understand the organization's capacities in the context of a larger application.

```plaintext
public/
|-- locales/
|   |-- en/
|   |   |-- common.json
|   |   |-- directoryNesting/
|   |       |-- other.json
|   |-- fr/
|   |   |-- common.json
|   |   |-- directoryNesting/
|   |       |-- other.json
```

Your respective "en" and "fr" directories common.json file will contain:

```json
{
    "helloworld": "Hello World!",
    "footer":{
      "copywright":"Copywright"
    },
    "testing-route":"Testing Route"
  }
```

```json
{
    "helloworld": "Salut monde!",
    "footer":{
      "copywright":"Droits d'auteur"
    },
    "testing-route":"Itinéraire de test"
  }
```

And your respective other.json translation files:

```json
{
    "nesteddirectory": "Nested Directory"
  }
```

```json
{
    "nesteddirectory": "Répertoire imbriqué"
  }
```

### Configuration

Create a "next-i18next.config.js" file at the root of your project.

```javascript
module.exports = {
    i18n: {
      locales: ["en", "fr"],
      defaultLocale: "en",
    },
  };
```

Our configuration file specifies the default locale language and which locale languages are available in this application. We are exporting this i18n configured object so that it is available to our next.config.js file.

The i18n configuration object is provided by the next-i18next package.

Modify your "next.config.js" file:

```javascript
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n
}
module.exports = nextConfig
```

We are importing the configured i18n object for internationalization settings, which can be used to support localized content.

Next.js links your locales(i.e.: JSON translation files) with internationalized routing in sync out of the box, however, it doesn't assist in the actual translation of the content or establish the framework for supporting internationalizing your web application.

Some important functions provided by next-i18next are:

`useTranslation` hook

`appWithTranslation` HOC(Higher Order Component)

`withTranslation` HOC

`appWithTranslation` is used at the top level of your application to enable internationalization across all pages and components.

The `useTranslation` hook and `withTranslation` HOC is used within your components. `withTranslation` is used with class components while `useTranslation` is used with functional components. Since newer versions of React implementation tend to favor functional programming we will use `useTranslation`.

First in "\_app.tsx", which normally is where we find the common layout and components structures we can replace the entire file with:

```javascript
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <Component {...pageProps} />
    </>
  );
}
export default appWithTranslation(MyApp);
```

We are essentially wrapping the entire application and enabling i18n internationalization features to be available everywhere in the application.

In our tutorial let's imagine that our data is static, meaning it won't change and doesn't need to be rebuilt every time the content is accessed by the user. This will make it faster to access.

In your main "index.tsx" file, which is the main entry point of your app:

```javascript
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("common");

  return (
    <div>
        <h1>{t("helloworld")}</h1>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, "common")),
    },
  };
};

export default Index;
```

The translation content from common.json for French and English language props will now be available to all our components found in the index. js through the use of...

`const { t } = useTranslation("common");` which provides translation functionality within the respective functional components.

`getStaticProps` is using `serverSideTranslations` to preload translations at build time for better performance.

Because we have two translation files we will instead pass an array so both are accessible within our app.

```javascript
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("common");

  return (
    <div>
        <h1>{t("helloworld")}</h1>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common", "language-selector"])),
    },
  };
};

export default Index;
```

Okay, now let's see if it works.

```javascript
npm run dev
```

The above is a default script found in package.json which compiles your app and should do so continually as you make changes to the app without needing to restart the developer server for many changes.

Check localhost:3000 and then localhost:3000/fr to make sure it's working. You can also change the language settings in your browser of choice to obtain the same results.

So now we have the basics in place.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695746790174/7cbfe37a-b3dd-4a94-a61e-40079c21087c.png align="center")

### Organizing things...

What if your web app is really large and you'd like more options to organize your translation files and would like to know how to access them in different ways?

Let's look at some options. Let's expand our current directory and file structure to the following from the root:

```javascript
components/
|-- Copywright/
|   |-- index.tsx
|-- LanguageSelector/
|   |-- index.tsx
|-- NestedDirectory/
|   |-- index.tsx
```

Let's access the nested copyright property found in common.json and then let's access the translation file found in the sub-directory NestedDirectory.

Modify "\_index.tsx" in the pages directory:

```javascript
import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Copywright from "../components/Copywright";
import NestedDirectory from "../components/NestedDirectory";

const Index = () => {
  const { t } = useTranslation("common");
  return (
    <div>
        <h1>{t("helloworld")}</h1>
        <NestedDirectory/>
        <Copywright/>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common","language-selector","directorynesting/other"])),
    },
  };
};

export default Index;
```

Add this to "components/Copywright/index.tsx":

```javascript
import { useTranslation } from "next-i18next";

const Copywright = () => {

  const { t } = useTranslation("common");
  return (
        <div>
            <p>{t("footer.copywright")}</p>
        </div>
  );
};
export default Copywright;
```

To access nested content in the translation file we simply access them as normal attributes from an object:

"footer.copywright" uses the `t` translation function to access nested attributes in our translation files.

Modify components/NestedDirectory/index.tsx:

```javascript
import { useTranslation } from "next-i18next";

const NestedDirectory = () => {

  const { t } = useTranslation("directorynesting/other");
  return (
        <div>
            <p>{t("nesteddirectory")}</p>
        </div>
  );
};
export default NestedDirectory;
```

For sub-directories in our translation file directory, we'll use the syntax "directorynesting/other" in the `t` "function" parameter and server-side translation array found in index.tsx.

What if we want to access 2 translation files in one component?

Modify "components/NestedDirectory/index.tsx:"

```javascript
import { useTranslation } from "next-i18next";

const NestedDirectory = () => {

  const { t: commonT } = useTranslation("common");
  const { t: directorynestingT } = useTranslation("directorynesting/other");
  return (
        <div>
            <h1>{directorynestingT("nesteddirectory")}</h1>
            <p>{commonT("helloworld")}</p>
        </div>
  );
};
export default NestedDirectory;
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695831154304/587e38b1-98e8-4f0f-8e07-546a359558fb.jpeg align="center")

We could have picked to have all our project files in an SRC directory when selecting the configuration settings of our next.js project while using create-next-app but we didn't.

Having all your project files in the SRC is a very common and popular way to organize your project files by separating project files and configuration files.

First, create a `src` directory in your root project folder.

Then, you'll need to modify next-i18next.config.js:

```javascript
const path = require('path');

module.exports = {
    i18n: {
      locales: ["en", "fr"],
      defaultLocale: "en",
    },
    localePath: 'src/public/locales',
  };
```

And finally,

Move your component, public, styles, and pages directory inside the newly created SRC directory.

You may need to delete your node\_modules directory and package-lock.json in your terminal :

```javascript
npm cache clean --force
npm install
```

In order for your app to run without errors.

Okay so now we have some basic file organization strategies.

What if the user would like to change the language himself?

## Language Selector

Let's make a change to our main index.tsx file :

```javascript
import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import LanguageSelector from "../components/LanguageSelector/index";
import Copywright from "../components/Copywright";
import NestedDirectory from "../components/NestedDirectory";

const Index = () => {
  const { t } = useTranslation("common");
  return (
    <div>
        <h1>{t("helloworld")}</h1>
        <LanguageSelector />
        <NestedDirectory/>
        <Copywright/>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common","language-selector","directorynesting/other"])),
    },
  };
};

export default Index;
```

Add the following code to our newly created LanguageSelector component:

```javascript
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { useTranslation } from "next-i18next";

const LanguageSelector = () => {
  const { pathname, push, route, asPath, locale } = useRouter();

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    push(route, asPath, {
      locale: value,
    });
  };

  const { t } = useTranslation("language-selector");
  return (
        <div>
            <h2>{t("languageselector")}</h2>
            <select value={locale} onChange={handleLocaleChange}>
               <option value="en">{t("english")}</option>
               <option value="fr">{t("french")}</option>
            </select>
        </div>
  );
};

export default LanguageSelector;
```

As mentioned before next.js has URL routing setup for internationalization built under the hood. To take advantage of URL routing we'll be using the "useRouter" hook which gives you access to the router object. You can use it to manage navigation and access route information.

Let's break down the destructured variables and the function in the provided code:

```javascript
{ pathname, push, route, asPath, locale } = useRouter();
```

1. `pathname`**:**
    
    * This variable holds the current path of the URL.
        
    * "[**https://example.com/**](https://example.com/products)**example**"
        
2. `push`**:**
    
    * This variable holds a function that allows you to navigate to different routes.
        
3. `route`**:**
    
    * This variable holds the current route pattern.
        
    * \[Routing\]([https://nextjs.org/docs/pages/building-your-application/routing](https://nextjs.org/docs/pages/building-your-application/routing))
        
4. `asPath`**:**
    
    * This variable holds the full URL path, including query parameters and hash.
        
    * "[**https://example.com/search?q=keyword&page=2**](https://example.com/search?q=keyword&page=2)"
        
5. `locale`**:**
    
    * This variable holds the current locale (language) of the route if i18n (internationalization) is being used.
        
    * "en" or "fr" for this tutorial
        

The React component we just created allows users to select a language using a dropdown menu that updates the URL path accordingly and navigates to the chosen language.

You should now be able to select a language using the drop-down menu.

Now what happens if we switch the language but go to another page?

Let's find out:

Modify pages/index.tsx:

```javascript
import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import LanguageSelector from "../components/LanguageSelector/index";
import Copywright from "../components/Copywright";
import NestedDirectory from "../components/NestedDirectory";

import Link from "next/link"

const Index = () => {
  const { t } = useTranslation("common");

  return (
    <div>
        <h1>{t("helloworld")}</h1>
        <LanguageSelector />
        <NestedDirectory/>
        <Copywright/>
        <Link href="/testingroute">{t("newroute")}</Link>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common","language-selector","directorynesting/other"])),
    },
  };
};

export default Index;
```

We are using "next/link" a component provided by Next.js used for client-side navigation.

Create the following subdirectory in pages and add a new index.tsx file:

```javascript
|-- pages/
        |-- testing/
        |   |-- index.tsx
```

...add the following to this newly created index.tsx file:

```javascript
import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import LanguageSelector from "../../components/LanguageSelector";

import Link from "next/link";
const Index = () => {
  const { t } = useTranslation("common");

  return (
    <div>
        <h1>{t("newroute")}</h1>
        <LanguageSelector/>
        <Link href="/">{t("homepage")}</Link>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common","language-selector"])),
    },
  };
};

export default Index;
```

Next.js will automatically recognize this as a new URL path.

\[Linking and navigating\]([https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating))

\*\*http://localhost:3000/testing\*\*

Now try changing the language to French using our newly created dropdown menu, and then click on the link to take us to the new route, change the language back to English, and then click on the link to take us back to the home menu. Notice the changes survive the navigating to new pages.

From the home page change the language to French, now CTRL-C in your terminal and restart your app and restart your app from localhost:3000.

You'll notice your language changes aren't persisting. To do that you'll have to save the changes to your browser.

In this tutorial, we will be using \[local storage\]([https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)) which allows web applications to store key-value pairs using a browser API.

Modify components/LanguageSelector/index.tsx:

```javascript
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const LanguageSelector = () => {
  const { pathname, push, route, asPath, locale } = useRouter();
  const [selectedLocale, setSelectedLocale] = useState(locale);

    useEffect(() => {
    const storedLocale = localStorage.getItem("selectedLocale");
    if (storedLocale) {
      setSelectedLocale(storedLocale);
      push(route, asPath, { locale: storedLocale });
    }
  }, []);

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedLocale(value);
    localStorage.setItem("selectedLocale", value);
    push(route, asPath, {
      locale: value,
    });
  };

  const { t } = useTranslation("language-selector");
  return (
        <div>
            <h2>{t("languageselector")}</h2>
            <select value={locale} onChange={handleLocaleChange}>
               <option value="en">{t("english")}</option>
               <option value="fr">{t("french")}</option>
            </select>
        </div>
  );
};

export default LanguageSelector;
```

Your code manages language selection for the web application by utilizing local state management with `useState`, utilizing router information with `useRouter`, saving and retrieving language preferences with `localStorage`which is part of the browser API.

There are severe limitations to this implementation. Local storage will be specific to every browser & device you use. If you restart the app and use it on the same browser and device it will remember the selected language but not on other browsers & devices.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1695833275160/e6ba07e3-f035-4e00-98db-6307067993c8.png align="center")

So how do we solve this problem?

First, you'll need to implement user authentication. The user's language selection will be stored in the back-end database. If you want this selection to only apply during the current session you can use sessionStorage instead of localStorage.

This implementation will be covered in the upcoming part two of this blog!

Before we end this tutorial, what self-respecting web application doesn't have any tests and isn't deployed? Let's add some tests and then deploy the application!

## Testings

For this tutorial, we will be using \[Playwright\]([https://playwright.dev/](https://playwright.dev/)) for end-to-end testing.

Software end-to-end testing (E2E) simulates real user scenarios to test an application's functionality from start to finish. An end-to-end test ensures that all the components of an application work together and behave correctly in a production-like environment.

I would also recommend installing the developer extension for VS Code so the tests a applied in your browser and can be observed visually in action.

%[https://www.youtube.com/watch?v=Xz6lhEzgI5I&t=44s] 

```javascript
npm init playwright
```

Choose a directory where your test files will live, choose no for GitHub actions, and finally yes to install/update playwright.

```javascript
npm init playwright
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Where to put your end-to-end tests? · e2e 
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
```

Playwright will create the following files:

```javascript
playwright.config.ts
package.json
package-lock.json
e2e/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts
```

Update your package.json file:

```javascript
...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "npx playwright test"
  },
```

Let's start by creating 2 simple tests in "e2e/example.spec.ts" file:

```javascript
import { test, expect } from '@playwright/test';

test('Check if the homepage loads and has the correct h1 text', async ({ page }) => {
  await page.goto('http://localhost:3000'); 

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
```

In the terminal:

```javascript
npx run test

npm run test

> language-button@0.1.0 test
> npx playwright test


Running 2 tests using 2 workers
  2 passed (5.0s)

To open last HTML report run:

  npx playwright show-report 
```

Okay, so we now have a basic test in place. Let's simulate a user language change using our language selector. Let's update the e2e/example.spec.ts:

```javascript
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

test('Check if language selector is working when language is currently French and you select the ENglish language option', async ({ page }) => {
  // Navigate to the English version of the homepage
  await page.goto('http://localhost:3000/fr');

  // Click on the dropdown to open it
  await page.click('select#language-selector');

  // Wait for the "French" option to become visible in the dropdown
  await page.waitForSelector('select#language-selector option[value="en"]',{ state: 'attached' });


// Use a more specific selector for the select element
  const selectElement = await page.$('select#language-selector');

  if (selectElement) {
    // Select the "French" option by its value
    await selectElement.selectOption({ value: 'en' });
  } else {
    throw new Error('Select element not found on the page');
  }
  // Wait for the navigation to complete to the French version of the page
    await page.waitForNavigation();

  // Check the URL to ensure it has changed to the French version
  const currentURL = page.url();
  expect(currentURL).toBe('http://localhost:3000/')

  // Check the content to verify it's in French
  const h1Element = await page.$('h1');
  if (h1Element) {
    const h1Text = await h1Element.innerText();
    expect(h1Text).toBe('Hello World!');
  } else {
    throw new Error('<h1> element not found on the page');
  }
});
```

```javascript
npm run test

> language-button@0.1.0 test
> npx playwright test       


Running 4 tests using 2 workers
  4 passed (9.1s)

To open last HTML report run:

  npx playwright show-report 

PS C:\Users\kmb_x\Programming\next-i18next-blog> 
```

## Deploying

Before beginning you'll need to set up your project with git and push the code to a GitHub repository.

1. **Initialize a Git Repository**:
    
    * Open your terminal/command prompt.
        
    * Navigate to your project root directory.
        
    * Run the following command to initialize a new Git repository:
        
        ```javascript
        git init
        ```
        
2. **Add and Commit Your Project**:
    
    * Use the following commands to add your files and make an initial commit:
        
        ```javascript
        git add .
        git commit -m "Initial commit"
        ```
        
3. **Create a Repository on GitHub**:
    
    * Go to the GitHub website ([**https://github.com**](https://github.com)).
        
    * Log in to your GitHub account.
        
    * Click on the "+" sign in the top right corner and select "New Repository."
        
    * Fill in the repository name, description, and other settings.
        
    * Click on the "Create repository" button.
        
4. **Link Your Local Repository to the GitHub Repository**:
    
    * On the GitHub repository page, you will see instructions for pushing an existing repository from the command line. It should look something like this:
        
        ```javascript
        cssCopy codegit remote add origin <repository_url>
        git branch -M main
        git push -u origin main
        ```
        
    * Copy and paste these commands into your terminal, replacing `<repository_url>` with the URL of your GitHub repository. This links your local repository to the remote GitHub repository.
        
5. **Push Your Code to GitHub**:
    
    * After setting the remote, push your code to GitHub by running:
        
        ```javascript
        cssCopy codegit push -u origin main
        ```
        
    
    This command pushes your code to the GitHub repository's `main` branch.
    
6. **Verify on GitHub**:
    
    * Visit your GitHub repository in a web browser to confirm that your code has been successfully pushed.
        

Your project is now on GitHub, and you

## Troubleshooting

Common errors, screens shots

## Summary

## Important Links

\[Project Repository\]([https://github.com/kbventures/next-i18next-blog](https://github.com/kbventures/next-i18next-blog))

\[Node.js\]([https://nodejs.org/en](https://nodejs.org/en))

\[Next.js\]([https://nextjs.org/](https://nextjs.org/))

\[Typescript\]([https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/))

\[Next-i18next\]([https://github.com/i18next/next-i18next](https://github.com/i18next/next-i18next))

\[Tailwind\]([https://v2.tailwindcss.com/docs](https://v2.tailwindcss.com/docs))

\[Next.js + Playwright installation\]([https://nextjs.org/docs/pages/building-your-application/optimizing/testing#playwright](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#playwright))

## Special mentions & credits

1. **Additional Features and Best Practices:**
    
    * Suggestions for enhancing the blog's user experience with features like pagination, categories, tags, and search functionality.
        
    * Best practices for performance optimization, including lazy loading and code splitting.
        
    * Consideration of accessibility (a11y) practices to ensure an inclusive experience for all users.
        
2. **Troubleshooting and Tips:**
    
    * Common challenges you might encounter during development and how to overcome them.
        
    * Tips for maintaining and updating your Next.js blog with i18n.
        
3. **Troubleshooting and Tips:**
    

[https://www.freecodecamp.org/news/technical-blogging-basics/](https://www.freecodecamp.org/news/technical-blogging-basics/)

Next-i18next is a popular internationalization (i18n) library for Next.js applications. When testing Next-i18next in your Next.js app, it's important to ensure that the internationalization features are functioning correctly and providing a seamless experience for users speaking different languages. Here are some valuable tests you should consider performing:

1. **Basic Language Switching Test:** Ensure that you can switch the language of your app using the i18n library's provided mechanisms, such as buttons or dropdowns. Verify that the text content and UI elements update correctly according to the selected language.
    
2. **Translation Tests:** Check that all translated text is being displayed correctly based on the selected language. Make sure that placeholders, variables, and dynamic content within translations are being replaced correctly.
    
3. **Pluralization and Formatting Tests:** Test the pluralization rules and formatting for languages that have different plural forms. Verify that numeric values and placeholders are properly formatted according to the chosen language's rules.
    
4. **Date and Time Formatting Tests:** Ensure that date and time formatting is accurate for different languages. Test various date and time formats to confirm that they match the expectations of each language/locale.
    
5. **Fallback Language Test:** Test the behavior when translations are missing for a specific language. Verify that the app falls back to a default language or a specified fallback language and still functions correctly.
    
6. **RTL (Right-to-Left) Language Test:** If your app supports RTL languages, check that the UI layout, alignment, and behavior switch to RTL mode when a right-to-left language is selected.
    
7. **SEO Tests:** Verify that the translated content is being correctly indexed by search engines. Check the source code to ensure that the appropriate HTML tags (like hreflang tags) are being generated for different languages.
    
8. **Linking and Routing Tests:** Test that language switching doesn't break your app's routing and navigation. Verify that URLs, routing, and links function as expected when switching between languages.
    
9. **Context Switching Test:** If your app has user authentication or personalized content, test that language preferences are maintained when users log in or switch between authenticated and non-authenticated states.
    
10. **Performance Tests:** Test the performance impact of loading translations. Check if loading translations asynchronously or using code splitting impacts the app's load time.
    
11. **Unit and Integration Tests:** Write unit and integration tests that specifically target the i18n functionality. These tests can help catch regressions when making changes to the app's codebase.
    
12. **Cross-Browser Tests:** Test your i18n features across different browsers to ensure compatibility and consistent behavior.
    
13. **Accessibility (a11y) Tests:** Verify that language changes do not introduce accessibility issues, such as broken focus or navigation.
    
14. **Automated End-to-End Tests:** Consider setting up automated end-to-end tests using testing frameworks like Cypress or Selenium. These tests can simulate user interactions and verify i18n behavior across different scenarios.
    

Remember that i18n testing should be an ongoing process as you make updates to your app. Automate these tests where possible to ensure consistent quality as your app evolves.