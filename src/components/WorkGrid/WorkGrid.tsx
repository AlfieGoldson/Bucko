import { IArtwork } from '@lib/api/types';
import { shuffle } from '@lib/util/shuffle';
import { motion } from 'framer-motion';
import styles from './WorkGrid.module.scss';

interface Props {
	artworks: IArtwork[];
}

export const WorkGrid = ({ artworks }: Props) => {
	return (
		<div className={styles.workGrid}>
			{shuffle(artworks).map((artwork, i) => (
				<motion.div
					key={i}
					className={styles.gridItem}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.02 * i }}
				>
					<img src={artwork.thumb} />
				</motion.div>
			))}
		</div>
	);
};
