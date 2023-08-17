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
