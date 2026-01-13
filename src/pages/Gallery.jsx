import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

// Import all gallery images
import img1 from '../assets/images/463813072_1073420937500952_11384.png';
import img2 from '../assets/images/608715721_1398078648368511_82649.png';
import img3 from '../assets/images/607651435_1394573605385682_34534.png';
import img4 from '../assets/images/612132175_1401137684729274_84437.png';
import img5 from '../assets/images/605116932_1391788972330812_43191.png';
import img6 from '../assets/images/605129893_1395291801980529_45492.png';
import img7 from '../assets/images/475971111_1147663260076719_67573.png';
import img8 from '../assets/images/479185237_1151552559687789_89448.png';
import img9 from '../assets/images/480999363_1156654902510888_71015.png';
import img10 from '../assets/images/610881490_1398664928309883_64986.png';
import img11 from '../assets/images/610920953_1398686748307701_10083.png';
import img12 from '../assets/images/611658446_1398664978309878_77424.png';
import img13 from '../assets/images/613661364_1403225744520468_31375.png';
import img14 from '../assets/images/614052904_1402684657907910_71930.png';
import img15 from '../assets/images/615309730_1404655214377521_29495.png';
import img16 from '../assets/images/615377800_1404654977710878_86709.png';
import img17 from '../assets/images/615416672_1404655477710828_73718.png';
import img18 from '../assets/images/615428918_1404655047710871_14325.png';

// Gallery images with real campaign photos
const galleryImages = [
    { id: 1, src: img1, alt: "আমিনুল হক - প্রোফাইল পোর্ট্রেট", category: "প্রোফাইল" },
    { id: 2, src: img2, alt: "আমিনুল হক - অফিসিয়াল ক্যাম্পেইন ফটো", category: "প্রোফাইল" },
    { id: 3, src: img3, alt: "ধানের শীষে ভোট দিন - নির্বাচনী প্রচারণা", category: "ক্যাম্পেইন" },
    { id: 4, src: img4, alt: "সবার আগে বাংলাদেশ - ক্যাম্পেইন পোস্টার", category: "ক্যাম্পেইন" },
    { id: 5, src: img5, alt: "জনসভায় বাংলাদেশের পতাকা হাতে", category: "রাজনীতি" },
    { id: 6, src: img6, alt: "নেত্রীর সাথে সাক্ষাৎ", category: "রাজনীতি" },
    { id: 7, src: img7, alt: "ট্রফি গ্রহণ অনুষ্ঠান", category: "সম্মাননা" },
    { id: 8, src: img8, alt: "রাজনৈতিক কর্মসূচিতে অংশগ্রহণ", category: "রাজনীতি" },
    { id: 9, src: img9, alt: "জাতীয় দলের গোলরক্ষক", category: "ক্রীড়া" },
    { id: 10, src: img10, alt: "আমিনুল হক - ফর্মাল পোর্ট্রেট", category: "প্রোফাইল" },
    { id: 11, src: img11, alt: "দোয়া ও মুনাজাত অনুষ্ঠান", category: "সমাজসেবা" },
    { id: 12, src: img12, alt: "আমিনুল হক - পোর্ট্রেট", category: "প্রোফাইল" },
    { id: 13, src: img13, alt: "যুব ফুটবল টুর্নামেন্ট - সেরা খেলোয়াড় পুরস্কার", category: "সমাজসেবা" },
    { id: 14, src: img14, alt: "বিএনপি চেয়ারম্যান তারেক রহমান", category: "রাজনীতি" },
    { id: 15, src: img15, alt: "জিয়া অনূর্ধ্ব-১৪ ফুটবল টুর্নামেন্ট - চ্যাম্পিয়ন দল", category: "সমাজসেবা" },
    { id: 16, src: img16, alt: "টুর্নামেন্ট ফাইনাল - পুরস্কার বিতরণ", category: "সমাজসেবা" },
    { id: 17, src: img17, alt: "যুব ফুটবল টুর্নামেন্ট - বিজয়ী দল", category: "সমাজসেবা" },
    { id: 18, src: img18, alt: "টুর্নামেন্ট পুরস্কার প্রদান অনুষ্ঠান", category: "সমাজসেবা" }
];

const categories = ["সব", "প্রোফাইল", "ক্যাম্পেইন", "রাজনীতি", "ক্রীড়া", "সমাজসেবা", "সম্মাননা"];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("সব");

    const filteredImages = activeCategory === "সব"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const openModal = (image, index) => {
        setSelectedImage(image);
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        const newIndex = (selectedIndex + 1) % filteredImages.length;
        setSelectedIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div>
            <PageHeader
                title="গ্যালারি"
                subtitle="জনগণের সাথে আমাদের যাত্রার অবিস্মরণীয় মুহূর্তগুলো"
            />

            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                                    ${activeCategory === category
                                        ? 'bg-green-700 text-white shadow-green'
                                        : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <AnimatePresence>
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 50}
                                    onClick={() => openModal(image, index)}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                        flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaExpand className="text-white text-2xl mb-3" />
                                        <span className="bg-green-700/80 text-white text-xs px-3 py-1 rounded-full mb-2">
                                            {image.category}
                                        </span>
                                        <p className="text-white text-sm text-center line-clamp-2">{image.alt}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">এই বিভাগে কোনো ছবি নেই</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <button
                            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full 
                                text-white text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full 
                                text-white text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <FaChevronLeft />
                        </button>
                        <motion.div
                            className="max-w-4xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-xl"
                            />
                            <div className="text-center mt-4">
                                <span className="bg-green-700 text-white text-sm px-4 py-1 rounded-full">
                                    {selectedImage.category}
                                </span>
                                <p className="text-white mt-3">{selectedImage.alt}</p>
                            </div>
                        </motion.div>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full 
                                text-white text-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
