import { PropsWithChildren } from 'react';
import styles from './Content.module.scss';

interface Props {}

export function Content({ children }: PropsWithChildren<Props>) {
	return <div className={styles.content}>{children}</div>;
}
