import { IconId } from '@layouts/SvgSprite/SvgSprite';
import { FC, HTMLAttributes, useMemo } from 'react';

interface Props extends HTMLAttributes<SVGElement> {
    id: IconId;
    width?: number;
    height?: number;
}

export const Icon: FC<Props> = ({ id, width, height, className }) => {
    const css = useMemo(() => ({ width, height }), [width, height]);
    return (
        <svg className={className} style={css} aria-hidden="true">
            <use xlinkHref={`#${id || ''}`} />
        </svg>
    );
};
