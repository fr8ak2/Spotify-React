// import { useRouter } from 'next/router';
// import { useSpotify } from '@context/SpotifyContext';
import { SearchInput } from '@components/Form/components/SearchInput';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

import styles from './Form.module.scss';

interface FormProps {
    className?: string;
    search?: boolean;
    children?: ReactNode;
}

export const Form: FC<FormProps> = ({ className, search, children }) => {
    // const router = useRouter();
    const routerPath = usePathname();

    // const { query, setQuery } = useSpotify();
    //
    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(query);
    //     void router.push(`/search/${query}`);
    // };
    //
    if (!routerPath?.includes('/search')) return null;

    return (
        <form className={clsx(styles.form, className)} onSubmit={() => ''}>
            {search && <SearchInput onChange={() => ''} onClick={() => ''} />}
            {children}
        </form>
    );
};
