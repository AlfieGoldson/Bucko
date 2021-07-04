import { IArtwork } from '@lib/api';
import styles from './ImageSlider.module.scss';

interface Props {
	images: IArtwork[];
}

export const ImageSlider = ({ images }: Props) => {
	return (
		<div className={styles.imageSlider}>
			<div className={styles.imagesWrapper}>
				{[...images, ...images, ...images, ...images].map(
					({ thumb }) => (
						<img src={thumb} />
					)
				)}
			</div>
		</div>
	);
};
