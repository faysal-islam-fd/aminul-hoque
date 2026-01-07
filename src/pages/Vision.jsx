import { visionData } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import VisionCard from '../components/VisionCard';
import './Vision.css';

const Vision = () => {
    return (
        <div className="vision-page">
            <PageHeader
                title="রূপকল্প"
                subtitle="একটি সমৃদ্ধ, ন্যায়বিচারভিত্তিক এবং উন্নত বাংলাদেশ গড়ার স্বপ্ন"
            />

            <section className="section vision-main">
                <div className="vision-page-bg"></div>
                <div className="container">
                    <div className="vision-intro" data-aos="fade-up">
                        <p>
                            আমার বিশ্বাস—প্রতিটি বাংলাদেশী নাগরিক শিক্ষা, স্বাস্থ্য এবং কর্মসংস্থানের সুযোগ পাওয়ার যোগ্য।
                            আমি প্রতিশ্রুতিবদ্ধ একটি সুন্দর, সমৃদ্ধ এবং ন্যায়বিচারভিত্তিক বাংলাদেশ গড়ে তুলতে।
                        </p>
                    </div>

                    <div className="vision-grid-full">
                        {visionData.map((vision, index) => (
                            <VisionCard key={vision.id} vision={vision} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
