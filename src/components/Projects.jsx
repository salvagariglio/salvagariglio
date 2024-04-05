import React from 'react'
import ProyectItem from './ProjectItem'
import Landing1 from '../assets/landing1.png'
import Landing2 from '../assets/landing2.png'
import Landing3 from '../assets/landing3.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-sans text-center text-[#001b5e]'>
                Projects
            </h1>
            <p className='text-center py-8'>
                Espero que mis proyectos te inspiren como a mi y den una idea de lo que puedo aportar a tu empresa
            </p>
            <div className='justify-center grid sm:grid-cols-2 gap-12 p-6'>
                <ProyectItem img={Landing1} title='Proyecto 1'/>
                <ProyectItem img={Landing2} title='Proyecto 2'/>
                <ProyectItem img={Landing3} title='Proyecto 3'/>
                <ProyectItem img={Landing3} title='Proyecto 4'/>
            </div>
        </div>
    )
}

export default Projects