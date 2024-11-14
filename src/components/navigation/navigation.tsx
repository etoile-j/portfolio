"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NavigationMenu from "./navigationMenu";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={menuRef} className="absolute right-0 md:right-[-60px]">
            <button
                className="w-14 h-14 mr-5 p-3.5 bg-violet-400 rounded-full border border-gray-200 shadow-lg opacity-40 hover:opacity-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Image src="/images/icons/menu.svg" alt="메뉴 아이콘" width={28} height={28} />
            </button>

            {isMenuOpen && (
                <div className="absolute top-16">
                    <NavigationMenu />
                </div>
            )}
        </div>
    );
};

export default Navigation;
