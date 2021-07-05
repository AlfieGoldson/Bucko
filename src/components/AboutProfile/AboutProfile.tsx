import { ITeamMember } from '@lib/api/types';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import styles from './AboutProfile.module.scss';

export const AboutProfile = ({
	name,
	title,
	description,
	picture,
	socials,
}: ITeamMember) => {
	return (
		<div className={styles.profile}>
			<img src={picture} alt={name} className={styles.picture} />
			<div>
				<p className={styles.name}>{name}</p>
				<p className={styles.title}>{title}</p>
				<p>
					<RichText render={description} />
				</p>
			</div>
		</div>
	);
};
