"use client";

import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";
import { genertateFAQData, genertateWebsiteFAQData } from "@/app/_lib/helpers";
import IconCard from "../UIElement/IconCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const OurWebsite = () => {
  const { t } = useTranslation();
  const faqData = genertateWebsiteFAQData(t);
  return (
    <section className="containerSection mb-20">
      <div className="flex  items-center justify-center text-center whitespace-pre-line">
        <Header
          width="w-full"
          title={t("ourWebsite")}
          description={t("ourWebsiteDesc")}
          classDescription="text-darkgray mt-8"
        />
      </div>
      <Accordion type="single" collapsible className="mt-24">
        {faqData?.map((faq) => (
          <AccordionItem value={faq?.value} key={faq?.id} className="mb-4">
            <AccordionTrigger>{faq?.title}</AccordionTrigger>
            <AccordionContent>
              <div>
                <p>{faq?.description}</p>
                <Button
                  size={"noSize"}
                  variant={"link"}
                  className="text-lg font-[700] text-lightgreen mt-4"
                >
                  {t("readMore")}
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center items-center mt-16">
        <Button size={"xl"}>{t("giveQuote")}</Button>
      </div>
    </section>
  );
};

export default OurWebsite;
