import { useEffect, useRef, useState } from 'react';

const DEFAULT_OPTIONS = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

export default function ScrollReveal({ children, className = '', animation = 'fade-up', delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      DEFAULT_OPTIONS
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
