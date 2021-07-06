import styles from './Wave.module.scss';

export const WavePart = () => {
	return (
		<div className={styles.wave}>
			<svg
				width='3690'
				height='184'
				viewBox='0 0 3690 184'
				xmlns='http://www.w3.org/2000/svg'
				preserveAspectRatio='none'
			>
				<path d='M926.5 0.0985747C618 4.11284 329.5 116.009 0 116.009V184H1845V116.009C1479 116.009 1235 -3.91569 926.5 0.0985747Z' />
				<path d='M2771.5 0.0985747C2463 4.11284 2174.5 116.009 1845 116.009V184H3690V116.009C3324 116.009 3080 -3.91569 2771.5 0.0985747Z' />
			</svg>
		</div>
	);
};

export const Wave = () => {
	return (
		<>
			<WavePart />
			<WavePart />
		</>
	);
};
