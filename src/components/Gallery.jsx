import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Gallery = () => {
    const images = [
        { id: 1, src: '/assets/photo1.jpg', alt: 'Memory 1' },
        { id: 2, src: '/assets/photo2.jpg', alt: 'Memory 2' },
        { id: 3, src: '/assets/photo3.jpg', alt: 'Memory 3' },
        { id: 4, src: '/assets/photo4.jpg', alt: 'Memory 4' },
        { id: 5, src: '/assets/photo5.jpg', alt: 'Memory 5' },
        { id: 6, src: '/assets/photo6.jpg', alt: 'Memory 6' },
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontWeight: 300, letterSpacing: '0.2em' }}>OUR BEAUTIFUL MOMENTS</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '24px'
                }}>
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                                border: '1px solid rgba(255, 62, 62, 0.2)',
                                background: 'var(--surface-color)'
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{
                                    width: '100%',
                                    aspectRatio: '1',
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'brightness(0.9) contrast(1.1)'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '20px',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Heart size={20} fill="var(--accent-color)" color="transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-dim)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    Captured with love by Viral ❤️
                </p>
            </div>
        </section>
    );
};

export default Gallery;
