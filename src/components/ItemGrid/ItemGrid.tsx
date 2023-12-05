import { FC, ReactNode } from 'react';

import styles from './ItemGrid.module.scss';

export const ItemGrid: FC<{ children: ReactNode }> = ({ children }) => {
    return <div className={styles.itemGrid}>{children}</div>;
};
