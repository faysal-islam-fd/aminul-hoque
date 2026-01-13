import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeartbeat, FaFlag, FaAward, FaUsers, FaHandHoldingHeart, FaBookOpen } from 'react-icons/fa';
import { candidateData, biography, achievements, socialActivities } from '../data/siteData';
import PageHeader from '../components/PageHeader';

// Import candidate portrait image
import candidatePortrait from '../assets/images/463813072_1073420937500952_11384.png';

const About = () => {
    // Icon mapping for achievements
    const getIcon = (iconName) => {
        const icons = {
            'FaBookOpen': <FaBookOpen />,
            'FaHeartbeat': <FaHeartbeat />,
            'FaGraduationCap': <FaGraduationCap />,
            'FaFlag': <FaFlag />,
            'FaAward': <FaAward />
        };
        return icons[iconName] || <FaAward />;
    };

    return (
        <div>
            <PageHeader
                title="জীবনী"
                subtitle="জনগণের সেবায় নিবেদিত একজন নিষ্ঠাবান নেতা"
            />

            {/* Bio Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div data-aos="fade-right" className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={candidatePortrait}
                                    alt="আমিনুল হক"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-4 left-8 bg-gradient-green text-white 
                                px-6 py-3 rounded-xl shadow-green text-center">
                                <span className="block text-xs opacity-80">জন্ম</span>
                                <span className="block font-bold">{candidateData.personalInfo.birthDate}</span>
                            </div>
                        </div>

                        {/* Text */}
                        <div data-aos="fade-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                                {candidateData.name}
                            </h2>
                            <p className="text-green-700 font-semibold text-lg mb-6">
                                {candidateData.title}
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                {biography.intro}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <span className="text-gray-500 text-sm block mb-1">জন্মস্থান</span>
                                    <span className="text-gray-900 font-semibold">{candidateData.personalInfo.birthPlace}</span>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <span className="text-gray-500 text-sm block mb-1">শিক্ষা</span>
                                    <span className="text-gray-900 font-semibold">{candidateData.personalInfo.education}</span>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <span className="text-gray-500 text-sm block mb-1">পেশা</span>
                                    <span className="text-gray-900 font-semibold">{candidateData.personalInfo.profession}</span>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <span className="text-gray-500 text-sm block mb-1">রাজনৈতিক দল</span>
                                    <span className="text-gray-900 font-semibold">{candidateData.party}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Early Life Section */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">জীবনের প্রথমার্ধ</span>
                        <h2 className="section-title">শুরুর গল্প</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4 text-gray-600 leading-relaxed" data-aos="fade-up">
                        <p>{biography.earlyLife}</p>
                        <p>{biography.education}</p>
                    </div>
                </div>
            </section>

            {/* Social Work Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">সমাজসেবা</span>
                        <h2 className="section-title">জনগণের সেবায়</h2>
                    </div>

                    <p className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed mb-12" data-aos="fade-up">
                        {biography.socialWork}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {socialActivities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100
                                    hover:border-green-200 transition-colors cursor-pointer"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaHandHoldingHeart className="text-green-700 text-3xl mx-auto mb-3" />
                                <h3 className="text-gray-900 font-bold mb-1">{activity.name}</h3>
                                <p className="text-gold-400 font-bold text-xl">{activity.count}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Timeline */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">যাত্রা ও অর্জন</span>
                        <h2 className="section-title">সেবা ও উন্নয়নের যাত্রা</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex-shrink-0 w-20 text-center">
                                    <span className="text-green-700 font-bold text-lg">{achievement.year}</span>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center 
                                        text-green-700 text-xl flex-shrink-0">
                                        {getIcon(achievement.icon)}
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-bold text-lg mb-1">{achievement.title}</h3>
                                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Political Career */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero -z-10"></div>
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge section-badge-light">জনসেবায় নতুন অধ্যায়</span>
                        <h2 className="section-title section-title-light">রাজনৈতিক যাত্রা</h2>
                    </div>

                    <div className="max-w-2xl mx-auto" data-aos="fade-up">
                        <div className="bg-white/10 backdrop-blur-[10px] rounded-2xl p-8 border border-white/15 text-center">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center 
                                text-white text-3xl mx-auto mb-6">
                                <FaUsers />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-4">{candidateData.position}</h3>
                            <p className="text-white/80 leading-relaxed mb-6">{biography.politicalCareer}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <div className="bg-white/10 rounded-xl px-6 py-3">
                                    <span className="text-white/60 text-sm block">রাজনৈতিক দল</span>
                                    <strong className="text-gold-400">{candidateData.party}</strong>
                                </div>
                                <div className="bg-white/10 rounded-xl px-6 py-3">
                                    <span className="text-white/60 text-sm block">নির্বাচনী এলাকা</span>
                                    <strong className="text-gold-400">{candidateData.constituency}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">সেবার হিসাব</span>
                        <h2 className="section-title">সংখ্যায় আমাদের কাজ</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {candidateData.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-green text-white rounded-2xl p-8 text-center shadow-green"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="block text-4xl md:text-5xl font-extrabold mb-2">{stat.number}</span>
                                <span className="text-white/80">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
