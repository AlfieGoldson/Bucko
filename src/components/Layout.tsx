import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface Props {}

export function Layout({ children }: PropsWithChildren<Props>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
