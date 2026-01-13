import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEye, FaHandsHelping, FaPhone } from 'react-icons/fa';

const MobileNav = () => {
    const navItems = [
        { path: '/', icon: FaHome, label: 'হোম' },
        { path: '/about', icon: FaUser, label: 'পরিচিতি' },
        { path: '/vision', icon: FaEye, label: 'রূপকল্প' },
        { path: '/services', icon: FaHandsHelping, label: 'সেবা' },
        { path: '/contact', icon: FaPhone, label: 'যোগাযোগ' },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[1000] 
            bg-white/95 backdrop-blur-[10px] border-t border-gray-200 shadow-lg">
            <div className="flex items-center justify-around h-[65px]">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all
                            ${isActive
                                ? 'text-green-700 bg-green-50'
                                : 'text-gray-500 hover:text-green-700'}`
                        }
                    >
                        <item.icon className={`text-lg`} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default MobileNav;
