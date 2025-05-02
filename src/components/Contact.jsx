import React from 'react'
import { GrContact } from 'react-icons/gr'

const Contact = () => {
    return (
        <div className='flex dark:text-gray-100'>
            <div className='hidden md:block m-auto text-[#001b5e] dark:text-gray-100'>
                <GrContact size={250} />
            </div>
            <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 w-full md:w-1/2'>
                <h1 className='mb-12 text-4xl font-semibold text-center text-[#001b5e] dark:text-white'>
                    Contact Me
                </h1>
                <form action='https://getform.io/f/allymwna' method='POST' encType='multipart/forms-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <input className=' rounded-lg p-3 flex text-[#001b5e] border border-[#001b5e] placeholder-[#001b5e] dark:placeholder-purple-900 dark:border-0  dark:text-purple-900' type='text' name="name" placeholder='Name' required />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <input className=' rounded-lg p-3 flex text-[#001b5e] border border-[#001b5e] placeholder-[#001b5e] dark:placeholder-purple-900 dark:border-0  dark:text-purple-900' type='text' name="phone" placeholder='Phone' required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <input className=' rounded-lg p-3 flex text-[#001b5e] border border-[#001b5e] placeholder-[#001b5e] dark:placeholder-purple-900 dark:border-0  dark:text-purple-900' type='email' name="email" placeholder='Email' required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <input className=' rounded-lg p-3 flex text-[#001b5e] border border-[#001b5e] placeholder-[#001b5e] dark:placeholder-purple-900 dark:border-0  dark:text-purple-900' type='text' name="subject" placeholder='Subject' required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <textarea className=' rounded-lg p-3 flex text-[#001b5e] border border-[#001b5e] placeholder-[#001b5e] dark:placeholder-purple-900 min-h-20 dark:border-0  dark:text-purple-900' rows='10' name="message" placeholder='Message' required></textarea>
                    </div>
                    <button className='bg-[#001b5e] border-0 text-gray-100 mt-4 w-full p-4 rounded-3xl dark:hover:bg-purple-300 dark:bg-gray-50 dark:text-purple-900 '>
                        Send Message
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Contact 