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

  const { t } = useTranslation("common");
  return (
        <div>
            <h2>Language Selector</h2>
            <select value={locale} onChange={handleLocaleChange}>
               <option value="en">{t("english")}</option>
               <option value="fr">{t("french")}</option>
             </select>
        </div>
  );
};


export default LanguageSelector;



// import React, { useState } from 'react';

// const LanguageSelector = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('english');

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Language Selector</h2>
//       <p>Select a language:</p>
//       <select value={selectedLanguage} onChange={handleLanguageChange}>
//         <option value="english">English</option>
//         <option value="french">French</option>
//       </select>
//       <div>
//         {selectedLanguage === 'english' && <p>This is the English content.</p>}
//         {selectedLanguage === 'french' && <p>Ceci est le contenu en français.</p>}
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;