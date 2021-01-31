import '../styles/main.scss';
import type { AppProps } from 'next/app';
import { AnimateSharedLayout, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<AnimateSharedLayout>
			<Component {...pageProps} />
		</AnimateSharedLayout>
	);
}

export default MyApp;
