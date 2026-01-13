import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFileAlt, FaListOl, FaFlag, FaArrowRight, FaCheck } from 'react-icons/fa';
import { manifestoData } from '../data/siteData';
import PageHeader from '../components/PageHeader';

const Manifesto = () => {
    return (
        <div>
            <PageHeader
                title="ইশতেহার"
                subtitle="জনগণের দাবি ও অধিকারকে ভিত্তি করে গড়ে ওঠা আমাদের প্রতিশ্রুতি"
            />

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {manifestoData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all
                                    ${item.featured
                                        ? 'border-green-700 ring-2 ring-green-100'
                                        : 'border-gray-100 hover:border-green-200'}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6
                                    ${item.featured
                                        ? 'bg-gradient-green text-white shadow-green'
                                        : 'bg-green-50 text-green-700'}`}>
                                    {item.featured ? <FaFileAlt /> : index === 1 ? <FaListOl /> : <FaFlag />}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.description}</p>

                                {item.highlights && (
                                    <div className="space-y-2 mb-6">
                                        {item.highlights.map((h, i) => (
                                            <span key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                                <FaCheck className="text-green-700 text-xs" /> {h}
                                            </span>
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
