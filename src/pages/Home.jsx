import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaCalendarAlt, FaUsers, FaHandHoldingHeart, FaGraduationCap, FaCheckCircle, FaImages, FaQuoteLeft, FaHandshake, FaFlag } from 'react-icons/fa';
import { visionData, servicesData, quotesData, programsData } from '../data/siteData';
import HeroSection from '../components/HeroSection';
import VisionCard from '../components/VisionCard';
import ServiceCard from '../components/ServiceCard';
import QuotesSlider from '../components/QuotesSlider';

// Import real images for gallery preview
import imgPortrait from '../assets/images/463813072_1073420937500952_11384.png';
import imgCampaign from '../assets/images/608715721_1398078648368511_82649.png';
import imgRally from '../assets/images/605116932_1391788972330812_43191.png';
import imgMeeting from '../assets/images/605129893_1395291801980529_45492.png';
import imgTournament from '../assets/images/615309730_1404655214377521_29495.png';
import imgAward from '../assets/images/613661364_1403225744520468_31375.png';
import imgThoughtful from '../assets/images/610881490_1398664928309883_64986.png';

// Gallery preview images with real photos
const galleryPreview = [
    { id: 1, src: imgPortrait, alt: "আমিনুল হক - প্রোফাইল" },
    { id: 2, src: imgRally, alt: "জনসভায় বাংলাদেশের পতাকা হাতে" },
    { id: 3, src: imgMeeting, alt: "নেত্রীর সাথে সাক্ষাৎ" },
    { id: 4, src: imgTournament, alt: "যুব ফুটবল টুর্নামেন্ট" },
    { id: 5, src: imgAward, alt: "পুরস্কার বিতরণ অনুষ্ঠান" },
    { id: 6, src: imgCampaign, alt: "নির্বাচনী প্রচারণা" }
];

// News/Announcements
const newsItems = [
    {
        id: 1,
        title: "আগামীকাল মিরপুরে বিশাল জনসভা",
        date: "৩ জানুয়ারি, ২০২৬",
        excerpt: "মিরপুর স্টেডিয়াম মাঠে বিকাল ৪টায় বিশাল জনসভা অনুষ্ঠিত হবে।"
    },
    {
        id: 2,
        title: "যুব উন্নয়ন কর্মশালা সম্পন্ন",
        date: "১ জানুয়ারি, ২০২৬",
        excerpt: "ঢাকা বিশ্ববিদ্যালয়ে যুব উদ্যোক্তা উন্নয়ন কর্মশালা সফলভাবে সম্পন্ন।"
    },
    {
        id: 3,
        title: "শীতবস্ত্র বিতরণ কার্যক্রম",
        date: "২৮ ডিসেম্বর, ২০২৫",
        excerpt: "প্রান্তিক জনগোষ্ঠীর মধ্যে ৫০০০ শীতবস্ত্র বিতরণ করা হয়েছে।"
    }
];

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <HeroSection />

            {/* About Preview Section */}
            <section className="section bg-gray-50">
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-28 items-center">
                        {/* Image */}
                        <div className="relative" data-aos="fade-right">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={imgCampaign}
                                    alt="আমিনুল হক"
                                    loading="lazy"
                                    className="w-full h-auto max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gradient-red text-white 
                                px-6 py-4 rounded-xl shadow-red text-center">
                                <span className="block text-3xl font-extrabold">২০+</span>
                                <span className="text-sm opacity-90">বছর<br />সেবায়</span>
                            </div>
                        </div>

                        {/* Text */}
                        <div data-aos="fade-left">
                            <span className="section-badge">পরিচিতি</span>
                            <h2 className="section-title">আমি আপনাদেরই একজন</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                আমি মোহাম্মদ আমিনুল হক - গত দুই দশকেরও বেশি সময় ধরে জনগণের সেবায় নিজেকে উৎসর্গ করেছি।
                                আপনাদের সমস্যা আমার সমস্যা, আপনাদের স্বপ্ন আমার স্বপ্ন।
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                ঢাকা ১৬ আসন থেকে সংসদ সদস্য প্রার্থী হিসেবে আমি আপনাদের সেবা করার সুযোগ চাই।
                                একসাথে আমরা একটি সমৃদ্ধ ও উন্নত এলাকা গড়ে তুলতে পারি।
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md">
                                    <FaUsers className="text-green-700 text-2xl" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">১০,০০০+ পরিবার</h4>
                                        <p className="text-gray-500 text-sm">সহায়তা প্রদান</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md">
                                    <FaGraduationCap className="text-green-700 text-2xl" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">১০০+ শিক্ষা বৃত্তি</h4>
                                        <p className="text-gray-500 text-sm">দরিদ্র শিক্ষার্থীদের</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md">
                                    <FaHandHoldingHeart className="text-green-700 text-2xl" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">৫০+ সামাজিক প্রকল্প</h4>
                                        <p className="text-gray-500 text-sm">সফলভাবে বাস্তবায়িত</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/about" className="btn btn-primary">
                                <span>বিস্তারিত জানুন</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section Preview */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero -z-10"></div>
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge section-badge-light">রূপকল্প</span>
                        <h2 className="section-title section-title-light">আমার স্বপ্নের বাংলাদেশ</h2>
                        <p className="section-subtitle section-subtitle-light">
                            সমৃদ্ধি, সুশাসন ও সামাজিক ন্যায়বিচার প্রতিষ্ঠায় প্রতিশ্রুতিবদ্ধ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:gap-8">
                        {visionData.slice(0, 6).map((vision, index) => (
                            <VisionCard key={vision.id} vision={vision} index={index} />
                        ))}
                    </div>

                    <div className="text-center mt-12" data-aos="fade-up">
                        <Link to="/vision" className="btn btn-outline-light btn-lg">
                            <span>সম্পূর্ণ রূপকল্প দেখুন</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="section">
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">গ্যালারি</span>
                        <h2 className="section-title">ছবিতে আমাদের যাত্রা</h2>
                        <p className="section-subtitle">
                            জনগণের সাথে আমাদের কার্যক্রম ও অর্জনের অবিস্মরণীয় মুহূর্তগুলো
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                        {galleryPreview.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className="relative rounded-xl overflow-hidden aspect-square cursor-pointer group"
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                                    flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <FaImages className="text-white text-3xl" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12" data-aos="fade-up">
                        <Link to="/gallery" className="btn btn-primary btn-lg">
                            <FaImages />
                            <span>সম্পূর্ণ গ্যালারি দেখুন</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Programs Preview */}
            <section className="section bg-gray-50">
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">কর্মসূচি</span>
                        <h2 className="section-title">প্রতিদিনের কর্মসূচি</h2>
                        <p className="section-subtitle">
                            জনগণের সাথে আমাদের যাত্রার অবিস্মরণীয় মুহূর্তগুলো
                        </p>
                    </div>

                    <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto space-y-6">
                        {programsData.slice(0, 3).map((program, index) => (
                            <motion.div
                                key={program.id}
                                className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex-shrink-0 w-20 h-20 bg-gradient-green rounded-xl 
                                    flex flex-col items-center justify-center text-white">
                                    <span className="text-2xl font-bold">{program.date.day}</span>
                                    <span className="text-xs">{program.date.month}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-green-700" /> {program.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCheckCircle className="text-green-700" /> {program.location}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-10" data-aos="fade-up">
                        <Link to="/programs" className="btn btn-primary btn-lg">
                            <span>সকল কর্মসূচি দেখুন</span>
                            <FaCalendarAlt />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quotes Section */}
            <QuotesSlider quotes={quotesData} />

            {/* News Section */}
            <section className="section">
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">সংবাদ</span>
                        <h2 className="section-title">সর্বশেষ খবর ও ঘোষণা</h2>
                        <p className="section-subtitle">
                            আমাদের সাম্প্রতিক কার্যক্রম ও ঘোষণা সম্পর্কে জানুন
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
                        {newsItems.map((news, index) => (
                            <motion.div
                                key={news.id}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-green-700 text-sm font-medium mb-2">{news.date}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{news.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                                <Link to="/programs" className="inline-flex items-center gap-2 
                                    text-red-500 font-semibold text-sm hover:text-red-600 transition-colors">
                                    বিস্তারিত পড়ুন <FaArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-dark -z-10"></div>
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 2xl:gap-24 items-center">
                        <div data-aos="fade-right">
                            <span className="section-badge section-badge-light">প্রতিশ্রুতি</span>
                            <h2 className="section-title section-title-light">আমার প্রতিশ্রুতি</h2>
                            <div className="space-y-6 mt-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-green-700/20 flex items-center justify-center flex-shrink-0">
                                        <FaHandshake className="text-gold-400 text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1">স্বচ্ছ ও জবাবদিহি</h4>
                                        <p className="text-white/70">প্রতিটি কাজে জনগণের কাছে দায়বদ্ধ থাকব</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-green-700/20 flex items-center justify-center flex-shrink-0">
                                        <FaFlag className="text-gold-400 text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1">নিরলস পরিশ্রম</h4>
                                        <p className="text-white/70">এলাকার উন্নয়নে অক্লান্ত পরিশ্রম করব</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-green-700/20 flex items-center justify-center flex-shrink-0">
                                        <FaQuoteLeft className="text-gold-400 text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1">জনগণের কথা শোনা</h4>
                                        <p className="text-white/70">সবসময় জনগণের সমস্যা শুনব ও সমাধান করব</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="relative">
                            <img
                                src={imgThoughtful}
                                alt="আমিনুল হক"
                                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section bg-gray-50">
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-badge">অনলাইন সেবা</span>
                        <h2 className="section-title">ঘরে বসেই সেবা নিন</h2>
                        <p className="section-subtitle">
                            দ্রুত, সহজ এবং কার্যকর সেবা আপনার হাতের মুঠোয়
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 xl:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-red -z-10"></div>
                <div className="container max-w-7xl 2xl:max-w-[1600px]">
                    <motion.div
                        className="text-center max-w-2xl xl:max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                            একসাথে পরিবর্তন আনি
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            আপনার সহযোগিতায় আমরা আরও বেশি মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে পারি।
                            আমাদের সাথে যুক্ত হয়ে একটি সমৃদ্ধ বাংলাদেশ গড়ুন।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn btn-lg bg-white text-red-500 hover:bg-gray-100 hover:-translate-y-1 shadow-xl">
                                <FaPhone />
                                <span>যোগাযোগ করুন</span>
                            </Link>
                            <Link to="/about" className="btn btn-outline-light btn-lg">
                                <span>আরও জানুন</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
