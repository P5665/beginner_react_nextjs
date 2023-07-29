import "../styles/globals.css";
// Created a shared layout between page changes
// Inject additional data into pages
// Add global CSS
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
