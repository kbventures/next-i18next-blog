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