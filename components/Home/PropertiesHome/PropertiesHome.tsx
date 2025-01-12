"use client";

import Header from "@/components/Header";
import React from "react";
import { useTranslation } from "react-i18next";
import CardProperties from "./CardProperties";

const PropertiesHome = () => {
  const { t } = useTranslation();

  return (
    <section className="containerSection">
      <div className="flex justify-center items-center">
        <Header
          title={t("properties")}
          subTitle={t("find")}
          description={t("findDesc")}
          classHeader="text-center"
          classDescription="mt-6"
        />
      </div>
      <div className="flex flex-wrap justify-between mt-20">
        <CardProperties />
        <CardProperties />
        <CardProperties />
        <CardProperties />
        <CardProperties />
        <CardProperties />
        <CardProperties />
        <CardProperties />
      </div>
    </section>
  );
};

export default PropertiesHome;
