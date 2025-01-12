import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Search from "@/assets/svg/Search Box.svg";
import filter from "@/assets/svg/filterBox.svg";
import sort from "@/assets/svg/sortbox.svg";
import Image from "next/image";

export default async function Listings() {
  return (
    <section className="containerSection">
      <div className="flex items-center gap-[8px] ">
        <p className="text-green">Home</p>
        <ChevronRight width={18} className="text-gray" />
        <p className="text-green">Real Estate</p>
        <ChevronRight width={18} className="text-gray" />
        <p className="">Villa</p>
      </div>
      <div>
        <div className="mt-[24px]">
          <p className="font-[600] leading-[22px] mb-[4px]">
            Showing listings properties for “Villa”
          </p>
          <p className="text-textGray text-xs leading-[19px]">
            Showing 1 - 60 Properties
          </p>
        </div>
        <div className="flex items-center gap-[28px]">
          <Button
            size={"noSize"}
            variant={"outline"}
            className="text-black border-lightgray !h-[32px] text-xs font-[500] leading-5 !rounded-[8px] "
          >
            Sort By Relevant Product
            <ChevronDown size={18} className="mx-2" />
          </Button>
          <div className="flex items-center gap-[8px]">
            <Image src={Search} alt="filter image" />
            <Image src={filter} alt="filter image" />
            <Image src={sort} alt="filter image" />
          </div>
        </div>
      </div>
    </section>
  );
}
