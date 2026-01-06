import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Story from './pages/Story';
import Future from './pages/Future';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <PageTransition>
                        <Hero />
                        <Timeline />
                        <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 62, 62, 0.05))' }}>
                            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    className="bordered-box"
                                    style={{ padding: '60px 40px' }}
                                >
                                    <Heart size={30} fill="var(--accent-color)" style={{ marginBottom: '2rem' }} />
                                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 300 }}>DEAREST RUTU,</h2>
                                    <p style={{ fontSize: '1.2rem', lineHeight: '2', color: 'var(--text-dim)', textAlign: 'justify', marginBottom: '2rem' }}>
                                        As you turn 25 today, I find myself reflecting on all the moments that brought us here. You are not just the person I love; you are my best friend, my greatest adventure, and my home. This little corner of the internet is a tribute to you—to your kindness, your laughter, and the way you make every ordinary day feel like a cosmic event.
                                        <br /><br />
                                        Happy Birthday, my love. Here's to twenty-five years of you, and an eternity more of us.
                                    </p>
                                    <span className="mono" style={{ fontSize: '0.9rem', color: 'var(--accent-color)' }}>ALWAYS YOURS, VIRAL</span>
                                </motion.div>
                            </div>
                        </section>
                    </PageTransition>
                } />
                <Route path="/story" element={<Story />} />
                <Route path="/memories" element={
                    <PageTransition>
                        <Gallery />
                    </PageTransition>
                } />
                <Route path="/future" element={<Future />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Starfield />
                <Navbar />
                <AnimatedRoutes />

                <footer style={{ padding: '60px 40px', textAlign: 'center', opacity: 0.5, position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>RUVI_OS // FOR RUTU FROM VIRAL // 25TH BIRTHDAY EDITION</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
