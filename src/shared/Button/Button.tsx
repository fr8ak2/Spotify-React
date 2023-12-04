import { clsx } from 'clsx';
import Link from 'next/link';
import { FC, HTMLAttributes, MouseEvent, PropsWithChildren, useCallback, useMemo } from 'react';

import css from './Button.module.scss';

export type ButtonDesignType = 'nav';

interface ButtonInterface extends HTMLAttributes<HTMLElement> {
    design?: ButtonDesignType;
    type?: 'button' | 'submit';
    className?: string;
    to?: string;
    target?: '_blank';
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
}

const ButtonContent: FC<PropsWithChildren> = ({ children }) => {
    return <span>{children}</span>;
};

export const Button: FC<PropsWithChildren<ButtonInterface>> = ({
    design = 'nav',
    type = 'button',
    className,
    to,
    target,
    onClick,
    disabled,
    children,
    ...props
}) => {
    const content = useMemo(() => <ButtonContent>{children}</ButtonContent>, [children]);

    const classname = useMemo(() => {
        return clsx(css.button, css[design], { 'is-disabled': disabled }, className);
    }, [design, disabled, className]);

    const clickHandler = useCallback(
        (e: MouseEvent<HTMLElement>) => {
            onClick?.(e);
        },
        [onClick],
    );

    if (to) {
        return (
            <Link
                className={classname}
                href={to}
                target={target}
                rel={target === '_blank' ? 'noreferrer noopener' : undefined}
                {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={clickHandler} className={classname} disabled={disabled} {...props}>
            {content}
        </button>
    );
};
