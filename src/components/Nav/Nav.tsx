'use client';

import { Box } from '@shared/Box/Box';
import { Icon } from '@shared/Icon/Icon';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Nav.module.scss';

export const Nav = () => {
    const currentRoute = usePathname();

    return (
        <nav className={styles.menu} aria-label="Menu">
            <Box className={styles.menuList}>
                <Box className={styles.menuItem}>
                    <Link
                        className={clsx(styles.menuItemHome, currentRoute == '/' ? styles.menuItemActive : '')}
                        href="/"
                        replace>
                        <Icon id="house" />
                    </Link>
                    <Link className={styles.menuItemSearch} href="/search" replace>
                        <Icon id="search" />
                    </Link>
                </Box>

                <Box className={styles.menuItem}></Box>
            </Box>
        </nav>
    );
};
