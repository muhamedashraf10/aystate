import { i18nNamespaces } from "@/app/_lib/common";
import initTranslations from "@/app/i18n";
import HelpingSerachFaqs from "@/components/Faqs/HelpingSerachFaqs";
import OurWebsite from "@/components/Faqs/OurWebsite";
import QuestionFAQS from "@/components/Faqs/QuestionFAQS";
import TranslationsProvider from "@/components/TranslationsProvider";
import { TParams } from "@/types/params";
import React, { FC } from "react";

const Faqs: FC<TParams> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <HelpingSerachFaqs />
      <OurWebsite />
      <QuestionFAQS />
    </>
  );
};

export default Faqs;
