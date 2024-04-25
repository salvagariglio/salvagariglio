import React from 'react'

const ProjectItem= ({img, title, tools}) => {
    return (
        <div className='items-center justify-center w-auto '>
            <div className=' relative flex items-center justify-center h-auto w-auto shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
                <img className='rounded-xl group-hover:opacity-10'src={img} alt="projectItemImg"></img>
                <div className=' hidden group-hover:block absolute'>
                    <div>
                        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                            {title}
                        </h3>
                        <p className='p-2 text-white text-center'> 
                            {tools}
                        </p>
                        <div className='gap-4 items-center justify-center flex'>
                            <button className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'> 
                                <a>
                                    Web Page
                                </a> 
                            </button>
                            <button className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
                                <a> Code </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectItem