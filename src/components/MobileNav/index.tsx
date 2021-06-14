import styles from './MobileNav.module.scss';
import { createPortal } from 'react-dom';
import { PropsWithChildren } from 'react';

interface Props {
	closeNav: () => void;
}

export function MobileNav({ closeNav, children }: PropsWithChildren<Props>) {
	return createPortal(
		<div className={styles.mobileNav}>
			<div className={styles.navGroup} onClick={closeNav}>
				{children}
			</div>
		</div>,
		document.getElementById('mobile-nav')
	);
}
