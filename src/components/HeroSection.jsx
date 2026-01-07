import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaCalendarAlt, FaUsers, FaHandHoldingHeart, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { candidateData } from '../data/siteData';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* <div className="hero-badge">
                        <span className="badge-icon">🇧🇩</span>
                        <span>{candidateData.constituency}</span>
                    </div> */}

                    <h1 className="hero-title">
                        <span className="title-accent">সবার আগে</span>
                        <span className="title-main">বাংলাদেশ</span>
                    </h1>

                    <p className="hero-description">
                        আপনার জীবনের সমস্যার সমাধানই আমাদের রাজনীতি, আপনার স্বপ্নের বাংলাদেশ গড়ার লড়াইয়ে আছি আপনার পাশে।
                    </p>

                    <div className="hero-stats">
                        {candidateData.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="hero-buttons">
                        <Link to="/about" className="btn btn-primary btn-lg">
                            <span>আরও জানুন</span>
                            <FaArrowRight />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary btn-lg">
                            <FaPhone />
                            <span>যোগাযোগ করুন</span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="image-wrapper">
                        <div className="image-glow"></div>
                        <div className="image-frame">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face"
                                alt="আমিনুল হক"
                                className="candidate-img"
                            />
                        </div>
                        <div className="image-decoration"></div>
                        <motion.div
                            className="image-badge"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <FaCheckCircle />
                            <span>জনগণের পছন্দ</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>নিচে স্ক্রল করুন</p>
            </div>
        </section>
    );
};

export default HeroSection;
