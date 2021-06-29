import { IWork } from '@util/api';
import { shuffle } from '@util/shuffle';
import styles from './WorkGrid.module.scss';

interface Props {
	artworks: IWork[];
}

export const WorkGrid = ({ artworks }: Props) => {
	return (
		<div className={styles.workGrid}>
			{shuffle(artworks).map((artwork) => (
				<div className={styles.gridItem}>
					<img src={artwork.coverImage} />
				</div>
			))}
		</div>
	);
};
