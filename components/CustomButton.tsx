"use client"

import { CustomButtonPropsInterface } from "@/types"
import Image from "next/image"


const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonPropsInterface) => {
  return (
    <button 
    disabled={false} 
    type={btnType}
    className={`custom-btn ${containerStyles}}`}
    onClick={handleClick}>
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton