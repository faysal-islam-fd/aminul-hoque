import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { programsData } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import './Programs.css';

const Programs = () => {
    return (
        <div className="programs-page">
            <PageHeader
                title="কর্মসূচি"
                subtitle="জনগণের সাথে আমাদের যাত্রার অবিস্মরণীয় মুহূর্তগুলো"
            />

            <section className="section programs-main">
                <div className="container">
                    <div className="programs-timeline-full">
                        {programsData.map((program, index) => (
                            <motion.div
                                key={program.id}
                                className="program-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ x: 10 }}
                            >
                                <div className="program-date">
                                    <span className="day">{program.date.day}</span>
                                    <span className="month">{program.date.month}</span>
                                </div>

                                <div className="program-content">
                                    <h3>{program.title}</h3>
                                    <p>{program.description}</p>

                                    <div className="program-meta">
                                        <span>
                                            <FaClock />
                                            {program.time}
                                        </span>
                                        <span>
                                            <FaMapMarkerAlt />
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
