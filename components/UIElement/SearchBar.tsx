import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import serchIcon from "@/assets/svg/search.svg";

type TSearchBar = {
  placeholder?: string;
};
const SearchBar = ({ placeholder = "Search Question" }: TSearchBar) => {
  return (
    <div className="w-[800px] relative">
      <Image src={serchIcon} alt="" className="absolute top-5 left-4" />
      <Input
        className="bg-white border-transparent shadow h-16 pl-12 pr-44"
        placeholder={placeholder}
      />
      <Button
        size={"noSize"}
        variant={"search"}
        className="absolute top-1 right-1"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
