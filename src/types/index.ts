import { Dispatch, SetStateAction } from "react";

export interface IData {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PaginationType  {
    postsPerPage: number;
    totalPosts: number;
    setCurrentPage: any;
}

export interface ItemsProps {
    items: IData[];
}

export interface SearchPanelProps {
    setItems: Dispatch<SetStateAction<never[]>>;
}

export interface SetSearchOptionsType {
    value: string;
    title: string;
}
