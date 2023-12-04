import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react';

export const Box = forwardRef<HTMLDivElement, PropsWithChildren<ComponentPropsWithoutRef<'div'>>>((props, ref) => {
    return (
        <div ref={ref} {...props} className={clsx(props.className)}>
            {props.children}
        </div>
    );
});
