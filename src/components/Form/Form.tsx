import { SearchInput } from '@components/Form/components/SearchInput';
import { useSpotify } from "@context/SpotifyContext";
import { clsx } from 'clsx';
import { usePathname,useRouter  } from 'next/navigation';
import { FC, FormEvent, ReactNode } from 'react';

import styles from './Form.module.scss';

interface FormProps {
    className?: string;
    search?: boolean;
    children?: ReactNode;
}

export const Form: FC<FormProps> = ({ className, search, children }) => {
    const router = useRouter();
    const routerPath = usePathname();

    const { query, setQuery } = useSpotify();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        void router.push(`/search/${query}`);
    };

    if (!routerPath?.includes('/search')) return null;

    return (
        <form className={clsx(styles.form, className)} onSubmit={handleSubmit}>
            {search && <SearchInput onChange={(e) => setQuery(e.target.value)} onClick={() => setQuery('')} />}
            {children}
        </form>
    );
};
