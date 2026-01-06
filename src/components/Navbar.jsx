import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Our Story', path: '/story' },
        { name: 'Memories', path: '/memories' },
        { name: 'Future', path: '/future' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '24px',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)',
            backdropFilter: 'blur(10px)'
        }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <motion.span
                    style={{
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        letterSpacing: '0.2em',
                        color: 'white',
                        border: '2px solid var(--accent-color)',
                        padding: '4px 12px',
                        borderRadius: '8px'
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px var(--accent-color)' }}
                >
                    RUVI
                </motion.span>
            </NavLink>

            {/* Desktop Links */}
            <div className="desktop-nav" style={{ display: 'none', gap: '32px' }}>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            letterSpacing: '0.15em',
                            color: isActive ? 'var(--accent-color)' : 'rgba(255,255,255,0.7)',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            fontWeight: isActive ? 700 : 400
                        })}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div onClick={() => setIsOpen(!isOpen)} style={{ color: 'white', cursor: 'pointer', zIndex: 1001 }}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          nav > div:last-of-type { display: none !important; }
        }
      `}</style>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--bg-color)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '40px',
                            padding: '40px',
                            zIndex: 1000
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                    fontSize: '1.8rem',
                                    fontWeight: 700,
                                    color: isActive ? 'var(--accent-color)' : 'white',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
