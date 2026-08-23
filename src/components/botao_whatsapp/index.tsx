"use client"

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BotaoWhatsapp(){
    const[hover, setHover] = useState(false)
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flex-row fixed bottom-4 right-4 h-16 w-16 items-center justify-end text-white hover:cursor-pointer rounded-full bg-green-500"
        >
            {hover && 
            <div className="flex items-center h-full">
                <div className="flex py-4 border-2 border-green-500 bg-white rounded-l-full text-green-500 px-4 h-full items-center text-[125%]">
                    (32)123456789
                </div>
                <FaWhatsapp className="flex px-4 py-4 bg-green-500 w-16 h-16 rounded-r-full" />
            </div>
            }
            {!hover && 
                <FaWhatsapp className="flex px-4 py-4 w-16 h-16"/>
            }
            
        </div>
    )
}