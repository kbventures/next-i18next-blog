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