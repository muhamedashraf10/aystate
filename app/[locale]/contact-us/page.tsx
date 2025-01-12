import { i18nNamespaces } from "@/app/_lib/common";
import initTranslations from "@/app/i18n";
import ContactTeam from "@/components/ContactUs/ContactTeam";
import CustomerContact from "@/components/ContactUs/CustomerContact";
import { TParams } from "@/types/params";
import React, { FC } from "react";

const ContactUs: FC<TParams> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <CustomerContact />
      <ContactTeam />
    </>
  );
};

export default ContactUs;
