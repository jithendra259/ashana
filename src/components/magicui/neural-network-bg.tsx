"use client";

import { useEffect, useRef } from 'react';

export const NeuralNetworkBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollOffsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Node class
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: Node[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.connections = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > (canvas?.width ?? 0)) this.vx *= -1;
        if (this.y < 0 || this.y > (canvas?.height ?? 0)) this.vy *= -1;
      }      draw() {
        const adjustedY = this.y - (scrollOffsetRef.current * 0.5); // Parallax effect
        // Draw glow effect
        const gradient = ctx!.createRadialGradient(this.x, adjustedY, 0, this.x, adjustedY, 8);
        gradient.addColorStop(0, 'rgba(80, 70, 230, 0.3)');
        gradient.addColorStop(1, 'rgba(80, 70, 230, 0)');
        
        ctx!.beginPath();
        ctx!.arc(this.x, adjustedY, 8, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        // Draw node        ctx!.beginPath();
        ctx!.arc(this.x, adjustedY, 2, 0, Math.PI * 2);
        ctx!.fillStyle = '#5046e6';
        ctx!.fill();

        // Draw connections with gradient
        this.connections.forEach(node => {
          const adjustedNodeY = node.y - (scrollOffsetRef.current * 0.5); // Parallax effect for connected nodes
          const distance = Math.hypot(this.x - node.x, adjustedY - adjustedNodeY);
          if (distance < 150) {
            const gradient = ctx!.createLinearGradient(this.x, this.y, node.x, node.y);
            gradient.addColorStop(0, 'rgba(106, 17, 203, 0.5)');    // Purple
            gradient.addColorStop(1, 'rgba(37, 117, 252, 0.5)');    // Blue
              ctx!.beginPath();
            ctx!.moveTo(this.x, adjustedY);
            ctx!.lineTo(node.x, adjustedNodeY);
            ctx!.strokeStyle = gradient;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        });
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.floor((canvas.width * canvas.height) / 20000); // Adjust density
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Connect nodes
    nodes.forEach(node => {
      const connectionsCount = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < connectionsCount; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (randomNode !== node && !node.connections.includes(randomNode)) {
          node.connections.push(randomNode);
        }
      }
    });

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full bg-[#0c0c0c]"
      aria-hidden="true"
    />
  );
};
