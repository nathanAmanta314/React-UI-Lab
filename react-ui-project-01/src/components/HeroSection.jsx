import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

        <div className="z-40 xl:mb-0 mb-[20%]">
            <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 40,
                delay: 1.3,
                duration: 1.5,
                dumping: 25,
            }}
            className="text-5xl font-bold md:text-7xl lg:text-9xl z-10 mb-6">
                Building Fast <br /> Reliable Result
            </motion.h1>

            <motion.p 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 40,
                delay: 1.8,
                duration: 1.5,
                dumping: 25,
            }}
            className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nobis nihil error, numquam eaque eveniet commodi quisquam adipisci dolorum, beatae maxime nisi! Dolore eligendi doloremque praesentium inventore, a illum libero.</motion.p>
        </div>
    <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
    scene="https://prod.spline.design/mg7EgjUURTcDzTRo/scene.splinecode" />

    </section>
  )
}

export default HeroSection