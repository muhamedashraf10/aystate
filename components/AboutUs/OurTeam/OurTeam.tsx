import Header from "@/components/Header";
import React from "react";
import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {
  return (
    <div className="containerSection mb-[120px] mt-[40px]">
      <div className="flex items-center justify-center">
        <Header
          subTitle="Our Team"
          isBadge={true}
          title="Meet Our Creative Team"
          description="Magna metus, adipiscing dictumst magna fringilla metus fermentum tristique. Enim vitae purus lectus augue maecenas"
          classContent="text-center"
          classDescription="mt-[16px] text-textGray "
          width="w-[1200px]"
          widthBadge="w-[121px]"
          classBadge="flex items-center justify-center"
        />
      </div>
      <div className="flex flex-wrap mt-[120px] gap-x-[32px] gap-y-[64px] ">
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
      </div>
    </div>
  );
};

export default OurTeam;
