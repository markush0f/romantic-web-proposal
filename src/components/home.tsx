import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import FallingHearts from './FallingHearts';

interface Props {
    readonly setFirstScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ setFirstScreenVisible }: Props) {
    return (
        <motion.div
            className="relative flex flex-col items-center justify-center min-h-screen bg-[color:var(--color-bg)] px-4 overflow-hidden"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <FallingHearts />

            <motion.button
                onClick={() => setFirstScreenVisible(false)}
                className="z-10 flex items-center justify-center gap-3 px-4 py-3 sm:px-6 sm:py-4 w-full max-w-[90%] sm:max-w-[420px] lg:max-w-[500px] border-2 border-black bg-[color:var(--color-strong-pink)] text-white text-sm sm:text-base lg:text-xl font-semibold cursor-pointer rounded-full shadow-md"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    y: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    },
                }}
                whileHover={{
                    scale: 1.05,
                    backgroundColor: "var(--color-medium-rosa)",
                    transition: {
                        scale: { duration: 0.2, ease: "easeOut" },
                        backgroundColor: { duration: 0.3 },
                    },
                }}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    src="/hello-kitty.png"
                    alt="Hello Kitty"
                    className="w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] lg:w-[64px] lg:h-[64px] object-contain"
                />
                <span className="flex-1 text-center">
                    Tengo algo para ti... 💖
                </span>
                <Play
                    width={20}
                    height={20}
                    className="sm:w-[28px] sm:h-[28px] lg:w-[34px] lg:h-[34px]"
                />
            </motion.button>
        </motion.div>
    );
}
