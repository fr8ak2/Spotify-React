import { Sidebar } from '@components/Sidebar/Sidebar';
//import { OriginTracker } from '@context/HistoryContext';
import { SpotifyProvider } from '@context/SpotifyContext';
import { ViewportProvider } from '@context/ViewportContext';
import { MainFlow } from '@layouts/PageFlow/MainFlow/MainFlow';
import { PageFlow } from '@layouts/PageFlow/PageFlow';
import { Box } from '@shared/Box/Box';
import { FC, ReactNode } from 'react';

import styles from './LayoutDefault.module.scss';

export interface LayoutProps {
    children: ReactNode;
}

export const LayoutDefault: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <ViewportProvider>
                <SpotifyProvider>
                    <Box className={styles.main}>
                        <PageFlow>
                            <Sidebar />
                            <MainFlow>{children}</MainFlow>
                        </PageFlow>
                    </Box>
                </SpotifyProvider>
            </ViewportProvider>
        </>
    );
};
