"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface PhotoGridProps {
  images: { src: string; alt: string }[];
}

export const PhotoGrid = ({ images }: PhotoGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-100', 'opacity-100');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const container = containerRef.current;
    if (container) {
      const items = container.querySelectorAll('.grid-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 relative"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`grid-item relative overflow-hidden rounded-2xl transform scale-95 opacity-0 transition-all duration-700 ease-out shadow-lg hover:shadow-2xl ${
            index % 3 === 0 ? 'rotate-2' : 
            index % 3 === 1 ? '-rotate-2' : 'rotate-0'
          }`}
          style={{ 
            transitionDelay: `${index * 100}ms`,
            aspectRatio: '1'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 mix-blend-overlay" />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
};
