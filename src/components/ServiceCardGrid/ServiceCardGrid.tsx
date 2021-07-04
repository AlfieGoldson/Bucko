import styles from './ServiceCardGrid.module.scss';

interface IService {
	title: string;
	icon: string;
	description: string;
}

export const ServiceCard = ({ title, icon, description }: IService) => {
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

interface Props {
	services: IService[];
}

export const ServiceCardGrid = ({ services }: Props) => {
	return (
		<div className={styles.cardGrid}>
			{services.map((service) => (
				<ServiceCard {...service} />
			))}
		</div>
	);
};
