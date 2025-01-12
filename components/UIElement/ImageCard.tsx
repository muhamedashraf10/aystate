import { routes } from "@/routes";
import { TTypeArticle } from "@/types/params";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import urlJoin from "url-join";

type TImageCard = {
  image: StaticImageData;
  date: string;
  type: string;
  text: string;
  slug?: number;
  typeArticle?: TTypeArticle;
  isFlex?: boolean;
  classes?: string;
};
const Card = ({ image, text, type, date }: TImageCard) => {
  return (
    <>
      <Image
        src={image}
        height={300}
        alt={text}
        layout="intrinsic"
        className="h-[300px]"
      />
      <p className="text-xs leading-[15px] lg:text-lg text-darkgray lg:leading-6 my-[12px]">
        {date} . {type}
      </p>
      <p className="text-sm leading-[18px] lg:text-2xl font-[700] lg:leading-8">
        {text}
      </p>
    </>
  );
};

const CardFlex = ({ image, text, type, date }: TImageCard) => {
  return (
    <div className="flex items-center gap-[24px]">
      <Image
        src={image}
        alt={text}
        width={190}
        height={176}
        layout="intrinsic"
        className=""
      />
      <div className="flex flex-col  justify-center gap-[12px]">
        <p className="text-base text-darkgray leading-5">
          {date} . {type}
        </p>
        <p className="text-sm leading-[18px] lg:text-xl font-[700] lg:leading-6">
          {text}
        </p>
      </div>
    </div>
  );
};

const ImageCard = ({
  image,
  text,
  type,
  date,
  typeArticle,
  slug,
  isFlex = false,
  classes = "w-[400px]",
}: TImageCard) => {
  const urlPath = urlJoin(
    routes.Blog as any,
    typeArticle === "popular-article"
      ? routes.PopularArticles
      : routes.RecentArticles,
    routes.Detail,
    `${slug || ""}`
  );

  return (
    <Link
      role="button"
      aria-label={text}
      href={`${urlPath}`}
      className={`${classes}`}
    >
      {!isFlex ? (
        <Card image={image} type={type} date={date} text={text} />
      ) : (
        <CardFlex image={image} type={type} date={date} text={text} />
      )}
    </Link>
  );
};

export default ImageCard;
