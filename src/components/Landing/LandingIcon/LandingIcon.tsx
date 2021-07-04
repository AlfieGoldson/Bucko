import styles from './LandingIcon.module.scss';

export interface Props {
	name: string;
	icon: JSX.Element;
	href: string;
}

export const LandingIcon = ({ icon, href }: Props) => {
	return (
		<a className={styles.landingIcon} href={href} target='_blank'>
			{icon}
		</a>
	);
};
