import { MouseEventHandler } from "react";

export interface CustomButtonPropsInterface {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerInterfaceProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
    city_mpg: number;
    class: string;
    combined_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    year: number;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
}