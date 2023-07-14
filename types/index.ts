import { MouseEventHandler } from "react";

export interface CustomButtonPropsInterface {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}