import { ReactNode } from 'react';
import styles from './Content.module.scss';

interface Props {
    children: ReactNode;
}

export const Content = ({ children }: Props): JSX.Element => {
    return <div className={styles.content}>{children}</div>;
};
