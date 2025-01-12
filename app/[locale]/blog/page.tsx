import GalaryBlog from "@/components/Blog/GalaryBlog/GalaryBlog";
import PopularArticle from "@/components/Blog/PopularArticle/PopularArticle";
import RelatedArticle from "@/components/Blog/RelatedArticle/RelatedArticle";
import SearchBarBlog from "@/components/Blog/SearchBarBlog/SearchBarBlog";
import React from "react";

const Blog = async () => {
  return (
    <>
      <SearchBarBlog />
      <GalaryBlog />
      <PopularArticle />
      <RelatedArticle />
    </>
  );
};

export default Blog;
