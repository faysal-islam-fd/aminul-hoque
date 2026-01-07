import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearchLocation, FaUsers, FaCommentAlt, FaNewspaper } from 'react-icons/fa';
import './ServiceCard.css';

const iconMap = {
    FaSearchLocation: FaSearchLocation,
    FaUsers: FaUsers,
    FaCommentAlt: FaCommentAlt,
    FaNewspaper: FaNewspaper,
};

const ServiceCard = ({ service, index }) => {
    const IconComponent = iconMap[service.icon] || FaSearchLocation;

    return (
        <motion.div
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <div className="service-icon">
                <IconComponent />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="service-link">
                <span>{service.buttonText}</span>
                <FaArrowRight />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
