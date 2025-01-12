import { TLanguage } from "@/types/language";
import imageDream from "@/assets/dream.png";
import imageConnect from "@/assets/connect.png";
import imageDeal from "@/assets/deal.png";
import user from "@/assets/svg/user.svg";
import sms from "@/assets/svg/sms.svg";
import teacher from "@/assets/svg/teacher.svg";
import account from "@/assets/svg/account.svg";
import support from "@/assets/svg/supportEmail.svg";
import global from "@/assets/svg/global.svg";
import home from "@/assets/Rectangle 9620.png";
import van from "@/assets/van.png";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";

export const genertateDiscoverData = (t: TLanguage) => {
  return [
    {
      id: 1,
      title: t("buyAndSell"),
      description: t("buyAndSellDesc"),
    },
    {
      id: 2,
      title: t("valuationServices"),
      description: t("valuationServicesDesc"),
    },
    {
      id: 3,
      title: t("realEstate"),
      description: t("realEstateDesc"),
    },
  ];
};

export const genertateSimplifyData = (t: TLanguage) => {
  return [
    {
      id: 1,
      title: t("findDream"),
      description: t("findDreamDesc"),
      image: imageDream,
    },
    {
      id: 2,
      title: t("connect"),
      description: t("connectDesc"),
      image: imageConnect,
    },
    {
      id: 3,
      title: t("closeDeal"),
      description: t("closeDealDesc"),
      image: imageDeal,
    },
  ];
};

export const genertateInnovativeData = (t: TLanguage) => {
  return [
    {
      id: 1,
      title: t("successRate"),
      percentage: t("thirtyPercentage"),
    },
    {
      id: 2,
      title: t("propertiesListed"),
      percentage: t("thirtyPercentage"),
    },
    {
      id: 3,
      title: t("clientSatisfaction"),
      percentage: t("thirtyPercentage"),
    },
  ];
};

export const genertateFAQData = (t: TLanguage) => {
  const faqItem1 = [
    {
      id: 1,
      title: t("getJob"),
      description: t("faqDesc"),
      value: "item-1",
    },
    {
      id: 2,
      title: t("getCv"),
      description: t("faqDesc"),
      value: "item-2",
    },
    {
      id: 3,
      title: t("needApply"),
      description: t("faqDesc"),
      value: "item-3",
    },
  ];
  const faqItem2 = [
    {
      id: 4,
      title: t("reschedule"),
      description: t("faqDesc"),
      value: "item-4",
    },
    {
      id: 5,
      title: t("applyJob"),
      description: t("faqDesc"),
      value: "item-5",
    },
  ];

  return { faqItem1, faqItem2 };
};

export const genertateData = (t: TLanguage) => {
  return [
    {
      id: 1,
      title: t("myAccount"),
      description: t("myAccountDesc"),
      image: user,
    },
    {
      id: 2,
      title: t("emailCampaigns"),
      description: t("emailCampaignsDesc"),
      image: sms,
    },
    {
      id: 3,
      title: t("jobifyAcademy"),
      description: t("jobifyAcademyDesc"),
      image: teacher,
    },
  ];
};

export const genertateQuestionFaqsData = (t: TLanguage) => {
  return [
    {
      id: 1,
      title: t("numberPhone"),
      description: t("numberPhoneDesc"),
      image: account,
    },
    {
      id: 2,
      title: t("supportEmail"),
      description: t("supportEmailDesc"),
      image: support,
    },
    {
      id: 3,
      title: t("numberPhoneDesc"),
      description: t("numberPhoneDescDesc"),
      image: global,
    },
  ];
};

export const genertateWebsiteFAQData = (t: TLanguage) => {
  return [
    {
      id: 1,
      title: t("propertiesAvailable"),
      description: t("ourWebsiteFaqDesc"),
      value: "item-1",
    },
    {
      id: 2,
      title: t("scheduleViewing"),
      description: t("ourWebsiteFaqDesc"),
      value: "item-2",
    },
    {
      id: 3,
      title: t("salesWebsite"),
      description: t("ourWebsiteFaqDesc"),
      value: "item-3",
    },

    {
      id: 4,
      title: t("buyHome"),
      description: t("ourWebsiteFaqDesc"),
      value: "item-4",
    },
    {
      id: 5,
      title: t("determineValue"),
      description: t("ourWebsiteFaqDesc"),
      value: "item-5",
    },
  ];
};

export const genertateArticleData = (t: TLanguage) => {
  return [
    {
      id: 1,
      title: t("tipsTitle"),
      type: t("tips"),
      date: t("4 February 2024"),
      image: home,
    },
    {
      id: 2,
      title: t("renters"),
      type: t("successStories"),
      date: t("28 January 2024"),
      image: van,
    },
    {
      id: 3,
      title: t("everyMajor"),
      type: t("invest"),
      date: t("21 January 2024"),
      image: image1,
    },
    {
      id: 4,
      title: t("redfin"),
      type: t("successStories"),
      date: t("15 January 2024"),
      image: image2,
    },
    {
      id: 5,
      title: t("lowCost"),
      type: t("investStrategies"),
      date: t("6 January 2024"),
      image: image3,
    },
    {
      id: 6,
      title: t("unlocking"),
      type: t("investStrategies"),
      date: t("31 Desember 2023"),
      image: image4,
    },
    {
      id: 7,
      title: t("strategic"),
      type: t("tips"),
      date: t("24 Desember 2023"),
      image: image5,
    },
    {
      id: 8,
      title: t("timePrepare"),
      type: t("successStories"),
      date: t("17 Desember 2023"),
      image: image6,
    },
    {
      id: 9,
      title: t("smartHomes"),
      type: t("tips"),
      date: t("10 Desember 2023"),
      image: image7,
    },
  ];
};
