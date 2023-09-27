// import { useTranslation } from "next-i18next";

// const NestedDirectory = () => {

//   const { t } = useTranslation("directorynesting/other");
//   return (
//         <div>
//             <p>{t("nesteddirectory")}</p>
//         </div>
//   );
// };

// export default NestedDirectory;


import { useTranslation } from "next-i18next";

const NestedDirectory = () => {

  const { t } = useTranslation("directorynesting/other");

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