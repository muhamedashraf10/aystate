"use client";

import React from "react";
import Header from "@/components/Header";
import { genertateDiscoverData } from "@/app/_lib/helpers";
import CardDiscover from "./CardDiscover";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import { ChevronRight } from "lucide-react";

const DiscoverHome = () => {
  const { t } = useTranslation();
  const discover = genertateDiscoverData(t);
  return (
    <section className="containerSection">
      <Header
        title={t("discoverTitle")}
        description={t("discoverDescription")}
        subTitle={t("discover")}
        classContent="flex flex-col lg:flex-row justify-between"
      ></Header>
      <div className="flex flex-wrap justify-between my-24">
        {discover.map((item) => (
          <CardDiscover
            key={item?.id}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </div>
      <Link href={routes.AboutUs} aria-label={t("learn")} className="py-2 pr-1">
        <Button aria-label="explore" size={"noSize"} className="mr-5  ">
          {t("learn")}
        </Button>
      </Link>
      <Link
        href={routes.AboutUs}
        aria-label={t("contact")}
        className="py-2 px-2"
      >
        <Button
          aria-label="contact"
          size={"noSize"}
          className="p-2 text-base mr-5"
          variant={"link"}
        >
          {t("contact")}
          <ChevronRight className="ml-3" />
        </Button>
      </Link>
    </section>
  );
};

export default DiscoverHome;
