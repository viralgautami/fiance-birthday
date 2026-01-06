import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-01-08T00:00:00').getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="floating-hearts">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: '110vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
                        animate={{
                            y: '-20vh',
                            opacity: [0, 0.4, 0],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear"
                        }}
                        style={{ position: 'fixed', color: 'var(--accent-color)', pointerEvents: 'none', zIndex: 0 }}
                    >
                        <Heart size={20 + Math.random() * 20} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="container"
                style={{ textAlign: 'center', zIndex: 2, padding: '0 20px' }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.5 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <Sparkles size={40} color="var(--accent-color)" />
                </motion.div>

                <h2 className="mono" style={{ color: 'var(--accent-color)', fontSize: '0.9rem', letterSpacing: '0.4em', marginBottom: '1.5rem' }}>
                    TO THE MOST BEAUTIFUL SOUL
                </h2>

                <h1 style={{
                    fontSize: 'clamp(3rem, 12vw, 6rem)',
                    fontWeight: 800,
                    lineHeight: 0.9,
                    marginBottom: '2rem',
                    letterSpacing: '-2px'
                }}>
                    HAPPY <br />
                    <span className="shimmer">BIRTHDAY</span> <br />
                    <span style={{ fontSize: '0.8em', fontWeight: 300 }}>RUTU</span>
                </h1>

                <div style={{ maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                    <p style={{
                        fontSize: 'clamp(1rem, 4vw, 1.3rem)',
                        color: 'var(--text-dim)',
                        lineHeight: 1.6,
                        fontWeight: 300
                    }}>
                        Twenty-five years ago, the universe became brighter because of you. Today, Viral celebrates the person who makes every orbit worthwhile.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '15px',
                    maxWidth: '450px',
                    margin: '0 auto'
                }}>
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="bordered-box" style={{ padding: '20px 0', background: 'rgba(255, 62, 62, 0.08)' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 800, display: 'block' }}>{String(value).padStart(2, '0')}</span>
                            <span className="mono" style={{ fontSize: '0.6rem', color: 'var(--accent-color)' }}>{unit}</span>
                        </div>
                    ))}
                </div>

                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ marginTop: '4rem' }}
                >
                    <div style={{ height: '80px', width: '1px', background: 'linear-gradient(to bottom, var(--accent-color), transparent)', margin: '0 auto' }}></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
