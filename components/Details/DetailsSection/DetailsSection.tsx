"use client";
import React from "react";
import StaticText from "../StaticText/StaticText";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import BlogImage from "@/assets/blogDetails.png";
import Link from "next/link";

const DetailsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[946px]">
      <p className="text-lg leading-[28px] text-darkgray whitespace-pre-line">
        Imagine one day living in a luxurious, spacious house with everything
        you could possibly want in life. Now contrast that with red and blue
        lights filling your home, with officers yelling and sirens blaring.
        Then, envision a SWAT team ripping you away from your parents. Although
        it seems far-fetched, this actually happened. 
      </p>
      <p className="text-lg leading-[28px] text-darkgray mt-20 mb-[21px] whitespace-pre-line">
        By all accounts, John was living a charmed “trust fund” life, but that
        was quickly all taken away from him. At age 10, that left John Mansor a
        ward of the state—orphaned and alone, with only his brother, David,
        alongside him. He’s spent the last 15-plus years climbing back to the
        top.
      </p>
      <h3 className="text-[32px] font-[700] leading-10 mb-[24px] ">
        A Way Out: Focusing on What Can Be Controlled
      </h3>
      <p className="text-lg leading-[28px] text-darkgray mb-[21px] whitespace-pre-line">
        Living as a ward of the state, life was a real battle of survival for
        John as a child. As he entered middle school, an opportunity for a
        change of scenery changed his perspective on life. He was granted a
        scholarship to a sleepaway camp nestled in the Adirondack Mountains
        called the Raquette Lake Boys Camp. Soon after, John was taken in and
        adopted.
      </p>
      <StaticText
        title={t("preparationMeets")}
        text={t("preparationMeetsDesc")}
      />
      <StaticText title={t("luckOrFate")} text={t("luckOrFateDesc")} />
      <StaticText
        title={t("activeListening")}
        text={t("activeListeningDesc")}
      />
      <Image src={BlogImage} alt="" />
      <h3 className="text-[32px] font-[700] leading-10 mb-[24px] mt-[50px]">
        From $0 to $40 Million in Assets
      </h3>
      <p className="text-lg leading-[28px] text-darkgray mb-[21px] whitespace-pre-line">
        Taking down this eight-unit property marked a shift from quick, active
        income to a more strategic approach focused on creating sustainable
        wealth. With a keen eye for acquisitions and a knack for sourcing
        opportunities, John entered real estate with a commitment to invest back
        into the business. 
      </p>
      <p className="text-lg leading-[28px] text-darkgray mt-20 mb-[42px] whitespace-pre-line">
        The journey was one of bootstrapping, where each step forward was a
        lesson in sourcing, acquiring, and operating the acquired assets. This
        quickly led to rapid growth over a two-year period, where they would
        purchase RV parks and more
        <Link
          className="underline underline-offset-4"
          href={
            "https://www.biggerpockets.com/blog/finding-multifamily-properties"
          }
          target="_blank"
        >
           multifamily
        </Link>
         properties, such as a 40-unit townhouse community on Cape Cod.
      </p>
    </div>
  );
};

export default DetailsSection;
