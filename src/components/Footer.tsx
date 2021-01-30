import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

export function Footer() {
	return (
		<div className={styles.footer}>
			<Link href='/#'>
				<a>
					<img
						src='/logo_footer.png'
						alt='logo'
						className={styles.footerLogo}
					/>
				</a>
			</Link>
			<p className={styles.copyright}>COPYRIGHT © 2021 PARO.STUDIO</p>
		</div>
	);
}
