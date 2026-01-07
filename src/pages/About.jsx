import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeartbeat, FaFlag, FaAward, FaUsers, FaBriefcase, FaHandHoldingHeart, FaBookOpen } from 'react-icons/fa';
import { candidateData, biography, achievements, socialActivities } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import './About.css';

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
        <div className="about-page">
            <PageHeader
                title="জীবনী"
                subtitle="জনগণের সেবায় নিবেদিত একজন নিষ্ঠাবান নেতা"
            />

            {/* Bio Section */}
            <section className="section bio-section">
                <div className="container">
                    <div className="bio-content">
                        <div className="bio-image" data-aos="fade-right">
                            <div className="bio-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face"
                                    alt="আমিনুল হক"
                                />
                                <div className="bio-badge">
                                    <span className="badge-title">জন্ম</span>
                                    <span className="badge-value">{candidateData.personalInfo.birthDate}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bio-text" data-aos="fade-left">
                            <h2>{candidateData.name}</h2>
                            <p className="bio-title">{candidateData.title}</p>

                            <div className="bio-intro">
                                <p>{biography.intro}</p>
                            </div>

                            <div className="personal-info">
                                <div className="info-item">
                                    <span className="info-label">জন্মস্থান</span>
                                    <span className="info-value">{candidateData.personalInfo.birthPlace}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">শিক্ষা</span>
                                    <span className="info-value">{candidateData.personalInfo.education}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">পেশা</span>
                                    <span className="info-value">{candidateData.personalInfo.profession}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">রাজনৈতিক দল</span>
                                    <span className="info-value">{candidateData.party}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Early Life Section */}
            <section className="section story-section bg-gray">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">জীবনের প্রথমার্ধ</span>
                        <h2 className="section-title">শুরুর গল্প</h2>
                    </div>

                    <div className="story-content" data-aos="fade-up">
                        <p>{biography.earlyLife}</p>
                        <p>{biography.education}</p>
                    </div>
                </div>
            </section>

            {/* Social Work Section */}
            <section className="section social-work-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">সমাজসেবা</span>
                        <h2 className="section-title">জনগণের সেবায়</h2>
                    </div>

                    <div className="social-work-content" data-aos="fade-up">
                        <p>{biography.socialWork}</p>
                    </div>

                    <div className="social-activities-grid">
                        {socialActivities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className="activity-card"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaHandHoldingHeart className="activity-icon" />
                                <h3>{activity.name}</h3>
                                <p>{activity.count}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Timeline */}
            <section className="section achievements-section bg-gray">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">যাত্রা ও অর্জন</span>
                        <h2 className="section-title">সেবা ও উন্নয়নের যাত্রা</h2>
                    </div>

                    <div className="achievements-timeline">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="achievement-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="achievement-year">{achievement.year}</div>
                                <div className="achievement-content">
                                    <div className="achievement-icon">
                                        {getIcon(achievement.icon)}
                                    </div>
                                    <div className="achievement-text">
                                        <h3>{achievement.title}</h3>
                                        <p>{achievement.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Political Career */}
            <section className="section political-section">
                <div className="political-bg"></div>
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge light">জনসেবায় নতুন অধ্যায়</span>
                        <h2 className="section-title light">রাজনৈতিক যাত্রা</h2>
                    </div>

                    <div className="political-content" data-aos="fade-up">
                        <div className="political-card">
                            <div className="political-icon">
                                <FaUsers />
                            </div>
                            <h3>{candidateData.position}</h3>
                            <p>{biography.politicalCareer}</p>
                            <div className="political-highlight">
                                <span>রাজনৈতিক দল:</span>
                                <strong>{candidateData.party}</strong>
                            </div>
                            <div className="political-highlight">
                                <span>নির্বাচনী এলাকা:</span>
                                <strong>{candidateData.constituency}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">সেবার হিসাব</span>
                        <h2 className="section-title">সংখ্যায় আমাদের কাজ</h2>
                    </div>

                    <div className="stats-grid">
                        {candidateData.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
