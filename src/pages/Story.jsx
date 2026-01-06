import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Story = () => {
    const chapters = [
        {
            title: "Chapter I: The Spark",
            content: "It started with a look, a smile, and a feeling that would change everything for Viral and Rutu. In a world of billions, our paths crossed precisely when they were meant to.",
            color: "rgba(255, 62, 62, 0.1)"
        },
        {
            title: "Chapter II: Building RUVI",
            content: "Viral and Rutu spent hours talking, learning each other's dreams, fears, and favorite songs. Every conversation felt like adding another star to our own private RUVI galaxy.",
            color: "rgba(255, 255, 255, 0.05)"
        },
        {
            title: "Chapter III: The First Trip",
            content: "Discovering new horizons together. Whether it was a short drive or an overseas flight, every mile we traveled brought us closer to the home we found in each other.",
            color: "rgba(255, 62, 62, 0.1)"
        },
        {
            title: "Chapter IV: Standing Together",
            content: "Life isn't always smooth sailing, but with you by my side, Rutu, every challenge was just a minor turbulence on our way to greatness. You are my co-pilot forever.",
            color: "rgba(255, 255, 255, 0.05)"
        }
    ];

    return (
        <PageTransition>
            <div className="section" style={{ paddingTop: '150px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <span className="mono" style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'block', fontSize: '0.8rem', letterSpacing: '0.2em' }}>OUR NARRATIVE</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '4rem', fontWeight: 800, lineHeight: 1.1 }}>THE CHAPTERS <br /> <span className="shimmer">OF US</span></h1>

                    {chapters.map((chapter, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{
                                padding: '40px',
                                background: chapter.color,
                                borderLeft: index % 2 === 0 ? '4px solid var(--accent-color)' : '4px solid white',
                                marginBottom: '60px',
                                borderRadius: '0 24px 24px 0',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', letterSpacing: '0.1em', fontWeight: 700 }}>{chapter.title}</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
                                {chapter.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default Story;
