import { FaReact, FaCss3Alt, FaNodeJs, FaHtml5, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiExpo } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
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
});

const Skills = () => {
    return (
        <div id="skills" className='pb-20 mt-20 px-6 max-w-screen-lg mx-auto'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
                className='mb-12 md:text-5xl text-4xl font-semibold text-center text-[#001b5e] dark:text-white'
            >
                Technologies
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center items-center'
            >
                {[
                    { icon: <FaReact className='text-7xl text-cyan-400' />, name: "React", delay: 2.5 },
                    { icon: <IoLogoJavascript className='text-6xl text-yellow-500' />, name: "JavaScript", delay: 3 },
                    { icon: <FaHtml5 className='text-6xl text-orange-600' />, name: "HTML", delay: 5 },
                    { icon: <FaCss3Alt className='text-6xl text-sky-600' />, name: "CSS", delay: 2.5 },
                    { icon: <SiTailwindcss className='text-6xl text-sky-400' />, name: "TailwindCSS", delay: 4 },
                    { icon: <FaNodeJs className='text-6xl text-green-500' />, name: "Node", delay: 3 },
                    { icon: <FaPython className='text-6xl text-sky-800' />, name: "Python", delay: 2.5 },
                    { icon: <TbBrandReactNative className='text-7xl text-cyan-400' />, name: "React Native", delay: 1.5 },
                    { icon: <SiExpo className='text-6xl' />, name: "Expo", delay: 3.5 },
                    { icon: <FaGitAlt className='text-6xl text-orange-600' />, name: "Git", delay: 5 },
                    { icon: <FaGithub className='text-6xl' />, name: "GitHub", delay: 3 },
                    { icon: <GiDatabase className='text-6xl text-cyan-500' />, name: "SQL", delay: 2.5 }
                ].map(({ icon, name, delay }, index) => (
                    <motion.div
                        key={index}
                        initial='initial'
                        animate='animate'
                        variants={iconVariants(delay)}
                        className='flex flex-col items-center justify-center p-4'
                    >
                        {icon}
                        {name && <h1 className='text-center text-lg font-semibold dark:text-gray-100'>{name}</h1>}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
