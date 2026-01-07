import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFileAlt, FaListOl, FaFlag, FaArrowRight, FaCheck } from 'react-icons/fa';
import { manifestoData } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import './Manifesto.css';

const Manifesto = () => {
    return (
        <div className="manifesto-page">
            <PageHeader
                title="ইশতেহার"
                subtitle="জনগণের দাবি ও অধিকারকে ভিত্তি করে গড়ে ওঠা আমাদের প্রতিশ্রুতি"
            />

            <section className="section manifesto-main">
                <div className="container">
                    <div className="manifesto-grid-full">
                        {manifestoData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`manifesto-card-full ${item.featured ? 'featured' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -5 }}
                            >
                                <div className="manifesto-icon-wrap">
                                    {item.featured ? <FaFileAlt /> : index === 1 ? <FaListOl /> : <FaFlag />}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>

                                {item.highlights && (
                                    <div className="manifesto-highlights">
                                        {item.highlights.map((h, i) => (
                                            <span key={i}><FaCheck /> {h}</span>
                                        ))}
                                    </div>
                                )}

                                <Link to={item.link} className={`btn ${item.featured ? 'btn-primary' : 'btn-outline'}`}>
                                    <span>বিস্তারিত দেখুন</span>
                                    <FaArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Manifesto;
