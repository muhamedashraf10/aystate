import Header from "@/components/Header";
import React from "react";
import { BenfitCard } from "./BenfitCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Google from "@/assets/svg/Google.svg";
import Amazon from "@/assets/svg/Amazon.svg";
import Netflix from "@/assets/svg/Netflix.svg";
import Facebook from "@/assets/svg/Facebook.svg";
import Youtube from "@/assets/svg/YouTube.svg";

export default function Achievement() {
  return (
    <section className="containerSection  whitespace-pre-line  bg-[#16112F] ">
      <Header
        subTitle="Achievement"
        title="Our award this year"
        isBadge={true}
        classBadge="mb-[60px]"
        widthBadge={"w-[145px] h-[48px] !bg-white/10 "}
        description="We’re happy to receive this award so that it motivates us to grow and provide the best service for you."
        classContent="flex justify-between items-end text-[#F4F2FF]"
        classDescription="text-[#C7C1EA]"
        subTitleColor="text-[#F4F2FF]"
      />
      <div className="flex justify-between items-center mb-[30px] mt-[60px]">
        <BenfitCard />
        <BenfitCard />
        <BenfitCard />
      </div>
      <Link href={""} className="flex items-center justify-center ">
        <Button
          size={"xl"}
          aria-label="View All Project"
          className="text-white border-white rounded-[40px]"
          variant={"outline"}
        >
          View All Project
          <ArrowUpRight className="ml-3 text-white" />
        </Button>
      </Link>
      <div className="w-full border-t-2 border-white/10 text-center mt-[60px] py-[60px]">
        <p className="text-lg leading-[28px] text-[#C7C1EA] mb-[24px]">
          We’ve built with the most growth company around the world
        </p>
        <div className="flex flex-wrap justify-between items-center">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Netflix} alt="Netflix" />
          <Image src={Amazon} alt="Amazon" />
          <Image src={Youtube} alt="Youtube" />
          <Image src={Google} alt="Google" />
        </div>
      </div>
    </section>
  );
}
