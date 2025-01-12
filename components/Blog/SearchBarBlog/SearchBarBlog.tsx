"use client";
import Header from "@/components/Header";
import SearchBar from "@/components/UIElement/SearchBar";
import React from "react";
import { useTranslation } from "react-i18next";

const SearchBarBlog = () => {
  const { t } = useTranslation();

  return (
    <section className="containerSection">
      <div className="flex flex-col items-center justify-center text-center">
        <Header title={t("ourBlog")} width="w-full">
          <div className="mt-16">
            <SearchBar placeholder="Search article name" />
          </div>
          <div className="flex justify-center items-center text-center gap-[29px] mt-[24px]">
            <p className="font-[600] leading-5 text-darkgray">Suggested:</p>
            <div className="flex items-center gap-[24px]">
              <p className="font-[600] leading-5 text-blue">Success Stories</p>
              <p className="font-[600] leading-5 text-blue">
                Invest Strategies
              </p>
              <p className="font-[600] leading-5 text-blue">Tips</p>
              <p className="font-[600] leading-5 text-blue">Success Story</p>
            </div>
          </div>
        </Header>
      </div>
    </section>
  );
};

export default SearchBarBlog;
