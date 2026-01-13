import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeartbeat, FaBriefcase, FaSeedling, FaRoad, FaBalanceScale, FaCheck } from 'react-icons/fa';

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
            className="bg-white/10 backdrop-blur-[10px] rounded-2xl p-6 border border-white/15
                transition-all duration-300 hover:bg-white/15 group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-14 h-14 rounded-xl bg-gradient-red flex items-center justify-center 
                text-white text-2xl mb-4 shadow-red group-hover:scale-110 transition-transform">
                <IconComponent />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">{vision.title}</h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">{vision.description}</p>
            <ul className="space-y-2">
                {vision.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                        <FaCheck className="text-gold-400 text-xs flex-shrink-0" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default VisionCard;
