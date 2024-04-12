import React, { useEffect } from 'react'
import {useState} from 'react'
import DarkModeIcon from '../assets/luna.png'
import { MdOutlineDarkMode } from "react-icons/md"

const DarkMode = () => {
    const [theme, setTheme] = useState(() => {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            return "dark"
        }
        return "light"
    })

    useEffect(()=>{
        if (theme=="dark"){
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    },[theme])

    const handleChangeTheme= () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <button className=' bg-transparent shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 z-10 p-2 rounded-full fixed top-4 left-4 text-neutral-900 dark:text-white dark:bg-purple-950' 
                    onClick={handleChangeTheme}>
                <MdOutlineDarkMode />
            </button>
        </div>
    )
}

export default DarkMode
