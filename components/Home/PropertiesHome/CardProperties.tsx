"use client";

import Image from "next/image";
import React from "react";
import image from "@/assets/Placeholder Image (2).png";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const CardProperties = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[300px] mb-20">
      <Image src={image} alt="" />
      <div className="flex flex-col item-center text-center mt-3">
        <p className="text-lg font-[600]">{t("luxuryVilla")}</p>
        <p className="text-sm">{t("oceanfront")}</p>
        <p className="text-xl font-[600] my-3">$15000</p>
        <Link href={""}>
          <Button className="text-base font-[400] w-full" variant={"outline"}>
            {t("viewDetails")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardProperties;
