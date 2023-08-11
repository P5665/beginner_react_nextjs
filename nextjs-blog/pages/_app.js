import '../styles/globals.css';
// Created a shared layout between page changes
// Inject additional data into pages
// Add global CSS
// If changes arent appiend make sure that you restart server
export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
