import { servicesData } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <PageHeader
                title="অনলাইন সেবা"
                subtitle="দ্রুত, সহজ এবং কার্যকর সেবা আপনার হাতের মুঠোয়"
            />

            <section className="section services-main">
                <div className="container">
                    <div className="services-grid-full">
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
