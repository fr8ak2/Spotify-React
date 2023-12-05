'use client';

import { Form } from '@components/Form/Form';
import { OriginContext } from '@context/HistoryContext';
import { Button } from '@shared/Button/Button';
import { Icon } from '@shared/Icon/Icon';
import { useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';

import styles from './Header.module.scss';

export default function Header() {
    const router = useRouter();
    // const [isBackButtonClicked, setBackbuttonPress] = useState(false);
    const isWithinPage = useContext(OriginContext);

    const onClick = useCallback(() => {
        if (isWithinPage) router.back();
        else router.push('/');
    }, [isWithinPage, router]);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.nav}>
                    <Button className={styles.navButton} onClick={onClick} type="button">
                        <Icon id="arrow-left" />
                    </Button>

                    <Button className={styles.navButton} onClick={() => router.forward()} type="button">
                        <Icon id="arrow-right" />
                    </Button>
                </div>

                <Form className={styles.headerForm} search />
            </div>
        </header>
    );
}
