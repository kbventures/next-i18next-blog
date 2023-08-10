import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import LanguageSelector from "../components/LanguageSelector/index";

const Index = () => {
  const { t } = useTranslation("common");

  return (
    <div>
        <h1>{t("helloworld")}</h1>
        <LanguageSelector />
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default Index;
