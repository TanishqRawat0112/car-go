"use client"
import { CustombuttonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustombuttonProps) => {
  return (
    <button 
        disabled={false}
        type={btnType ||"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 `}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton