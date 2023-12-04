import { Logo } from '@components/Logo/Logo';
import { Nav } from '@components/Nav/Nav';
import { Section } from '@shared/Section/Section';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <Section className={styles.sidebar}>
            <Logo />
            <Nav />
        </Section>
    );
};
