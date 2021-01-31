import styles from '../styles/MobileNav.module.scss';
import Link from 'next/link';
import { createPortal } from 'react-dom';

interface Props {
	closeNav: () => void;
}

export function MobileNav({ closeNav }: Props) {
	return createPortal(
		<div className={styles.mobileNav}>
			<a onClick={closeNav} className={styles.closeBtn}>
				X
			</a>
			Mobile
		</div>,
		document.getElementById('mobile-nav')
	);
}
