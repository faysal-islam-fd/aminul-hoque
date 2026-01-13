import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, candidateData } from '../data/siteData';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
            ${isScrolled
                ? 'bg-green-700/95 backdrop-blur-[10px] shadow-lg py-2'
                : 'bg-transparent py-4'}`}>
            <div className="container">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-11 h-11 rounded-full bg-gradient-red flex items-center justify-center shadow-red">
                            <span className="text-white text-xl font-bold">আ</span>
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-white font-bold text-lg leading-tight group-hover:text-gold-300 transition-colors">
                                {candidateData.shortName}
                            </span>
                            <span className="text-white/70 text-xs">
                                {candidateData.subtitle}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                                        ${isActive
                                            ? 'bg-white/20 text-white'
                                            : 'text-white/80 hover:text-white hover:bg-white/10'}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`lg:hidden w-10 h-10 flex items-center justify-center 
                            bg-white/10 rounded-full text-white transition-all duration-200
                            hover:bg-white/20 ${isMobileMenuOpen ? 'bg-red-500' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            className="absolute top-0 right-0 w-[85%] max-w-[320px] h-full 
                                bg-gradient-to-b from-green-800 to-green-900 shadow-2xl
                                flex flex-col"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Mobile menu header */}
                            <div className="p-6 border-b border-white/10">
                                <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="w-12 h-12 rounded-full bg-gradient-red flex items-center justify-center">
                                        <span className="text-white text-2xl font-bold">আ</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-lg">{candidateData.shortName}</span>
                                        <span className="text-white/60 text-sm">{candidateData.subtitle}</span>
                                    </div>
                                </Link>
                            </div>

                            {/* Mobile nav links */}
                            <ul className="flex-1 py-6 px-4 overflow-y-auto">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 rounded-xl mb-2 text-base font-medium transition-all
                                                ${isActive
                                                    ? 'bg-white/15 text-white border-l-4 border-gold-400'
                                                    : 'text-white/80 hover:bg-white/10 hover:text-white'}`
                                            }
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Mobile menu footer */}
                            <div className="p-6 border-t border-white/10 text-center">
                                <p className="text-gold-400 font-semibold text-lg">{candidateData.slogan}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
