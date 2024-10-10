import { useEffect, useState } from "react";

const useSlideUp = (ref: React.RefObject<HTMLElement>, threshold: number = 0.6) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // 요소가 보이면 관찰 중지
                }
            },
            {
                threshold: threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, threshold]);

    return { isVisible };
};

export default useSlideUp;
