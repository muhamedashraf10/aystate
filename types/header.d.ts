import { PropsWithChildren } from "react";

export type THeader = PropsWithChildren & {
  title?: string;
  description?: string;
  subTitle?: string;
  header?: string;
  classDescription?: string;
  classContent?: string;
  classHeader?: string;
  width?: string;
  subTitleColor?: string;
  subDescription?: string;
  isBadge?: boolean;
  widthBadge?: string;
  classBadge?: string;
};
