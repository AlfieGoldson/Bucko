import styles from '../styles/Button.module.scss';
import Link from 'next/link';

interface Props {
	title: string;
	href: string;
}

export function Button({ title, href }: Props) {
	return (
		<Link href={href}>
			<a className={styles.button}>{title}</a>
		</Link>
	);
}
