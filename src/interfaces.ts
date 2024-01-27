import { MouseEvent } from "react";

export interface IModal {
    item: any,
    closeModal: () => void
}
export interface INewsItem {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: string,
        name: string,
    },
    title: string,
    url: string,
    image: string,
}
export type ThemeProp = {
    onClick:(e:MouseEvent<SVGElement>) => void;
  }