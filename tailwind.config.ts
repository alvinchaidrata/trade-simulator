import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark'    : '#212529',
                'light'   : '#f8f9fa',
                'confirm' : '#9cc5a1',
                'danger'  : '#f25f5c'
            },
        },
    },
    plugins: [],
};
export default config;
