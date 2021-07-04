import { AnimatePresence, motion } from 'framer-motion';
import { useMobileNav } from '../MobileNavProvider';
import styles from './MobileNavBtn.module.scss';

export const MobileNavBtn = () => {
	const { mobileNavOpened, setMobileNavOpened } = useMobileNav();

	return (
		<AnimatePresence>
			<motion.a
				onClick={() => setMobileNavOpened((a) => !a)}
				className={styles.mobileNavBtn}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				key='mobileNavBtn'
			>
				{mobileNavOpened ? (
					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M55.5564 55.6693L24.4437 24.5566' />
						<path d='M24.4436 55.6693L55.5563 24.5566' />
					</svg>
				) : (
					<svg
						width='80'
						height='80'
						viewBox='0 0 80 80'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M16 22L64 22' />
						<path d='M16 40L64 40' />
						<path d='M16 58L64 58' />
					</svg>
				)}
			</motion.a>
		</AnimatePresence>
	);
};
