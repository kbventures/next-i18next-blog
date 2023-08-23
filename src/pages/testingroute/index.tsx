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
