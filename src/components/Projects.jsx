import ProjectItem from './ProjectItem'
import Landing1 from '../assets/landing1.png'
import Landing2 from '../assets/landing2.png'
import Landing3 from '../assets/landing3.png'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <section id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='text-4xl font-sans text-center text-[#001b5e] dark:text-white'>
                Projects
            </motion.h1>
            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='text-center text-[#001b5e] py-8 dark:text-gray-100'>
                Espero que mis proyectos te inspiren como a mi y den una idea de lo que puedo aportar a tu empresa.
            </motion.p>
            <article className='justify-center items-center grid sm:grid-cols-2 gap-12 p-6'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem img={Landing1} tools='React - Javascript - Tailwind CSS' title='RIO REP' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem img={Landing2} tools='React - Javascript - Tailwind CSS - Redux' title='Amazon 2.0' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem img={Landing3} tools='React - Javascript - Tailwind CSS' title='Golfo La Velada' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem img={Landing3} tools='' title='' />
                </motion.div>
            </article>
        </section>
    )
}

export default Projects