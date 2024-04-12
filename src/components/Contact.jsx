import React from 'react'
import { GrContact } from 'react-icons/gr'

const Contact = ()=> {
    return (
        <div className='flex dark:text-gray-100'>
            <div className='hidden md:block m-auto text-[#001b5e] dark:text-gray-100'>
                <GrContact size={250}/>
            </div>
            <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 w-full md:w-1/2'>
                <h1 className='py-4 text-4xl font-sans text-center text-[#001b5e] dark:text-gray-100'>
                    Contact Me
                </h1>
                <form action='https://getform.io/f/pamqklda' method='POST' encType='multipart/forms-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <input className=' rounded-lg p-3 flex border-gray-300 placeholder-[#001b5e] dark:placeholder-purple-900' type='text' placeholder='Name'/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <input className=' rounded-lg p-3 flex border-gray-300 placeholder-[#001b5e] dark:placeholder-purple-900' type='text' placeholder='Phone'/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <input className=' rounded-lg p-3 flex border-gray-300 placeholder-[#001b5e] dark:placeholder-purple-900' type='email' placeholder='Email' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <input className=' rounded-lg p-3 flex border-gray-300 placeholder-[#001b5e] dark:placeholder-purple-900' type='text' placeholder='Subject' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <textarea className=' rounded-lg p-3 flex border-gray-300 placeholder-[#001b5e] dark:placeholder-purple-900 min-h-20' rows='10' placeholder='Message'></textarea>
                    </div>
                    <button className='bg-[#001b5e] border-2 dark:bg-gray-50 text-gray-100 dark:text-purple-900 mt-4 w-full p-4 rounded-lg dark:hover:bg-purple-300'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Contact 