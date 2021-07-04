import styles from './ServiceCard.module.scss';

export interface Props {
	title: string;
	icon: string;
	description: string;
}

export const ServiceCard = ({ title, icon, description }: Props) => {
	return (
		<div className={styles.card}>
			<div className={styles.titleContainer}>
				<img src={icon} className={styles.icon} />
				<p className={styles.title}>{title}</p>
			</div>
			<p className={styles.content}>{description}</p>
		</div>
	);
};
