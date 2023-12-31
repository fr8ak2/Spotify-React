import '@styles/app.scss';

import { LayoutDefault } from '@layouts/LayoutDefault';
import { SvgSprite } from '@layouts/SvgSprite/SvgSprite';
import { Box } from '@shared/Box/Box';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';

import styles from './Layout.module.scss';

export const metadata: Metadata = {
    title: {
        template: 'Spotify - %s',
        default: 'Spotify - Music for everyone',
    },
    description: 'Spotify is a digital music service that gives you access to millions of songs.',
    applicationName: 'Spotify',
    referrer: 'origin-when-cross-origin',
    alternates: {
        canonical: '/',
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

const Mont = Montserrat({
    subsets: ['latin'],
    variable: '--font-primary',
    display: 'swap',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en" className={Mont.variable}>
            <body>
                <SvgSprite />
                <Box className={styles.page}>
                    <LayoutDefault>{children}</LayoutDefault>
                </Box>
            </body>
        </html>
    );
};

export default RootLayout;
