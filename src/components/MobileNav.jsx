import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaEye, FaHandsHelping, FaPhone } from 'react-icons/fa';
import './MobileNav.css';

const MobileNav = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: FaHome, label: 'হোম' },
        { path: '/about', icon: FaUser, label: 'পরিচিতি' },
        { path: '/vision', icon: FaEye, label: 'রূপকল্প' },
        { path: '/services', icon: FaHandsHelping, label: 'সেবা' },
        { path: '/contact', icon: FaPhone, label: 'যোগাযোগ' },
    ];

    return (
        <nav className="mobile-bottom-nav">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `mobile-nav-item ${isActive ? 'active' : ''}`
                    }
                >
                    <item.icon className="nav-icon" />
                    <span>{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default MobileNav;
