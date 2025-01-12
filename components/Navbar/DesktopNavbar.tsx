"use client";
import Link from "next/link";
import { Playball } from "next/font/google";
import { Button } from "../../components/ui/button";
import { routes } from "@/routes";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const openSans = Playball({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const DesktopNavbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  return (
    <nav
      className={`flex ${
        pathname === routes.Home ? "bg-lightrose" : "bg-white"
      } bg-lightrose items-center h-24 justify-between px-20 `}
    >
      <Link
        href={routes.Home}
        aria-label="logo"
        className={`${openSans.className} text-4xl`}
      >
        AyEstate
      </Link>
      <div className="flex items-center">
        <Link
          aria-label="home"
          className={`${
            isActive(routes.Home)
              ? "text-lightgreen underline underline-offset-4"
              : "text-gray"
          } flex mx-8 text-lg`}
          href={routes.Home}
        >
          {t("home")}
        </Link>
        {/* <Link
          aria-label="listings"
          className={`${
            isActive(routes.Listings)
              ? "text-lightgreen underline underline-offset-4"
              : "text-gray"
          } flex mx-8 text-lg`}
          href={routes.Home}
        >
          {t("listings")}
        </Link> */}
        <p
          aria-label="listings"
          role="button"
          className={`text-gray flex mx-8 text-lg`}
          aria-disabled={true}
        >
          {t("listings")}
        </p>
        <p
          aria-label="company"
          role="button"
          className={`text-gray flex mx-8 text-lg`}
          aria-disabled={true}
        >
          {t("company")}
        </p>
        <Link
          aria-label="blog"
          className={`${
            isActive(routes.Blog)
              ? "text-lightgreen underline underline-offset-4"
              : "text-gray"
          } flex mx-8 text-lg`}
          href={routes.Blog}
        >
          {t("blog")}
        </Link>
        <Link
          aria-label="about"
          className={`${
            isActive(routes.AboutUs)
              ? "text-lightgreen underline underline-offset-4"
              : "text-gray"
          } flex mx-8 text-lg`}
          href={routes.AboutUs}
        >
          {t("about")}
        </Link>
      </div>
      <Link aria-label="contact Us" href={routes.ContactUs}>
        <Button aria-label="contact Us" size={"noSize"}>
          {t("contactUs")}
        </Button>
      </Link>
    </nav>
  );
};
