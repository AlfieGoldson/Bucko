import styles from './MobileNav.module.scss';
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import { useMobileNav } from '../MobileNavProvider';

interface Props {
    children: ReactNode;
}

export const MobileNav = ({ children }: Props): JSX.Element => {
    const { setMobileNavOpened } = useMobileNav();

    return createPortal(
        <div className={styles.mobileNav}>
            <div
                className={styles.navGroup}
                onClick={() => setMobileNavOpened(false)}
            >
                {children}
            </div>
        </div>,
        document.getElementById('mobile-nav'),
    );
};
