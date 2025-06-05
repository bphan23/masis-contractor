const tailwindConfig = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'masis-green': '#a6c36f',
                'ash-brown': '#493F2F',
                'masis-blue': '#131B30',
                'off-white': '#f7f4ed',
                'masis-orange': '#ff4b16',
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
            },
        },
        screens: {
            xs: '490px',
            sm: '680px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px',
        },
    },
    plugins: [],
}

export default tailwindConfig
