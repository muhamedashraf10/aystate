export type TParams = {
  params: {
    locale: string;
    typeArticle?: TTypeArticle;
    slug?: string;
  };
};

export type TTypeArticle = "popular-article" | "recent-article";
