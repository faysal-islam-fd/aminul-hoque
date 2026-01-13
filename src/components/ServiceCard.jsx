import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearchLocation, FaUsers, FaCommentAlt, FaNewspaper } from 'react-icons/fa';

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
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                transition-all duration-300 border border-gray-100 group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center 
                text-green-700 text-3xl mb-5 group-hover:bg-green-700 group-hover:text-white 
                transition-all duration-300">
                <IconComponent />
            </div>
            <h3 className="text-gray-900 text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">{service.description}</p>
            <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm
                    hover:text-red-500 transition-colors group/link"
            >
                <span>{service.buttonText}</span>
                <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
