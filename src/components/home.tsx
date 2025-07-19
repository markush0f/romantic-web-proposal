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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <FallingHearts />

            <motion.button
                onClick={() => setFirstScreenVisible(false)}
                className="z-10 flex items-center justify-between w-full max-w-[90%] sm:max-w-[420px] lg:max-w-[500px] px-5 py-4 bg-[color:var(--color-strong-pink)] border-2 border-black text-white rounded-full shadow-lg transition duration-300 text-base sm:text-lg lg:text-xl font-semibold hover:scale-105 hover:bg-[color:var(--color-medium-rosa)]"
                whileTap={{ scale: 0.95 }}
            >
                <img
                    src="/hello-kitty.png"
                    alt="Hello Kitty"
                    className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px] object-contain"
                />
                <span className="mx-3 text-center flex-1">
                    Tengo algo para ti... 💖
                </span>
            </motion.button>
        </motion.div>
    );
}
