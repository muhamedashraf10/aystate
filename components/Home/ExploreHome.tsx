"use client";

import Image from "next/image";
import React from "react";
import explore from "@/assets/explore.png";
import Header from "../Header";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { routes } from "@/routes";

const ExploreHome = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-lightrose flex flex-col lg:flex-row justify-between containerSection">
      <div className="flex items-center">
        <Header
          header={t("header")}
          description={t("descriptionHeader")}
          classDescription="pt-[40px] pb-[50px]"
        >
          <div className="my-8">
            <Link
              href={routes.Blog}
              aria-label={t("explore")}
              className="py-2 pr-4"
            >
              <Button
                aria-label="Explore the platform"
                size={"noSize"}
                className="mr-5  "
              >
                {t("explore")}
              </Button>
            </Link>
            <Link
              href={routes.AboutUs}
              aria-label={t("learn")}
              className="py-2 px-4"
            >
              <Button
                aria-label="Learn more about us"
                size={"noSize"}
                className="p-2 mr-5"
                variant={"outline"}
              >
                {t("learn")}
              </Button>
            </Link>
          </div>
        </Header>
      </div>
      <Image
        src={explore}
        alt="A visual representation of exploration"
        className="w-[600px] h-[500px]"
        width={600}
        height={500}
        layout="intrinsic"
      />
    </section>
  );
};

export default ExploreHome;
