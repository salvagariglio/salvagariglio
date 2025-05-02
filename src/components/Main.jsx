import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import background from '../assets/background.jpg'
import { FaDownload } from "react-icons/fa";


const Main = () => {
    return (
        <div className='' id='main'>
            <img
                className='w-full h-screen object-cover object-[70%]'
                src={background}
            />
            <div className='flex justify-center items-center w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full font-sans w-full flex flex-col justify-center  items-center'>
                    <h1 className=' sm:text-5xl text-4xl text-gray-800 dark:text-purple-950'> Salvador Gariglio </h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-purple-900'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Full-Stack Developer',
                                2000,
                                'Engineering Student',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-center items-center pt-6 max-w-[200px] gap-5 w-full dark:text-purple-950'>
                        <a
                            href="/CV-SalvadorGariglio.pdf"
                            download
                            className='flex justify-center text-gray-100 items-center gap-2 bg-gray-800 dark:bg-purple-900 rounded-2xl px-5 py-1 hover:scale-105 ease-in duration-300'
                        >
                            <FaDownload size={20} />
                            Download
                        </a>
                        <button className=' bg-gray-800 dark:bg-purple-900 rounded-full p-1 hover:scale-110 ease-in duration-300  '>
                            <a href="https://www.linkedin.com/in/salvadorgariglio/"
                                className='flex justify-center items-center gap-2 text-gray-100 '>
                                <FaLinkedin className='cursor-pointer' size={20} />
                            </a>
                        </button>
                        <button className=' bg-gray-800 dark:bg-purple-900 rounded-full p-1 hover:scale-110 ease-in duration-300   '>
                            <a href="https://www.instagram.com/salvagariglio/"
                                className='flex justify-center items-center gap-2 text-gray-100'>
                                <FaInstagram className='cursor-pointer' size={20} />
                            </a>
                        </button>
                        <button className=' bg-gray-800 dark:bg-purple-900 rounded-full p-1 hover:scale-110 ease-in duration-300 '>
                            <a href="https://github.com/salvagariglio"
                                className='flex justify-center items-center gap-2 text-gray-100'>
                                <FaGithub className='cursor-pointer' size={20} />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main