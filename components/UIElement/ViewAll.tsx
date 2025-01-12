import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import urlJoin from "url-join";
import { routes } from "@/routes";

type TViewAll = {
  title: string;
  text: string;
  isButton?: boolean;
  isPopular?: boolean;
};
const ViewAll = ({ text, title, isPopular, isButton = true }: TViewAll) => {
  const urlPath = urlJoin(
    routes.Blog as any,
    isPopular ? routes.PopularArticles : routes.RecentArticles
  );
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-[32px] font-[600] leading-[41px] mb-2">{title}</h3>
        <p className="text-lg leading-8 text-darkgray">{text}</p>
      </div>
      {isButton && (
        <Link href={{ pathname: urlPath, query: { page: "1" } }}>
          <Button
            className="w-[107px] h-[47px] rounded-[12px]"
            variant={"outline"}
          >
            View All
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ViewAll;
