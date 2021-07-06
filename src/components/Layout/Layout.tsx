import { ReactNode } from 'react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import styles from './Layout.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface Props {
    children: ReactNode;
}

export function Layout({ children }: Props): JSX.Element {
    const router = useRouter();

    return (
        <div className={styles.pageContainer}>
            <Header />
            <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                    pageInitial: {
                        opacity: 0,
                        y: 100,
                    },
                    pageAnimate: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                }}
            >
                {children}
            </motion.div>
            <Footer />
        </div>
    );
}
