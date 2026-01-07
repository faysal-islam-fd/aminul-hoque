import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './QuotesSlider.css';

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
        <section className="quotes-section">
            <div className="quotes-bg"></div>
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-badge light">উক্তি ও বাণী</span>
                    <h2 className="section-title light">অনুপ্রেরণামূলক বাণী</h2>
                </div>

                <div className="quotes-slider" data-aos="fade-up">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="quote-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <blockquote>"{quotes[currentIndex].quote}"</blockquote>
                            <cite>— {quotes[currentIndex].author}</cite>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="quotes-nav">
                    <button className="quote-nav-btn" onClick={goToPrevious} aria-label="Previous quote">
                        <FaChevronLeft />
                    </button>
                    <div className="quote-dots">
                        {quotes.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to quote ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button className="quote-nav-btn" onClick={goToNext} aria-label="Next quote">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuotesSlider;
