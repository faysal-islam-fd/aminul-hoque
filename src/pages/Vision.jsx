import { visionData } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import VisionCard from '../components/VisionCard';

const Vision = () => {
    return (
        <div>
            <PageHeader
                title="রূপকল্প"
                subtitle="একটি সমৃদ্ধ, ন্যায়বিচারভিত্তিক এবং উন্নত বাংলাদেশ গড়ার স্বপ্ন"
            />

            <section className="section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero -z-10"></div>
                <div className="container">
                    <p className="max-w-3xl mx-auto text-center text-white/90 text-lg leading-relaxed mb-12" data-aos="fade-up">
                        আমার বিশ্বাস—প্রতিটি বাংলাদেশী নাগরিক শিক্ষা, স্বাস্থ্য এবং কর্মসংস্থানের সুযোগ পাওয়ার যোগ্য।
                        আমি প্রতিশ্রুতিবদ্ধ একটি সুন্দর, সমৃদ্ধ এবং ন্যায়বিচারভিত্তিক বাংলাদেশ গড়ে তুলতে।
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
