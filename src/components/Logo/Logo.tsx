import { Icon } from '@shared/Icon/Icon';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Logo.module.scss';

export const Logo: FC = () => {
    return (
        <Link className={styles.logo} href="/" aria-label="Spotify">
            <Icon id="logo"></Icon>
        </Link>
    );
};
