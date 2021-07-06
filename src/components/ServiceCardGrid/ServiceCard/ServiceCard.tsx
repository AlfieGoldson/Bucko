import styles from './ServiceCard.module.scss';

export interface Props {
    title: string;
    icon: string;
    description: string;
}

export const ServiceCard = ({
    title,
    icon,
    description,
}: Props): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.titleContainer}>
                <img src={icon} alt={title} className={styles.icon} />
                <p className={styles.title}>{title}</p>
            </div>
            <p className={styles.content}>{description}</p>
        </div>
    );
};
