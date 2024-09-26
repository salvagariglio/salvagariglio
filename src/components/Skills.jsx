import { FaReact, FaCss3Alt, FaNodeJs, FaHtml5, FaGit, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})
const Skills = () => {

    return (
        <div id="skills" className='pb-24  mt-28 mx-40'>
            <div>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1.5 }}
                    className=' mb-24 text-4xl font-sans text-center text-[#001b5e] dark:text-white '> Technologies </motion.h2>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(2.5)}
                        className='p-4 items-center justify-center'>
                        <FaReact className='text-7xl text-cyan-400' />
                        <h1 className='px-4 items-center justify-center font-semibold dark:text-gray-100'>
                            React
                        </h1>
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(3)} className='p-4'>
                        <IoLogoJavascript className='text-6xl text-yellow-500 ' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(5)} className='p-4'>
                        <FaHtml5 className='text-6xl text-orange-600 ' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(2.5)} className='p-4'>
                        <FaCss3Alt className='text-6xl text-sky-600' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(4)} className='p-4'>
                        <SiTailwindcss className='text-6xl text-sky-400' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(3)} className='p-4'>
                        <FaNodeJs className='text-6xl text-green-500' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(2.5)} className='p-4'>
                        <FaPython className='text-6xl text-sky-800 ' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(5)} className='p-4'>
                        <SiRedux className='text-6xl text-violet-700 ' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(1.5)} className='p-4 items-center justify-center'>
                        <TbBrandReactNative className='text-7xl text-cyan-400' />
                        <h1 className=' items-center justify-center font-semibold dark:text-gray-100'>
                            ReactNative
                        </h1>
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(3.5)} className=' gap-2 flex p-4 items-center justify-center'>
                        <SiExpo className='text-6xl' />
                        <h2 className=' text-5xl items-center justify-center font-semibold'>
                            Expo
                        </h2>
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(5)} className='p-4 items-center justify-center flex gap-1'>
                        <FaGitAlt className='text-6xl text-orange-600 ' />
                        <FaGit className='text-6xl dark:text-gray-100 ' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(3)} className='p-4'>
                        <FaGithub className='text-6xl ' />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(2.5)} className='p-4'>
                        <GiDatabase className='text-6xl text-cyan-500' />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;