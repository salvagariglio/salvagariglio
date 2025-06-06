import ProjectItem from './ProjectItem'
import Landing1 from '../assets/Captura2.png'
import Landing2 from '../assets/Captura.png'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <section id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='mb-12 md:text-5xl text-4xl font-semibold text-center text-[#001b5e] dark:text-white'>
                Projects
            </motion.h1>
            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='text-center text-base md:text-xl text-[#001b5e] py-8 dark:text-gray-100'>
                These projects, built with Tailwind CSS, React and Next.js, showcase my ability to design responsive interfaces and craft performant web apps. I hope they give you a clear idea of how I can contribute value to your team
            </motion.p>
            <article className='justify-center items-center grid md:grid-cols-2 gap-12 p-6'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className='items-center m-auto justify-center'>
                    <ProjectItem
                        linkPage="https://riorep.com.ar/" linkCode='https://github.com/salvagariglio/riorepPage' img={Landing1} tools='React - Javascript - Tailwind CSS' title='RIO REP' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className='items-center m-auto justify-center'>
                    <ProjectItem
                        linkPage='https://salva-ecommerce.vercel.app/' img={Landing2} linkCode='https://github.com/salvagariglio/shop-proyect' tools='React - Javascript - Tailwind CSS - Redux' title='Amazon 2.0' />
                </motion.div>
            </article>
        </section>
    )
}

export default Projects