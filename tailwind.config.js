// eslint-disable-next-line
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: { 'masis-green': '#a6c36f', 'ash-brown': '#493F2F' },
        },
        screens: {
            xs: '490px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px',
        },
    },
    plugins: [],
}
