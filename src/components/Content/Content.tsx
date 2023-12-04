import Header from '@layouts/Header/Header';
import { Box } from '@shared/Box/Box';
import { Section } from '@shared/Section/Section';
import { FC, PropsWithChildren } from 'react';

import styles from './Content.module.scss';

export const Content: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Section className={styles.section}>
                <Header />

                <main className={styles.main}>
                    <Box className={styles.inner}>{children}</Box>
                </main>
            </Section>
        </>
    );
};
