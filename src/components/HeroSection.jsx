import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaCheckCircle } from 'react-icons/fa';
import { candidateData } from '../data/siteData';

// Import candidate portrait image
import candidatePortrait from '../assets/images/463813072_1073420937500952_11384.png';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-[140px] pb-[100px] lg:pt-[100px] lg:pb-[50px] xl:pt-[80px] 2xl:pt-[60px]">
            {/* Hero Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-hero -z-10">
                <div className="absolute top-0 left-0 w-full h-full 
                    [background:radial-gradient(ellipse_at_20%_80%,rgba(244,42,65,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_40%),radial-gradient(ellipse_at_50%_50%,rgba(0,128,96,0.2)_0%,transparent_60%)]">
                </div>

                {/* Floating shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute w-[120px] h-[120px] bg-white/[0.03] rounded-full top-[10%] right-[10%] animate-float"></div>
                    <div className="absolute w-[180px] h-[180px] bg-red-500/[0.08] rounded-full bottom-[20%] left-[5%] animate-float [animation-delay:-5s]"></div>
                    <div className="absolute w-[100px] h-[100px] bg-white/[0.05] rounded-full top-[50%] left-[30%] animate-float [animation-delay:-10s]"></div>
                    <div className="absolute w-[60px] h-[60px] bg-gold-400/10 rounded-full top-[30%] right-[30%] animate-float [animation-delay:-15s]"></div>
                </div>
            </div>

            <div className="container flex flex-col gap-10 items-center lg:flex-row lg:gap-16 xl:gap-20 2xl:gap-28 max-w-7xl 2xl:max-w-[1600px]">
                {/* Hero Content */}
                <motion.div
                    className="text-center text-white relative z-[2] lg:flex-1 lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="mb-6">
                        <span className="block text-xl md:text-2xl font-normal mb-2 opacity-90 tracking-wide">
                            সবার আগে
                        </span>
                        <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]
                            bg-gradient-to-br from-white via-yellow-400 to-white bg-[length:200%_auto]
                            bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
                            বাংলাদেশ
                        </span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-[500px] mx-auto mb-8 lg:mx-0">
                        আপনার জীবনের সমস্যার সমাধানই আমাদের রাজনীতি, আপনার স্বপ্নের বাংলাদেশ গড়ার লড়াইয়ে আছি আপনার পাশে।
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 p-5 md:p-6 
                        bg-white/[0.08] backdrop-blur-[10px] rounded-2xl border border-white/10 
                        max-w-[500px] mx-auto lg:mx-0">
                        {candidateData.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            >
                                <span className="block text-2xl md:text-3xl font-extrabold text-gold-400 leading-none mb-1">
                                    {stat.number}
                                </span>
                                <span className="text-xs opacity-80">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 items-center lg:justify-start">
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

                {/* Hero Image */}
                <motion.div
                    className="flex justify-center relative z-[1] lg:flex-1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative inline-block">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(0,106,78,0.4)_0%,transparent_70%)] 
                            blur-[50px] -z-10"></div>

                        {/* Image frame - Rectangular with rounded corners */}
                        <div className="w-[300px] md:w-[380px] lg:w-[420px] xl:w-[480px] 2xl:w-[550px]
                            rounded-2xl overflow-hidden border-4 border-white/20 relative z-[2]
                            shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_25px_50px_rgba(0,0,0,0.4)]
                            bg-green-800">
                            <img
                                src={candidatePortrait}
                                alt="আমিনুল হক"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Decorative corner elements */}
                        <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-gold-400 rounded-tl-xl z-[1]"></div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 border-t-4 border-r-4 border-gold-400 rounded-tr-xl z-[1]"></div>
                        <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-4 border-l-4 border-gold-400 rounded-bl-xl z-[1]"></div>
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-gold-400 rounded-br-xl z-[1]"></div>

                        {/* Badge */}
                        <motion.div
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2
                                bg-gradient-red text-white px-5 py-2.5
                                rounded-full text-sm font-semibold flex items-center gap-2 
                                shadow-red z-[3] whitespace-nowrap"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <FaCheckCircle className="text-gold-400" />
                            <span>জনগণের পছন্দ</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white opacity-70 animate-bounce">
                <div className="w-[26px] h-[42px] border-2 border-current rounded-[13px] mx-auto mb-2 relative">
                    <div className="w-1 h-[10px] bg-current rounded-sm absolute top-2 left-1/2 -translate-x-1/2 animate-scroll"></div>
                </div>
                <p className="text-xs">নিচে স্ক্রল করুন</p>
            </div>
        </section>
    );
};

export default HeroSection;
