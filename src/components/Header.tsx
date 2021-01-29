import styles from '../styles/Header.module.scss';
import Link from 'next/link';

export function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Link href='/#'>
					<a className={styles.headerImg}>
						<img src='/logo.png' alt='logo' />
					</a>
				</Link>
				<Link href='/#'>
					<a className={styles.navItem}>Home</a>
				</Link>
				<Link href='/#Work'>
					<a className={styles.navItem}>Our Work</a>
				</Link>
				<Link href='/#About'>
					<a className={styles.navItem}>About</a>
				</Link>
				<Link href='/#contact'>
					<a className={styles.navItem}>Contact</a>
				</Link>
				<Link href='/blog'>
					<a className={styles.navItem}>Blog</a>
				</Link>
			</div>
		</div>
	);
}
