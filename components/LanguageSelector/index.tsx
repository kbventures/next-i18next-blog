// import { useRouter } from "next/router";
// import { ChangeEvent } from "react";
// import { useTranslation } from "next-i18next";

// const LanguageSelector = () => {
//   const { pathname, push, route, asPath, locale } = useRouter();

//   const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     const value = event.target.value;

//     push(route, asPath, {
//       locale: value,
//     });
//   };

//   const { t } = useTranslation("language-selector");
//   return (
//         <div>
//             <h2>{t("languageselector")}</h2>
//             <select value={locale} onChange={handleLocaleChange}>
//                <option value="en">{t("english")}</option>
//                <option value="fr">{t("french")}</option>
//             </select>
//         </div>
//   );
// };


// export default LanguageSelector;

import { useRouter } from "next/router";
// NEW
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const LanguageSelector = () => {
  const { pathname, push, route, asPath, locale } = useRouter();

  //NEW
  const [selectedLocale, setSelectedLocale] = useState(locale);

  // NEW
    useEffect(() => {
    const storedLocale = localStorage.getItem("selectedLocale");
    if (storedLocale) {
      setSelectedLocale(storedLocale);
      push(route, asPath, { locale: storedLocale });
    }
  }, []);


  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    //NEW
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



// const LanguageSelector = () => {
//   const { t } = useTranslation("language-selector");

//   const [selectedLocale, setSelectedLocale] = useState(locale);

//   useEffect(() => {
//     const storedLocale = localStorage.getItem("selectedLocale");
//     if (storedLocale) {
//       setSelectedLocale(storedLocale);
//       push(route, asPath, { locale: storedLocale });
//     }
//   }, []);

//   const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     const value = event.target.value;

//     setSelectedLocale(value);
//     localStorage.setItem("selectedLocale", value);

//     push(route, asPath, {
//       locale: value,
//     });
//   };

//   return (
//     <div>
//       <h2>{t("languageselector")}</h2>
//       <select value={selectedLocale} onChange={handleLocaleChange}>
//         <option value="en">{t("english")}</option>
//         <option value="fr">{t("french")}</option>
//         {/* Add other language options */}
//       </select>
//     </div>
//   );
// };

// export default LanguageSelector;