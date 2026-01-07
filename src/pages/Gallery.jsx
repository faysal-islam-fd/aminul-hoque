import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import './Gallery.css';

// Gallery images - using working image URLs
const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
        alt: "আমিনুল হক - অফিসিয়াল পোর্ট্রেট",
        category: "প্রোফাইল"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
        alt: "আমিনুল হক - ফুল পোর্ট্রেট",
        category: "প্রোফাইল"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80",
        alt: "ফুটবল মাঠে গোলরক্ষক",
        category: "ক্যারিয়ার"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
        alt: "ফুটবল খেলোয়াড় উদযাপন",
        category: "ক্যারিয়ার"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
        alt: "জনসভায় অংশগ্রহণ",
        category: "রাজনীতি"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
        alt: "গণসংযোগ কার্যক্রম",
        category: "কার্যক্রম"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
        alt: "সম্মেলনে বক্তব্য",
        category: "রাজনীতি"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
        alt: "জনসমাবেশ",
        category: "কার্যক্রম"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80",
        alt: "ক্রীড়া সম্মাননা",
        category: "সম্মাননা"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80",
        alt: "সাংস্কৃতিক অনুষ্ঠান",
        category: "সংস্কৃতি"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80",
        alt: "শিক্ষা কার্যক্রম",
        category: "সমাজসেবা"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
        alt: "দাতব্য কর্মসূচি",
        category: "সমাজসেবা"
    }
];

const categories = ["সব", "প্রোফাইল", "ক্যারিয়ার", "রাজনীতি", "কার্যক্রম", "সম্মাননা", "সংস্কৃতি", "সমাজসেবা"];

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
        <div className="gallery-page">
            <PageHeader
                title="গ্যালারি"
                subtitle="জনগণের সাথে আমাদের যাত্রার অবিস্মরণীয় মুহূর্তগুলো"
            />

            <section className="section gallery-main">
                <div className="container">
                    {/* Category Filter */}
                    <div className="gallery-filter" data-aos="fade-up">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid-full">
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className="gallery-item-full"
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                                onClick={() => openModal(image, index)}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                layout
                            >
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className="gallery-overlay">
                                    <div className="gallery-overlay-content">
                                        <FaExpand className="expand-icon" />
                                        <span className="gallery-category">{image.category}</span>
                                        <p className="gallery-alt">{image.alt}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="no-images">
                            <p>এই বিভাগে কোনো ছবি নেই</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="gallery-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <button className="modal-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                            <FaChevronLeft />
                        </button>
                        <motion.div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                            />
                            <div className="modal-caption">
                                <span className="caption-category">{selectedImage.category}</span>
                                <p>{selectedImage.alt}</p>
                            </div>
                        </motion.div>
                        <button className="modal-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
