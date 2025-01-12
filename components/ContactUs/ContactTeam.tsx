"use client";

import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";
import FormContact from "./FormContact";

const ContactTeam = () => {
  const { t } = useTranslation();

  return (
    <section className="containerSection">
      <div className="flex  items-center justify-center text-center whitespace-pre-line">
        <Header
          width="w-full"
          title={t("selesteamTitle")}
          description={t("selesteamDesc")}
          classDescription="text-darkgray mt-8"
        />
      </div>
      <div className="flex justify-center items-center">
        <FormContact />
      </div>
    </section>
  );
};

export default ContactTeam;
