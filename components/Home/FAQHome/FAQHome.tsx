"use client";

import { genertateFAQData } from "@/app/_lib/helpers";
import Header from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";

const FAQHome = () => {
  const { t } = useTranslation();
  const { faqItem1, faqItem2 } = genertateFAQData(t);
  return (
    <section className="containerSection flex flex-col items-center justify-center">
      <Header
        subTitle={t("faq")}
        title={t("faqTitle")}
        description={t("anyQuestion")}
        subTitleColor="text-orange"
        width="w-[100%]"
        classContent="text-center"
        classDescription="text-darkgray my-8"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-12">
        <Accordion type="multiple">
          {faqItem1?.map((faq) => (
            <AccordionItem value={faq?.value} key={faq?.id} className="mb-4">
              <AccordionTrigger>{faq?.title}</AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>{faq?.description}</p>
                  <Button
                    size={"noSize"}
                    variant={"link"}
                    className="text-lg font-[700] text-blue mt-4"
                  >
                    {t("readMore")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible>
          {faqItem2?.map((faq) => (
            <AccordionItem value={faq?.value} key={faq?.id} className="mb-4">
              <AccordionTrigger>{faq?.title}</AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>{faq?.description}</p>
                  <Button
                    size={"noSize"}
                    variant={"link"}
                    className="text-lg font-[700] text-blue mt-4"
                  >
                    {t("readMore")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Button size={"xl"}>{t("giveQuote")}</Button>
    </section>
  );
};

export default FAQHome;
