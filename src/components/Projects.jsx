import ProjectItem from './ProjectItem'
import Landing1 from '../assets/Captura2.png'
import Landing2 from '../assets/Captura.png'
import Landing3 from '../assets/Captura3.png'
import Landing from '../assets/landing1.png'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <section id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='mb-12 text-4xl font-semibold text-center text-[#001b5e] dark:text-white'>
                Projects
            </motion.h1>
            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='text-center text-[#001b5e] py-8 dark:text-gray-100'>
                I hope my projects inspire you as much as they inspire me and give you an idea of what I can contribute to your company.
            </motion.p>
            <article className='justify-center items-center grid sm:grid-cols-2 gap-12 p-6'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem
                        linkPage="https://rio-rep.vercel.app/" linkCode='https://github.com/salvagariglio/rio-rep' img={Landing1} tools='React - Javascript - Tailwind CSS' title='RIO REP' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem
                        linkPage='https://shop-proyect.vercel.app/' img={Landing2} linkCode='https://github.com/salvagariglio/shop-proyect' tools='React - Javascript - Tailwind CSS - Redux' title='Amazon 2.0' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem img={Landing} tools='React Native - React - Javascript - Tailwind CSS - Python - MySQL' title='Aesthetic' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}>
                    <ProjectItem linkCode='https://github.com/salvagariglio/store-css' linkPage='https://store-css.vercel.app/' img={Landing3} tools='React - CSS' title='Food Store CSS Only' />
                </motion.div>
            </article>
        </section>
    )
}

export default Projects