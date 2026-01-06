import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let w, h;
        const stars = [];
        const numStars = 150;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 2;
                this.velocity = Math.random() * 0.1 + 0.05;
                this.opacity = Math.random();
                this.fadeSpeed = Math.random() * 0.01 + 0.002;
                this.direction = 1;
                this.isHeart = Math.random() > 0.92;
            }

            update() {
                this.y -= this.velocity;
                if (this.y < 0) this.y = h;

                this.opacity += this.fadeSpeed * this.direction;
                if (this.opacity > 1 || this.opacity < 0.1) {
                    this.direction *= -1;
                }
            }

            draw() {
                if (this.isHeart) {
                    this.drawHeart(this.x, this.y, this.size * 2.5);
                } else {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            drawHeart(x, y, size) {
                ctx.save();
                ctx.translate(x, y);
                ctx.beginPath();
                const d = size;
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-d / 2, -d / 2, -d, d / 3, 0, d);
                ctx.bezierCurveTo(d, d / 3, d / 2, -d / 2, 0, 0);
                ctx.fillStyle = `rgba(255, 62, 62, ${this.opacity * 0.7})`;
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        const render = () => {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, w, h);

            const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w);
            grad.addColorStop(0, 'rgba(40, 0, 0, 0.2)');
            grad.addColorStop(1, 'black');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            stars.forEach(star => {
                star.update();
                star.draw();
            });
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    );
};

export default Starfield;
