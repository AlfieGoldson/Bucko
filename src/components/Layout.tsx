import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

import styles from '../styles/Layout.module.scss';

interface Props {}

export function Layout({ children }: PropsWithChildren<Props>) {
	return (
		<div className={styles.pageContainer}>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
}
