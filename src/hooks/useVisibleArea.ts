import { useState, useCallback, useEffect } from "react";
import { projects } from "@/data";

export const useVisibleArea = () => {
    const [visibleArea, setVisibleArea] = useState("");

    const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setVisibleArea(entry.target.id);
            }
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.15,
        });

        const areas = ["skills", ...projects.map((p) => p.title)];
        areas.forEach((area) => {
            const element = document.getElementById(area);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [handleIntersect]);

    return visibleArea;
};
