import { IArtwork } from '@lib/api/types';
import { shuffle } from '@lib/util/shuffle';
import { motion } from 'framer-motion';
import styles from './WorkGrid.module.scss';

interface Props {
    artworks: IArtwork[];
}

export const WorkGrid = ({ artworks }: Props): JSX.Element => {
    return (
        <div className={styles.workGrid}>
            {shuffle(artworks).map((artwork, i) => (
                <motion.div
                    key={i}
                    className={`${styles.gridItem} ${
                        artwork.thumbDisplay ? styles[artwork.thumbDisplay] : ''
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.15,
                        delay: 0.05 * i,
                        ease: 'easeOut',
                    }}
                >
                    <img src={artwork.thumb} alt={artwork.title} />
                </motion.div>
            ))}
        </div>
    );
};
