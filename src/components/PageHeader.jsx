import { motion } from 'framer-motion';
import './PageHeader.css';

const PageHeader = ({ title, subtitle }) => {
    return (
        <section className="page-header">
            <div className="page-header-bg">
                <div className="page-header-pattern"></div>
            </div>
            <div className="container">
                <motion.div
                    className="page-header-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
