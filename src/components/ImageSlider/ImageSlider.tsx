import { IArtwork } from '@lib/api/types';
import styles from './ImageSlider.module.scss';

interface Props {
    images: IArtwork[];
}

export const ImageSlider = ({ images }: Props): JSX.Element => {
    return (
        <div className={styles.imageSlider}>
            <div
                className={styles.imagesWrapper}
                style={{
                    animationDuration: `${images.length * 2}s`,
                }}
            >
                {[...images, ...images, ...images, ...images].map(
                    ({ thumb, title }, i) => (
                        <img
                            src={thumb}
                            alt={title}
                            className={styles.image}
                            key={i}
                        />
                    ),
                )}
            </div>
        </div>
    );
};
