import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { candidateData, navLinks } from '../data/siteData';
import './Footer.css';

const Footer = () => {
    const quickLinks = navLinks.slice(0, 7);
    const serviceLinks = [
        { path: '/services/voter-center', label: 'ভোট কেন্দ্র' },
        { path: '/services/volunteer', label: 'স্বেচ্ছাসেবক' },
        { path: '/services/complaints', label: 'অভিযোগ' },
        { path: '/contact', label: 'মন্তব্য' },
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <div className="logo-icon">
                                    <span>আ</span>
                                </div>
                                <div className="logo-text">
                                    <span className="logo-name">{candidateData.shortName}</span>
                                    <span className="logo-tagline">{candidateData.subtitle}</span>
                                </div>
                            </Link>
                            <p className="footer-description">
                                শিক্ষা, কৃষি, শিল্প ও সংস্কৃতিতে টেকসই উন্নয়নের মাধ্যমে একটি সমৃদ্ধ বাংলাদেশ গড়ার প্রতিশ্রুতি।
                            </p>
                            <div className="footer-social">
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

                        {/* Quick Links */}
                        <div className="footer-links">
                            <h4>দ্রুত লিংক</h4>
                            <ul>
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>→ {link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-links">
                            <h4>সেবা সমূহ</h4>
                            <ul>
                                {serviceLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path}>→ {link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-contact">
                            <h4>যোগাযোগ</h4>
                            <ul>
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>{candidateData.contact.address}</span>
                                </li>
                                <li>
                                    <FaPhoneAlt />
                                    <span>{candidateData.contact.phone}</span>
                                </li>
                                <li>
                                    <FaEnvelope />
                                    <span>{candidateData.contact.email}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© ২০২৬ {candidateData.shortName}। সর্বস্বত্ব সংরক্ষিত।</p>
                    <p>ডেভেলপড বাই <a href="https://nitltd.com" target="_blank" rel="noopener noreferrer">NIT LTD</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
