import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Moon, Star } from 'lucide-react';

const Timeline = () => {
    const events = [
        { icon: <Sparkles size={20} />, title: 'WHERE IT BEGAN', desc: 'The moment the stars aligned and I found you, Rutu.' },
        { icon: <Moon size={20} />, title: 'EVERY NIGHT', desc: 'Thinking of our future under the same sky, dreaming of RUVI.' },
        { icon: <Star size={20} />, title: 'EVERY DAY', desc: 'Loving you more with every sunrise, Viral loves you.' },
        { icon: <Heart size={20} />, title: 'YOUR 25TH BIRTHDAY', desc: 'Celebrating the most beautiful soul in the universe.' }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontWeight: 300, letterSpacing: '0.2em' }}>JOURNEY OF LOVE</h2>
                <div className="timeline-grid">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="bordered-box"
                            style={{
                                marginBottom: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                borderRadius: '24px',
                                borderColor: 'rgba(255, 62, 62, 0.2)',
                                background: 'rgba(255, 62, 62, 0.05)'
                            }}
                        >
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                                {event.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>{event.title}</h3>
                            <p style={{ color: 'var(--text-dim)', lineHeight: '1.6' }}>{event.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
