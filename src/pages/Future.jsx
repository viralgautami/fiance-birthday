import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Future = () => {
    const dreams = [
        "Viral and Rutu traveling to every continent together.",
        "Building a RUVI home filled with laughter and love.",
        "Growing old while never losing our childish joy with Rutu.",
        "Supporting each other through every new mission of life."
    ];

    return (
        <PageTransition>
            <div className="section" style={{ paddingTop: '150px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="mono" style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'block', fontSize: '0.8rem', letterSpacing: '0.2em' }}>DESTINATION: ETERNITY</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 800, marginBottom: '3rem', lineHeight: 1.1 }}>BEYOND <br /><span className="shimmer">THE STARS</span></h1>

                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {dreams.map((dream, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="bordered-box"
                                style={{
                                    padding: '25px',
                                    marginBottom: '20px',
                                    fontSize: '1.1rem',
                                    letterSpacing: '0.05em',
                                    borderRadius: '16px'
                                }}
                            >
                                {dream}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        style={{ marginTop: '5rem' }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.2em' }}>TO BE CONTINUED...</h2>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Future;
