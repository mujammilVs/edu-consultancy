"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useScrollAnimation(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold]);

    return { ref, isVisible };
}

export function useCounter(end: number, duration = 2000, start = 0) {
    const [count, setCount] = useState(start);
    const [isStarted, setIsStarted] = useState(false);

    const startCounting = useCallback(() => {
        setIsStarted(true);
    }, []);

    useEffect(() => {
        if (!isStarted) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * (end - start) + start));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [isStarted, end, start, duration]);

    return { count, startCounting };
}
