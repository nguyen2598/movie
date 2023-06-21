import { useEffect, useState } from 'react';

export function useScrollY() {
    const [scrollY, setScrollY] = useState(false);

    const handleScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.removeEventListener('scroll', handleScrollY);
        };
    }, []);

    return [scrollY];
}
