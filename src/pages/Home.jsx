import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaCalendarAlt, FaUsers, FaHandHoldingHeart, FaGraduationCap, FaCheckCircle, FaImages, FaQuoteLeft, FaHandshake, FaFlag } from 'react-icons/fa';
import { candidateData, visionData, servicesData, quotesData, programsData } from '../data/siteData';
import HeroSection from '../components/HeroSection';
import VisionCard from '../components/VisionCard';
import ServiceCard from '../components/ServiceCard';
import QuotesSlider from '../components/QuotesSlider';
import './Home.css';

// Gallery preview images
const galleryPreview = [
    { id: 1, src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face", alt: "আমিনুল হক" },
    { id: 2, src: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80", alt: "জনসভা" },
    { id: 3, src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", alt: "সম্মেলন" },
    { id: 4, src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80", alt: "সমাবেশ" },
    { id: 5, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", alt: "কার্যক্রম" },
    { id: 6, src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600&q=80", alt: "গণসংযোগ" }
];

// News/Announcements
const newsItems = [
    {
        id: 1,
        title: "আগামীকাল মিরপুরে বিশাল জনসভা",
        date: "৩ জানুয়ারি, ২০২৬",
        excerpt: "মিরপুর স্টেডিয়াম মাঠে বিকাল ৪টায় বিশাল জনসভা অনুষ্ঠিত হবে।"
    },
    {
        id: 2,
        title: "যুব উন্নয়ন কর্মশালা সম্পন্ন",
        date: "১ জানুয়ারি, ২০২৬",
        excerpt: "ঢাকা বিশ্ববিদ্যালয়ে যুব উদ্যোক্তা উন্নয়ন কর্মশালা সফলভাবে সম্পন্ন।"
    },
    {
        id: 3,
        title: "শীতবস্ত্র বিতরণ কার্যক্রম",
        date: "২৮ ডিসেম্বর, ২০২৫",
        excerpt: "প্রান্তিক জনগোষ্ঠীর মধ্যে ৫০০০ শীতবস্ত্র বিতরণ করা হয়েছে।"
    }
];

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <HeroSection />

            {/* About Preview Section */}
            <section className="section about-preview">
                <div className="container">
                    <div className="about-preview-content">
                        <div className="about-image-wrapper" data-aos="fade-right">
                            <div className="about-image-frame">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face"
                                    alt="আমিনুল হক"
                                    loading="lazy"
                                />
                            </div>
                            <div className="experience-badge">
                                <span className="exp-number">২০+</span>
                                <span className="exp-text">বছর<br />সেবায়</span>
                            </div>
                        </div>

                        <div className="about-text" data-aos="fade-left">
                            <span className="section-badge">পরিচিতি</span>
                            <h2 className="section-title">আমি আপনাদেরই একজন</h2>
                            <p className="about-description">
                                আমি মোহাম্মদ আমিনুল হক - গত দুই দশকেরও বেশি সময় ধরে জনগণের সেবায় নিজেকে উৎসর্গ করেছি।
                                আপনাদের সমস্যা আমার সমস্যা, আপনাদের স্বপ্ন আমার স্বপ্ন।
                            </p>
                            <p className="about-description">
                                ঢাকা ১৬ আসন থেকে সংসদ সদস্য প্রার্থী হিসেবে আমি আপনাদের সেবা করার সুযোগ চাই।
                                একসাথে আমরা একটি সমৃদ্ধ ও উন্নত এলাকা গড়ে তুলতে পারি।
                            </p>

                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <FaUsers className="highlight-icon" />
                                    <div>
                                        <h4>১০,০০০+ পরিবার</h4>
                                        <p>সহায়তা প্রদান</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <FaGraduationCap className="highlight-icon" />
                                    <div>
                                        <h4>১০০+ শিক্ষা বৃত্তি</h4>
                                        <p>দরিদ্র শিক্ষার্থীদের</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <FaHandHoldingHeart className="highlight-icon" />
                                    <div>
                                        <h4>৫০+ সামাজিক প্রকল্প</h4>
                                        <p>সফলভাবে বাস্তবায়িত</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/about" className="btn btn-primary">
                                <span>বিস্তারিত জানুন</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section Preview */}
            <section className="section vision-preview">
                <div className="vision-bg-pattern"></div>
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge light">রূপকল্প</span>
                        <h2 className="section-title light">আমার স্বপ্নের বাংলাদেশ</h2>
                        <p className="section-subtitle light">
                            সমৃদ্ধি, সুশাসন ও সামাজিক ন্যায়বিচার প্রতিষ্ঠায় প্রতিশ্রুতিবদ্ধ
                        </p>
                    </div>

                    <div className="vision-grid">
                        {visionData.slice(0, 6).map((vision, index) => (
                            <VisionCard key={vision.id} vision={vision} index={index} />
                        ))}
                    </div>

                    <div className="text-center mt-8" data-aos="fade-up">
                        <Link to="/vision" className="btn btn-outline-light btn-lg">
                            <span>সম্পূর্ণ রূপকল্প দেখুন</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="section gallery-preview">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">গ্যালারি</span>
                        <h2 className="section-title">ছবিতে আমাদের যাত্রা</h2>
                        <p className="section-subtitle">
                            জনগণের সাথে আমাদের কার্যক্রম ও অর্জনের অবিস্মরণীয় মুহূর্তগুলো
                        </p>
                    </div>

                    <div className="gallery-preview-grid">
                        {galleryPreview.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className="gallery-preview-item"
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className="gallery-preview-overlay">
                                    <FaImages />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8" data-aos="fade-up">
                        <Link to="/gallery" className="btn btn-primary btn-lg">
                            <FaImages />
                            <span>সম্পূর্ণ গ্যালারি দেখুন</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Programs Preview */}
            <section className="section programs-preview">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">কর্মসূচি</span>
                        <h2 className="section-title">প্রতিদিনের কর্মসূচি</h2>
                        <p className="section-subtitle">
                            জনগণের সাথে আমাদের যাত্রার অবিস্মরণীয় মুহূর্তগুলো
                        </p>
                    </div>

                    <div className="programs-timeline">
                        {programsData.slice(0, 3).map((program, index) => (
                            <motion.div
                                key={program.id}
                                className="timeline-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="timeline-date">
                                    <span className="day">{program.date.day}</span>
                                    <span className="month">{program.date.month}</span>
                                </div>
                                <div className="timeline-content">
                                    <h3>{program.title}</h3>
                                    <p>{program.description}</p>
                                    <div className="timeline-meta">
                                        <span><FaCalendarAlt /> {program.time}</span>
                                        <span><FaCheckCircle /> {program.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center" data-aos="fade-up">
                        <Link to="/programs" className="btn btn-primary btn-lg">
                            <span>সকল কর্মসূচি দেখুন</span>
                            <FaCalendarAlt />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quotes Section */}
            <QuotesSlider quotes={quotesData} />

            {/* News Section */}
            <section className="section news-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">সংবাদ</span>
                        <h2 className="section-title">সর্বশেষ খবর ও ঘোষণা</h2>
                        <p className="section-subtitle">
                            আমাদের সাম্প্রতিক কার্যক্রম ও ঘোষণা সম্পর্কে জানুন
                        </p>
                    </div>

                    <div className="news-grid">
                        {newsItems.map((news, index) => (
                            <motion.div
                                key={news.id}
                                className="news-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -5 }}
                            >
                                <div className="news-date">{news.date}</div>
                                <h3>{news.title}</h3>
                                <p>{news.excerpt}</p>
                                <Link to="/programs" className="news-link">
                                    বিস্তারিত পড়ুন <FaArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="section promise-section">
                <div className="promise-bg"></div>
                <div className="container">
                    <div className="promise-content">
                        <div className="promise-text" data-aos="fade-right">
                            <span className="section-badge light">প্রতিশ্রুতি</span>
                            <h2 className="section-title light">আমার প্রতিশ্রুতি</h2>
                            <div className="promise-list">
                                <div className="promise-item">
                                    <FaHandshake className="promise-icon" />
                                    <div>
                                        <h4>স্বচ্ছ ও জবাবদিহি</h4>
                                        <p>প্রতিটি কাজে জনগণের কাছে দায়বদ্ধ থাকব</p>
                                    </div>
                                </div>
                                <div className="promise-item">
                                    <FaFlag className="promise-icon" />
                                    <div>
                                        <h4>নিরলস পরিশ্রম</h4>
                                        <p>এলাকার উন্নয়নে অক্লান্ত পরিশ্রম করব</p>
                                    </div>
                                </div>
                                <div className="promise-item">
                                    <FaQuoteLeft className="promise-icon" />
                                    <div>
                                        <h4>জনগণের কথা শোনা</h4>
                                        <p>সবসময় জনগণের সমস্যা শুনব ও সমাধান করব</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="promise-image" data-aos="fade-left">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                                alt="আমিনুল হক"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">অনলাইন সেবা</span>
                        <h2 className="section-title">ঘরে বসেই সেবা নিন</h2>
                        <p className="section-subtitle">
                            দ্রুত, সহজ এবং কার্যকর সেবা আপনার হাতের মুঠোয়
                        </p>
                    </div>

                    <div className="services-grid">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-bg">
                    <div className="cta-pattern"></div>
                </div>
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>একসাথে পরিবর্তন আনি</h2>
                        <p>
                            আপনার সহযোগিতায় আমরা আরও বেশি মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে পারি।
                            আমাদের সাথে যুক্ত হয়ে একটি সমৃদ্ধ বাংলাদেশ গড়ুন।
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                <FaPhone />
                                <span>যোগাযোগ করুন</span>
                            </Link>
                            <Link to="/about" className="btn btn-outline-light btn-lg">
                                <span>আরও জানুন</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
