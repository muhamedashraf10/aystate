import initTranslations from "@/app/i18n";
import Header from "@/components/Header";
import React, { FC } from "react";
import { Badge } from "@/components/ui/badge";
import CardDetails from "@/components/Properties/CardDetails";
import Image from "next/image";
import portfolio from "@/assets/portfolio.png";
import layout from "@/assets/layout.png";
import { Button } from "@/components/ui/button";
import ContentDetails from "@/components/Properties/ContentDetails";
import LinearGradientImage from "@/components/UIElement/LinearGradientImage";
import rightArrow from "@/assets/svg/chevron-right.svg";
import { TParams } from "@/types/params";
import { i18nNamespaces } from "@/app/_lib/common";

const Properties: FC<TParams> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <section>
      <div className="flex justify-between containerSection">
        <Header
          title={t("luxuryBeach")}
          description={t("luxuryBeachDesc")}
          width={"w-[768px]"}
          classDescription="mt-6 mb-3"
        >
          <div className="flex">
            <Badge variant="secondary">{t("beachfront")}</Badge>
            <Badge className="mx-4" variant="secondary">
              {t("modern")}
            </Badge>
            <Badge variant="secondary">{t("spacious")}</Badge>
          </div>
        </Header>
        <CardDetails t={t} />
      </div>
      <div className="containerSection">
        <Image src={portfolio} alt="" />
      </div>
      <ContentDetails t={t} />
      <section className=" flex justify-between containerSection">
        <div className="flex items-center">
          <Header
            title={t("experience")}
            description={t("experienceDesc")}
            subTitle={t("luxury")}
            classDescription="pt-[40px] pb-[50px]"
          >
            <div className="mt-8">
              <Button size={"noSize"} className="mr-5">
                {t("learn")}
              </Button>
              <Button variant={"link"}>
                {t("contact")}
                <Image src={rightArrow} alt="" />
              </Button>
            </div>
          </Header>
        </div>
        <LinearGradientImage classes="w-[605px] h-[605px] rounded-xl">
          <Image src={layout} alt="" className="w-[605px] h-[605px]" />
        </LinearGradientImage>
      </section>
    </section>
  );
};

export default Properties;
