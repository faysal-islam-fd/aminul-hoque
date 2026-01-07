import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { candidateData } from '../data/siteData';
import PageHeader from '../components/PageHeader';
import './Contact.css';

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
        <div className="contact-page">
            <PageHeader
                title="যোগাযোগ"
                subtitle="আপনার মতামত, প্রশ্ন বা পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ"
            />

            <section className="section contact-main">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            data-aos="fade-right"
                        >
                            <h2>বার্তা পাঠান</h2>
                            <p>আপনার মতামত বা প্রশ্ন জানাতে নিচের ফর্মটি পূরণ করুন</p>

                            {submitted && (
                                <div className="success-message">
                                    ✓ আপনার বার্তা সফলভাবে পাঠানো হয়েছে!
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">নাম *</label>
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
                                        <label htmlFor="phone">মোবাইল *</label>
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

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">ইমেইল</label>
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
                                        <label htmlFor="subject">বিষয় *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="form-select"
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
                                    <label htmlFor="message">বার্তা *</label>
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
                        <motion.div
                            className="contact-info-wrapper"
                            data-aos="fade-left"
                        >
                            <div className="contact-info-card">
                                <h3>যোগাযোগের তথ্য</h3>

                                <div className="contact-info-list">
                                    <div className="contact-info-item">
                                        <div className="info-icon">
                                            <FaPhoneAlt />
                                        </div>
                                        <div>
                                            <span>ফোন</span>
                                            <p>{candidateData.contact.phone}</p>
                                            <p>{candidateData.contact.phone2}</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="info-icon">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <span>ইমেইল</span>
                                            <p>{candidateData.contact.email}</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="info-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <span>ঠিকানা</span>
                                            <p>{candidateData.contact.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-social">
                                    <h4>সোশ্যাল মিডিয়া</h4>
                                    <div className="social-links">
                                        <a href={candidateData.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                            <FaFacebookF />
                                        </a>
                                        <a href={candidateData.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                            <FaYoutube />
                                        </a>
                                        <a href={candidateData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                            <FaTwitter />
                                        </a>
                                        <a href={candidateData.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.108156440614!2d90.35282985!3d23.80635305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0c!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '16px' }}
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
