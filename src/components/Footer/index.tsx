import styles from './Footer.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
	return (
		<motion.div className={styles.footer} layoutId='footer'>
			<Link href='/#'>
				<a>
					<img
						src='/brand/logo_footer.png'
						alt='logo'
						className={styles.footerLogo}
					/>
				</a>
			</Link>
			<p className={styles.copyright}>COPYRIGHT © 2021 BUCKO.GRAPHICS</p>
		</motion.div>
	);
}
