
import { motion } from "framer-motion";

import { ImagesSlider } from "./ui/images-slider";
import { Link } from "react-scroll";
import {TextGenerateEffectDemo} from "@/components/textDemo.tsx";
import ai2 from "../assets/ai2.avif";
import ai11 from "../assets/ai11.avif"

import ai20 from "../assets/ai20.avif"
export function ImagesSliderDemo() {
    const images = [
        ai20,

        ai11,
        // ai1,
        ai2,

    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    {/*The hero section slideshow <br /> nobody asked for*/}
                    <TextGenerateEffectDemo />
                </motion.p>

                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    <Link
                        to="timeline-section"
                        smooth={true}
                        duration={500}
                        // className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
                        // className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-colors duration-300 cursor-pointer"
                    >
                        <span>Join now →</span>

                    </Link>
                </button>
            </motion.div>
        </ImagesSlider>
    );
}
