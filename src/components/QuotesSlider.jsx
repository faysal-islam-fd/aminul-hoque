import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const QuotesSlider = ({ quotes }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [quotes.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
    };

    return (
        <section className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-green -z-10"></div>

            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-badge section-badge-light">উক্তি ও বাণী</span>
                    <h2 className="section-title section-title-light">অনুপ্রেরণামূলক বাণী</h2>
                </div>

                {/* Quotes Slider */}
                <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="bg-white/10 backdrop-blur-[10px] rounded-3xl p-8 md:p-12 
                                border border-white/15"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center 
                                text-gold-400 text-3xl mx-auto mb-6">
                                <FaQuoteLeft />
                            </div>
                            <blockquote className="text-white text-xl md:text-2xl leading-relaxed mb-6 font-medium">
                                "{quotes[currentIndex].quote}"
                            </blockquote>
                            <cite className="text-gold-400 text-lg font-semibold not-italic">
                                — {quotes[currentIndex].author}
                            </cite>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center
                            hover:bg-white/20 transition-all duration-200"
                        onClick={goToPrevious}
                        aria-label="Previous quote"
                    >
                        <FaChevronLeft />
                    </button>
                    <div className="flex gap-2">
                        {quotes.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-200
                                    ${index === currentIndex
                                        ? 'bg-gold-400 scale-110'
                                        : 'bg-white/30 hover:bg-white/50'}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to quote ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center
                            hover:bg-white/20 transition-all duration-200"
                        onClick={goToNext}
                        aria-label="Next quote"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuotesSlider;
