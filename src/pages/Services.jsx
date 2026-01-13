import { servicesData } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    return (
        <div>
            <PageHeader
                title="অনলাইন সেবা"
                subtitle="দ্রুত, সহজ এবং কার্যকর সেবা আপনার হাতের মুঠোয়"
            />

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
