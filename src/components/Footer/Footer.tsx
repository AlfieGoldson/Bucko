import styles from './Footer.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer = (): JSX.Element => {
    return (
        <motion.div className={styles.footer} layoutId="footer">
            <Link href="/#">
                <a className={styles.footerLogo}>
                    {/* TODO: use .svg */}
                    <img src="/brand/logo_footer.png" alt="logo" />
                </a>
            </Link>
            <p className={styles.copyright}>COPYRIGHT © 2021 BUCKO.GRAPHICS</p>
        </motion.div>
    );
};
