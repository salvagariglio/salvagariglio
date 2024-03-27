import React from 'react'
import proyect from '../assets/'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
                Projects
            </h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius deleniti fugit porro provident accusamus? Minima eveniet dolores fugit quia temporibus quis accusantium illum, deserunt itaque, iusto pariatur debitis! Omnis, facere?
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProyectItem img="" title=''/>
                <ProyectItem img="" title=''/>
                <ProyectItem img="" title=''/>
                <ProyectItem img="" title=''/>
            </div>
        </div>
    )
}

export default Projects