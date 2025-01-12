"use client";

import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";
import { genertateData } from "@/app/_lib/helpers";
import IconCard from "../UIElement/IconCard";
import Image from "next/image";
import map from "@/assets/map.png";

const CustomerContact = () => {
  const { t } = useTranslation();
  const cardData = genertateData(t);

  return (
    <section className="containerSection">
      <div className="flex  items-center justify-center text-center whitespace-pre-line">
        <Header
          width="w-full"
          title={t("customerService")}
          description={t("customerServiceDesc")}
          classDescription="text-darkgray mt-8"
        />
      </div>
      <Image src={map} alt="" className="mt-16" />
      <div className="flex justify-between mt-24">
        {cardData.map((card) => (
          <IconCard
            title={card.title}
            description={card.description}
            key={card.id}
            icon={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerContact;
