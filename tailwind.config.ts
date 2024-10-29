import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "375px",
            },
            fontFamily: {
                poppins: ["var(--font-poppins)", "sans-serif"],
                rubik: ["var(--font-rubik)", "sans-serif"],
                inconsolata: ["var(--font-inconsolata)", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            keyframes: {
                flipDown: {
                    "0%": { transform: "rotateX(-90deg)", transformOrigin: "top", opacity: "0" },
                    "100%": { transform: "rotateX(0)", transformOrigin: "top", opacity: "1" },
                },
                grow: { "0%": { transform: "scale(0.01)" }, "100%": { transform: "scale(1)" } },
                slideDown: {
                    "0%": { opacity: "0", transform: "translateY(-50%)", visibility: "visible" },
                    "100%": { opacity: "1", transform: "translateY(0)", visibility: "visible" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(35px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideUpFast: {
                    "0%": { opacity: "0", transform: "translateY(15px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-40px)", visibility: "visible" },
                    "100%": { opacity: "1", transform: "translateX(0)", visibility: "visible" },
                },
            },
            animation: {
                grow: "grow 0.4s ease-in-out forwards",
                flipDown: "flipDown 0.3s forwards",
                slideInLeft: "slideInLeft 0.5s ease-in-out forwards",
                slideDown: "slideDown 0.3s ease-in-out forwards",
                slideUp: "slideUp 0.8s ease-in-out forwards",
                slideUpFast: "slideUpFast 0.4s ease-in-out forwards",
            },
        },
    },
    plugins: [],
};
export default config;
