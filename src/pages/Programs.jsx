import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { programsData } from '../data/siteData';
import PageHeader from '../components/PageHeader';

const Programs = () => {
    return (
        <div>
            <PageHeader
                title="কর্মসূচি"
                subtitle="জনগণের সাথে আমাদের যাত্রার অবিস্মরণীয় মুহূর্তগুলো"
            />

            <section className="section bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {programsData.map((program, index) => (
                            <motion.div
                                key={program.id}
                                className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex-shrink-0 w-20 h-20 bg-gradient-green rounded-xl 
                                    flex flex-col items-center justify-center text-white shadow-green">
                                    <span className="text-2xl font-bold">{program.date.day}</span>
                                    <span className="text-xs opacity-90">{program.date.month}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{program.description}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-2">
                                            <FaClock className="text-green-700" />
                                            {program.time}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-green-700" />
                                            {program.location}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
