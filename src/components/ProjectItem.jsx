import React from 'react'

const ProjectItem = ({ img, title, tools, linkCode, linkPage }) => {
    return (
        <div className='items-center justify-center w-auto '>
            <div className=' relative flex items-center justify-center h-auto w-auto hover:shadow-xl shadow-none group hover:shadow-gray-400 rounded-2xl hover:bg-gradient-to-r from-gray-200 to-[#001b5e] dark:hover:bg-gradient-to-r dark:from-gray-200 dark:to-[#9131C8] transition-all duration-700 ease-in-out'>
                <img className='rounded-2xl group-hover:opacity-10' src={img} alt="projectItemImg"></img>
                <div className=' hidden group-hover:block absolute'>
                    <div>
                        <h3 className='py-2 text-2xl font-bold text-white tracking-wider text-center'>
                            {title}
                        </h3>
                        <p className='py-2 text-white text-center'>
                            {tools}
                        </p>
                        <div className=' py-2 gap-4 items-center justify-center flex'>
                            <button className='text-center p-3 rounded-lg bg-white text-[#001b5e] dark:text-[#9131C8] font-bold cursor-pointer text-lg'>
                                <a href={linkPage} target="_blank" rel="noopener noreferrer">
                                    Web Page
                                </a>
                            </button>
                            <button className='text-center p-3 rounded-lg bg-white text-[#001b5e] dark:text-[#9131C8] font-bold cursor-pointer text-lg'>
                                <a href={linkCode} target="_blank" rel="noopener noreferrer"> Code </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectItem