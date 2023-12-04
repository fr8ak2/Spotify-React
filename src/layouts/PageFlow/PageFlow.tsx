import { Box } from '@shared/Box/Box';
import { FC, PropsWithChildren } from 'react';

import styles from './PageFlow.module.scss';

export const PageFlow: FC<PropsWithChildren> = ({ children }) => {
    return <Box className={styles.pageContent}>{children}</Box>;
};
