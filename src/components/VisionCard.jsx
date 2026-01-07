import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeartbeat, FaBriefcase, FaSeedling, FaRoad, FaBalanceScale, FaCheck } from 'react-icons/fa';
import './VisionCard.css';

const iconMap = {
    FaGraduationCap: FaGraduationCap,
    FaHeartbeat: FaHeartbeat,
    FaBriefcase: FaBriefcase,
    FaSeedling: FaSeedling,
    FaRoad: FaRoad,
    FaBalanceScale: FaBalanceScale,
};

const VisionCard = ({ vision, index }) => {
    const IconComponent = iconMap[vision.icon] || FaGraduationCap;

    return (
        <motion.div
            className="vision-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="vision-icon">
                <IconComponent />
            </div>
            <h3 className="vision-title">{vision.title}</h3>
            <p className="vision-description">{vision.description}</p>
            <ul className="vision-list">
                {vision.points.map((point, i) => (
                    <li key={i}>
                        <FaCheck className="check-icon" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default VisionCard;
