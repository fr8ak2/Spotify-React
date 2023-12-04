import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';

import styles from './Wrapper.module.scss';

interface WrapperProps {
    className?: string;
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ className, children }) => {
    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};
