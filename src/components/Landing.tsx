import styles from '../styles/Landing.module.scss';
import { Button } from './Button';

export function Landing() {
	return (
		<div className={styles.landing}>
			<div className={styles.container}>
				<h1>
					Bring <span className={styles.accent}>your</span>
					<br />
					ideas to life!
				</h1>
				<Button href='#' title='View Work' />
			</div>
			<img
				src='/landing.png'
				alt='landing'
				className={styles.landingImg}
			/>
		</div>
	);
}
