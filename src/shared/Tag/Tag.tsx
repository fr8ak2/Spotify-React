import { clsx } from 'clsx';
import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

export type PrimitiveKeys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'ul' | 'ol' | 'li' | 'blockquote' | 'html';

export type SpecificPrimitivesKeys = 'header' | 'sentence';

interface TagProps extends HTMLAttributes<HTMLElement> {
    type: PrimitiveKeys | SpecificPrimitivesKeys;
    content?: string;
    className?: string;
    isDiv?: boolean;
    isSpan?: boolean;
    isHTML?: boolean;
    visualType?: PrimitiveKeys | SpecificPrimitivesKeys;
}

export const Tag: FC<PropsWithChildren<TagProps>> = props => {
    const { type, className, isDiv, isSpan, isHTML, visualType, content, children } = props;

    let Tag = type as keyof React.JSX.IntrinsicElements;
    const classes = clsx( visualType || type, className);

    if (isDiv) {
        Tag = 'div';
    }

    if (isSpan) {
        Tag = 'span';
    }

    if (isHTML && content) {
        return <Tag className={classes} dangerouslySetInnerHTML={{ __html: content }} />;
    }

    return <Tag className={classes}>{content || children}</Tag>;
};
