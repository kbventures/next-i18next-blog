dCodesplitting:

"To be reworded:  
In Next.js, code splitting is an automatic feature that helps optimize your application's performance by breaking the bundled JavaScript code into smaller chunks. These chunks are then loaded on-demand as the user navigates through the application, reducing the initial load time and improving the overall user experience. `next-i18next` fully supports code splitting, so translations are only loaded when needed, further enhancing performance. GIVE EXAMPLE. This could go in the optional section"

WHY No other requirements: `next-i18next` simplifies internationalisation for your [**Next.js**](https://nextjs.org/) app without extra dependencies.

Production ready: `next-i18next` supports passing translations and configuration options into pages as props with SSG/SSR support.

## Introduction

Hello! Since you’ve found your way to this blog, you are likely to want to learn about making your app or website available in at least 2 languages.

Specifically, you want to internationalize your web application and localize the translation to specific languages and or cultures.

As a software engineer it's likely something you’ll need to learn as making your content available in more languages will make your content more accessible and allow you to grow your customer base and or increase reach.

In some geopolitical regions, there are laws requiring governments and companies to offer services in more than one language, and internationalizing your web application and localizing content is a must not choice.

This blog will walk you through step by step how to internationali**z**e and localize your static content using Next.js and next-i18next.

In case you didn't know, internationalizing has to do with making your web application able to support several languages while localization takes care of the actual language translation aspects.

## Overview of technologies used

In this guide, we’ll be using Next.js, Typescript, Tailwind CSS, a next-i18next, Node.js & NPM.

Having some basic React, Javascript, HTML & CSS skills is a requirement for this tutorial.

You'll also need to have \[Node.js, and NPM\]([https://nodejs.org/en/download](https://nodejs.org/en/download)) installed in order to complete this tutorial.

\[Next.js\]([https://nextjs.org/](https://nextjs.org/)) is a popular open-source framework for building web applications with React.

If you've ever had the pleasure of building applications only using vanilla React web applications you'll come to appreciate how Next.js makes it easy to build server-side rendered or static-site-generation, automatic code splitting, zero-configuration web applications with a rich echo system, developer experience, and community support.

\[Typescript\]([https://www.typescriptlang.org/](https://www.typescriptlang.org/)) is a language superset of Javascript. It enforces type safety which makes your applications robust, and scalable. It provides a powerful intelligence tool for finding and solving type safety errors pre-build.

\[Tailwind\]([https://tailwindcss.com/](https://tailwindcss.com/)) CSS is a very popular utility-first, customizable, responsive posts-CSS-based framework.

\&gt;"Node.js is an open-source JavaScript runtime environment based on Chrome's V8 engine, enabling server-side scripting with a non-blocking I/O model, asynchronous programming, a rich ecosystem of modules through NPM, and an event-driven architecture for efficient handling of concurrent connections. " -- Courtesy of chatGPT! :)

\[NPM\]([https://www.npmjs.com/](https://www.npmjs.com/)) is a javascript dependencies package manager tool primarily used with Node.js

And finally, \[Next-i18next\]([https://next.i18next.com/](https://next.i18next.com/)) enables internationalization and localization seamlessly with Next.js and uses i18next & react-i18next under the hood.

\[i18next\]([https://www.i18next.com/](https://www.i18next.com/)) is the core:

"...**internationalization framework**... ...written in and for JavaScript. ..."

While react-i18next provides support for the i18n standard for react apps but stand-alone would require more configuration.

## Project Setup

First, we will need to create a Next.js application.

In your chosen terminal type and then press enter:

```plaintext
npx create-next-app@latest next-i18next
```

\[NPX\]([https://docs.npmjs.com/cli/v8/commands/npx](https://docs.npmjs.com/cli/v8/commands/npx)) is a package runner that comes with NPM that allows you to run packages without installing them globally.

(Create-next-app)\[[https://nextjs.org/docs/pages/api-reference/create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app)\] is a package utility to set up a Next.js app and the @latest flag indicates installs the most up-to-date version.

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
Creating a n
```

To follow along with this tutorial choose yes for typescript, tailwind CSS, no for src(we'll cover how to setup SRC directory once basic setups are covered) directory and the App Router, and click on yes for the default import alias(Choose the default "@/\*" import alias).

We will also need to install the following package:

```plaintext
npm i next-i18next
```

Next-i18next is a library that simplifies internationalization (i18n) in Next.js applications. It provides tools and utilities to manage translations, language switching, and localization in your Next.js projects.

Now we are ready to internationalize the application.

### Namespaces, nesting & sub-directories...

Let's organize our translation content with simple French and English namespaces, which also demonstrate nesting and sub-directories to understand the organization's capacities in the context of a larger application.

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

Your respective en and fr directories common.json file will contain:

```javascript
{
    "helloworld": "Hello World!",
    "footer":{
      "copywright":"Copywright"
    },
    "testing-route":"Testing Route"
  }
```

```javascript
{
    "helloworld": "Salut monde!",
    "footer":{
      "copywright":"Droits d'auteur"
    },
    "testing-route":"Itinéraire de test"
  }
```

And your respective other.json translation files:

```javascript
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

Our configuration file is specifying the default locale language and which locale languages are available in this application. We are exporting this i18n configured object so that it is available to our next.config.js file.

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

We are importing the configured i18n object to enable localized URL routing.

Next.js links your locales(ie: JSON translation files) with internationalized routing in sync out of the box, however, it doesn't assist in the actual translation of the content or establish the framework for supporting internationalizing your web application.

Some important functions provided by next-i18next are:

`useTranslation` hook

`appWithTranslation` HOC(Higher Order Component)

`withTranslation` HOC

`appWithTranslation` is used at the top level of your application to enable internationalization across all pages and components.

The `useTranslation` hook and `withTranslation` HOC is used within your components. `withTranslation` is used with class components while `useTranslation` is used with functional components. Since newer versions of React implementation tend to favor functional programming we will use `useTranslation`.

First in \_app.tsx, which normally is where we find common layout and components structures we can replace the entire file with:

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

We are essentially wrapping the entire application and enabling i18n internationalization features to be available everywhere.

In our tutorial let's imagine that our data is static, meaning it won't change and doesn't need to be rebuilt every time the content is accessed. This will make it faster to access.

In your main index.tsx file, which is the main entry point of your app:

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

The translation content from common.json for French and English language props will now be available to all our components found in the index. js

`const { t } = useTranslation("common");` provides translation functionality.

`getStaticProps` is using `serverSideTranslations` to preload translations at build time for better performance.

Because we have two translation files we wil instead pass an array so both are accessible within our app.

```javascript
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import LanguageSelector from "../components/LanguageSelector/index";

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

Ok, now let's see if it works.

```javascript
npm run dev
```

This is a default script found in package.json which compiles your app and does so continually as you make changes to the app without needing to restart the developer server for many changes.

Check localhost:3000 and then localhost:3000/fr to make sure it's working. You can also change the language settings in your browser of choice to obtain the same results.

So now we have the basics in place.

### Organizing things...

What if your web app is really large and you'd like more options to organize your translation files and would like to know how to access them?

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

Modify \_index.tsx in the pages directory:

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

Add this to components/Copywright/index.tsx:

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

"footer.copywright" using the `t` translation function to access nested attributes in our translation files.

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

We could have picked to have all our project files in an SRC directory when selecting the configuration settings of our next.js project while using create-next-app but we didn't :astonished: . Having all your project files in the SRC is a very common and popular way to organize your project files by separating project files and configuration files.

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

As mentioned before next.js has URL routing setup for internationalization built under the hood. To take advantage of URL routing we'll be using the useRouter hook which gives you access to the router object. You can use it to manage navigation and access route information.

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
        

This React component allows users to select a language using a dropdown menu update the URL path accordingly and navigate to the chosen language.

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

\*\*http://localhost:3000/testing\*\*

Now try changing the language to French using our newly created dropdown menu, and then click on the link to take us to the new route, change the language back to English, and then click on the link to take us back to the home menu. Notice the changes survive the transfers to the new pages.

From the home page change the language to French, now CTRL-C in your terminal and restart your app and restart your app from localhost:3000.

You'll notice your language changes aren't persisting. To do that you'll have to save the changes to your browser.

In this tutorial, we will be using local storage which allows web applications to store key-value pairs using a browser API.

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

So how do we solve this problem? First, you'll need to implement user authentication. The user's language selection will be stored in the back-end database. If you want this selection to only apply during the current session you can use sessionStorage instead of localStorage.

This implementation will be covered in the upcoming part two of this blog!

Before we end this tutorial, what self-respecting app doesn't have any tests and isn't deployed? Let's add some tests and then deploy the application!

## Testings

For this tutorial, we will be using \[Playwright\]([https://playwright.dev/](https://playwright.dev/)) for end-to-end testing.

In terminal :

```javascript
npm init playwright
```

Choose a directory where your test files will live, choose no for GitHub actions and finally yes to install/update playwright.

```javascript
npm init playwright
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Where to put your end-to-end tests? · tests 
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
```

Update your package.json file:

```javascript
...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test:tests": "playwright test"
  },
...
```

## Deploying

Vercel

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
