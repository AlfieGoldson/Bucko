import styles from './NavLinks.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const NavLinks = () => {
	const router = useRouter();

	const navLinks = [
		{ name: 'Accueil', href: '/' },
		{ name: 'Travaux', href: '/work' },
		{ name: 'À Propos', href: '/about' },
	];

	return (
		<>
			{navLinks.map(({ name, href }) => (
				<Link href={href}>
					<a
						className={`${styles.navItem} ${
							router.pathname === href ? styles.active : ''
						}`}
					>
						{name}
					</a>
				</Link>
			))}
			<Link href='/#'>
				<a className={`${styles.navItem} ${styles.cta}`}>
					Nous Contacter
				</a>
			</Link>
		</>
	);
};
