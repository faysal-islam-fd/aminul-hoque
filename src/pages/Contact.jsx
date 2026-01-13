import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { candidateData } from '../data/siteData';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });

            setTimeout(() => setSubmitted(false), 5000);
        }, 2000);
    };

    return (
        <div>
            <PageHeader
                title="যোগাযোগ"
                subtitle="আপনার মতামত, প্রশ্ন বা পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ"
            />

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-xl p-8"
                            data-aos="fade-right"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">বার্তা পাঠান</h2>
                            <p className="text-gray-600 mb-6">আপনার মতামত বা প্রশ্ন জানাতে নিচের ফর্মটি পূরণ করুন</p>

                            {submitted && (
                                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl mb-6 font-medium">
                                    ✓ আপনার বার্তা সফলভাবে পাঠানো হয়েছে!
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">নাম *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="আপনার নাম"
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">মোবাইল *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="০১XXXXXXXXX"
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">ইমেইল</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="example@email.com"
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">বিষয় *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        >
                                            <option value="">বিষয় নির্বাচন করুন</option>
                                            <option value="general">সাধারণ জিজ্ঞাসা</option>
                                            <option value="complaint">অভিযোগ</option>
                                            <option value="suggestion">পরামর্শ</option>
                                            <option value="volunteer">স্বেচ্ছাসেবক হতে চাই</option>
                                            <option value="media">মিডিয়া যোগাযোগ</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">বার্তা *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="আপনার বার্তা লিখুন..."
                                        required
                                        className="form-textarea"
                                        rows="5"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg w-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            <span>পাঠানো হচ্ছে...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            <span>বার্তা পাঠান</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div data-aos="fade-left" className="space-y-6">
                            <div className="bg-gradient-green text-white rounded-2xl p-8 shadow-green">
                                <h3 className="text-xl font-bold mb-6">যোগাযোগের তথ্য</h3>

                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FaPhoneAlt className="text-gold-400" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-sm">ফোন</span>
                                            <p className="font-medium">{candidateData.contact.phone}</p>
                                            <p className="font-medium">{candidateData.contact.phone2}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FaEnvelope className="text-gold-400" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-sm">ইমেইল</span>
                                            <p className="font-medium">{candidateData.contact.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <FaMapMarkerAlt className="text-gold-400" />
                                        </div>
                                        <div>
                                            <span className="text-white/60 text-sm">ঠিকানা</span>
                                            <p className="font-medium">{candidateData.contact.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/20">
                                    <h4 className="text-sm text-white/60 mb-4">সোশ্যাল মিডিয়া</h4>
                                    <div className="flex gap-3">
                                        <a href={candidateData.social.facebook} target="_blank" rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center 
                                            hover:bg-blue-600 transition-colors" aria-label="Facebook">
                                            <FaFacebookF />
                                        </a>
                                        <a href={candidateData.social.youtube} target="_blank" rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center 
                                            hover:bg-red-600 transition-colors" aria-label="YouTube">
                                            <FaYoutube />
                                        </a>
                                        <a href={candidateData.social.twitter} target="_blank" rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center 
                                            hover:bg-sky-500 transition-colors" aria-label="Twitter">
                                            <FaTwitter />
                                        </a>
                                        <a href={candidateData.social.instagram} target="_blank" rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center 
                                            hover:bg-pink-600 transition-colors" aria-label="Instagram">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.108156440614!2d90.35282985!3d23.80635305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0c!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
