import '@styles/main.scss';
import type { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <AnimateSharedLayout>
            <Component {...pageProps} />
        </AnimateSharedLayout>
    );
};

export default MyApp;
