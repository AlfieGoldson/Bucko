import styles from './Header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { MobileNav } from '@components/MobileNav';
import { motion, AnimatePresence } from 'framer-motion';

function NavLinks() {
	return (
		<>
			<Link href='/#'>
				<a className={styles.navItem}>Home</a>
			</Link>
			<Link href='/work'>
				<a className={styles.navItem}>Our Work</a>
			</Link>
			<Link href='/#about'>
				<a className={styles.navItem}>About</a>
			</Link>
			{/* <Link href='/#contact'>
				<a className={styles.navItem}>Contact</a>
			</Link> */}
			{/* <Link href='/blog'>
				<a className={styles.navItem}>Blog</a>
			</Link> */}
		</>
	);
}

export function Header() {
	// const [dropdownOpened, setDropdownOpened] = useState(false);
	// const [buttonRef, setButtonRef] = useState(null);
	// const [dropdownRef, setDropdownRef] = useState(null);
	// const { styles: popperStyles, attributes } = usePopper(
	// 	buttonRef,
	// 	dropdownRef
	// );

	const [mobileNavOpened, setMobileNavOpened] = useState(false);

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.navGroup}>
					<Link href='/#'>
						<a className={styles.headerImg}>
							<img src='/brand/logo_header.png' alt='logo' />
						</a>
					</Link>
				</div>
				<div className={styles.navGroup}>
					<div className={styles.desktopNavGroup}>
						<NavLinks />
					</div>
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
					{/* <Link href='#'>
						<a
							className={styles.navItem}
							onMouseEnter={() => {
								setDropdownOpened(true);
							}}
							onMouseLeave={() => {
								setDropdownOpened(false);
							}}
						>
							<img src='/flags/us.png' width='24' height='24' />
							{dropdownOpened && (
								<div
									ref={setDropdownRef}
									style={popperStyles.popper}
									className={styles.languageDropdown}
									{...attributes.popper}
								>
									<div>
										<Link href='#'>
											<a>US</a>
										</Link>
										<Link href='#'>
											<a>FR</a>
										</Link>
									</div>
								</div>
							)}
						</a>
					</Link>
					<Link href='/cart'>
						<a className={styles.navItem}>
							<svg
								width='80'
								height='80'
								viewBox='0 0 80 80'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M26 48.9998H64L71 20.9998H19' />
								<path d='M28.9507 60.8029L17 13H9' />
								<path d='M26.402 61.4989C28.0097 60.5707 29.9905 60.5707 31.5982 61.4989C33.2059 62.4271 34.1963 64.1425 34.1963 65.9989C34.1963 67.8553 33.2059 69.5707 31.5982 70.4989C29.9905 71.4271 28.0097 71.4271 26.402 70.4989C24.7943 69.5707 23.804 67.8553 23.804 65.9989C23.804 64.1425 24.7943 62.4271 26.402 61.4989Z' />
								<path d='M30.4189 61H60.581' />
								<path d='M59.402 61.4989C61.0097 60.5707 62.9905 60.5707 64.5982 61.4989C66.2059 62.4271 67.1963 64.1425 67.1963 65.9989C67.1963 67.8553 66.2059 69.5707 64.5982 70.4989C62.9905 71.4271 61.0097 71.4271 59.402 70.4989C57.7943 69.5707 56.804 67.8553 56.804 65.9989C56.804 64.1425 57.7943 62.4271 59.402 61.4989Z' />
							</svg>
						</a>
					</Link> */}
				</div>
			</div>
			{mobileNavOpened && (
				<MobileNav closeNav={() => setMobileNavOpened(false)}>
					<NavLinks />
				</MobileNav>
			)}
		</div>
	);
}
