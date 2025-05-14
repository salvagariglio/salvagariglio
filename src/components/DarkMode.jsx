import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md"

const DarkMode = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark"
        }
        return "light"
    })

    useEffect(() => {
        if (theme == "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <button className=' bg-transparent shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300 z-10 p-2 rounded-full fixed md:top-6 md:right-6 top-4 right-4 text-neutral-900 dark:text-white dark:bg-purple-950'
                onClick={handleChangeTheme}>
                <MdOutlineDarkMode className='md:h-7 md:w-7 h-6 w-6 ease-in duration-300' />
            </button>
        </div>
    )
}

export default DarkMode
