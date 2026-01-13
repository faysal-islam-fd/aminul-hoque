import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 bg-gradient-hero z-[9999] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center">
                        {/* Bangladesh flag loader */}
                        <div className="relative w-24 h-24 mx-auto mb-6">
                            <div className="absolute inset-0 bg-green-700 rounded-lg animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-12 h-12 rounded-full bg-red-500 animate-[ping_1.5s_ease-in-out_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-10 h-10 rounded-full bg-red-500"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-white text-xl font-medium">লোড হচ্ছে</span>
                            <span className="text-gold-400 text-xl ml-1">
                                <span className="animate-[bounce_1s_ease-in-out_infinite]">.</span>
                                <span className="animate-[bounce_1s_ease-in-out_infinite_0.2s]">.</span>
                                <span className="animate-[bounce_1s_ease-in-out_infinite_0.4s]">.</span>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
