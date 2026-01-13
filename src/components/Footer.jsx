import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { candidateData, navLinks } from '../data/siteData';

const Footer = () => {
    const quickLinks = navLinks.slice(0, 7);
    const serviceLinks = [
        { path: '/services/voter-center', label: 'ভোট কেন্দ্র' },
        { path: '/services/volunteer', label: 'স্বেচ্ছাসেবক' },
        { path: '/services/complaints', label: 'অভিযোগ' },
        { path: '/contact', label: 'মন্তব্য' },
    ];

    return (
        <footer className="bg-gradient-dark text-white pb-[80px] lg:pb-0">
            {/* Footer Top */}
            <div className="py-12 md:py-16 border-b border-white/10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-6 group">
                                <div className="w-12 h-12 rounded-full bg-gradient-red flex items-center justify-center shadow-red">
                                    <span className="text-white text-2xl font-bold">আ</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-xl group-hover:text-gold-300 transition-colors">
                                        {candidateData.shortName}
                                    </span>
                                    <span className="text-white/60 text-sm">
                                        {candidateData.subtitle}
                                    </span>
                                </div>
                            </Link>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                শিক্ষা, কৃষি, শিল্প ও সংস্কৃতিতে টেকসই উন্নয়নের মাধ্যমে একটি সমৃদ্ধ বাংলাদেশ গড়ার প্রতিশ্রুতি।
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href={candidateData.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                                        text-white hover:bg-blue-600 transition-all duration-200"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href={candidateData.social.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                                        text-white hover:bg-red-600 transition-all duration-200"
                                >
                                    <FaYoutube />
                                </a>
                                <a
                                    href={candidateData.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                                        text-white hover:bg-sky-500 transition-all duration-200"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href={candidateData.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                                        text-white hover:bg-pink-600 transition-all duration-200"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 relative 
                                after:content-[''] after:absolute after:left-0 after:-bottom-2 
                                after:w-10 after:h-0.5 after:bg-gold-400">
                                দ্রুত লিংক
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-white/70 hover:text-gold-400 transition-colors text-sm flex items-center gap-2"
                                        >
                                            <span className="text-gold-400">→</span> {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 relative 
                                after:content-[''] after:absolute after:left-0 after:-bottom-2 
                                after:w-10 after:h-0.5 after:bg-gold-400">
                                সেবা সমূহ
                            </h4>
                            <ul className="space-y-3">
                                {serviceLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-white/70 hover:text-gold-400 transition-colors text-sm flex items-center gap-2"
                                        >
                                            <span className="text-gold-400">→</span> {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 relative 
                                after:content-[''] after:absolute after:left-0 after:-bottom-2 
                                after:w-10 after:h-0.5 after:bg-gold-400">
                                যোগাযোগ
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-white/70">
                                    <FaMapMarkerAlt className="text-gold-400 mt-1 flex-shrink-0" />
                                    <span className="text-sm">{candidateData.contact.address}</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/70">
                                    <FaPhoneAlt className="text-gold-400 flex-shrink-0" />
                                    <span className="text-sm">{candidateData.contact.phone}</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/70">
                                    <FaEnvelope className="text-gold-400 flex-shrink-0" />
                                    <span className="text-sm">{candidateData.contact.email}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="py-6">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="text-white/60 text-sm">
                        © ২০২৬ {candidateData.shortName}। সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <p className="text-white/60 text-sm">
                        ডেভেলপড বাই{' '}
                        <a
                            href="https://nitltd.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold-400 hover:text-gold-300 transition-colors"
                        >
                            NIT LTD
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
