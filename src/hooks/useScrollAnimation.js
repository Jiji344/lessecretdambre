import { useEffect } from 'react';

/**
 * Custom hook to trigger animations when elements enter viewport
 * Using Intersection Observer API for better performance
 */
export const useScrollAnimation = (options = {}) => {
    useEffect(() => {
        const {
            threshold = 0.1,
            rootMargin = '0px',
            triggerOnce = true
        } = options;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // If triggerOnce is true, stop observing after animation
                    if (triggerOnce) {
                        observer.unobserve(entry.target);
                    }
                } else if (!triggerOnce) {
                    entry.target.classList.remove('animate-in');
                }
            });
        }, {
            threshold,
            rootMargin
        });

        // Observe all elements with data-animate attribute
        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach(el => observer.observe(el));

        // Cleanup
        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, [options]);
};

/**
 * Hook for parallax effect on scroll
 * Desktop only for performance
 */
export const useParallax = (elementId, intensity = 0.3) => {
    useEffect(() => {
        // Only on desktop
        if (window.innerWidth < 1024) return;

        const element = document.getElementById(elementId);
        if (!element) return;

        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const translateY = scrolled * intensity;
            element.style.transform = `translateY(${translateY}px)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (element) element.style.transform = '';
        };
    }, [elementId, intensity]);
};

export default useScrollAnimation;
