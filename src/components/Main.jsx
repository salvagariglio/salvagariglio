import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import background from '../assets/background.jpg'

const Main = () => {
    return (
        <div id='main'>
            <img 
                className='w-full h-screen object-cover object-left ' 
                src={background} ></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full font-sans w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className=' sm:text-5xl text-4xl text-gray-800 dark:text-purple-950'> Salvador Gariglio </h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-purple-900'> 
                        I'm a 
                        <TypeAnimation
                            sequence={[
                                
                                'Developer',
                                2000, 
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                                'Engineering Student',
                                2000
                            ]}
                            wrapper="span"
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full dark:text-purple-950'>
                        <a href="https://facebook.com/Salva.Gariglio/"><FaFacebook className='cursor-pointer' size={20} /></a>
                        <a href="https://www.instagram.com/salvagariglio/"><FaInstagram className='cursor-pointer' size={20}/></a>
                        <a href="https://www.linkedin.com/in/salvadorgariglio/"><FaLinkedin className='cursor-pointer' size={20}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main