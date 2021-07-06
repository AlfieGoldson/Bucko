import styles from './Button.module.scss';
import Link from 'next/link';

interface Props {
	title: string;
	href: string;
	hollow?: boolean;
}

export const Button = ({ title, href, hollow }: Props) => {
	return (
		<Link href={href}>
			<a className={`${styles.button} ${hollow ? styles.hollow : ''}`}>
				{title}
			</a>
		</Link>
	);
};
