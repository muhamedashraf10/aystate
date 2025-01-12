import React from "react";
import { Playball, Plus_Jakarta_Sans } from "next/font/google";
import { TLanguage } from "@/types/language";
import Link from "next/link";
import { routes } from "@/routes";

const playball = Playball({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const Footer = ({ t }: TLanguage) => {
  return (
    <footer className="pt-[60px] px-[100px] pb-6 bg-darkblack">
      <div className="flex justify-between text-white">
        <div className="w-[260px]">
          <p className={`${playball.className} text-3xl leading-[32px] mb-10`}>
            {t("projectName")}
          </p>
          <ul>
            <li className="text-darkgray text-lg font-[500] leading-[32px] mb-5">
              {t("emailPhone")}
            </li>
            <li className="text-darkgray text-lg font-[500] leading-[32px]">
              {t("addressCompany")}
            </li>
          </ul>
        </div>
        <div className="w-[800px] grid grid-cols-4">
          <div className="w-[260px]">
            <p
              className={`${openSans.className} text-lg font-[600] leading-[32px] mb-6`}
            >
              {t("pages")}
            </p>
            <ul>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("listings")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={routes.AboutUs}
                >
                  {t("about")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={routes.Blog}
                >
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[260px]">
            <p
              className={`${openSans.className} text-lg font-[600] leading-[32px] mb-6`}
            >
              {t("support")}
            </p>
            <ul>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={routes.DetailProperties}
                >
                  {t("properties")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={routes.Faqs}
                >
                  {t("faq")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={routes.Blog}
                >
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[260px]">
            <p
              className={`${openSans.className} text-lg font-[600] leading-[32px] mb-6`}
            >
              {t("webflowStuff")}
            </p>
            <ul>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("styleGuide")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("changelog")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("licensing")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("instructions")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[260px]">
            <p
              className={`${openSans.className} text-lg font-[600] leading-[32px] mb-6`}
            >
              {t("platform")}
            </p>
            <ul>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("officialWebsite")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("playStore")}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-darkgray text-lg font-[500] leading-[32px] py-2 px-4"
                  href={""}
                >
                  {t("appStore")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center text-white font-[400] leading-[28px] mt-10">
        <p>{t("copyRight")}</p>
      </div>
    </footer>
  );
};

export default Footer;
