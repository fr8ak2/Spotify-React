import { Content } from '@components/Content/Content';
import { FC, PropsWithChildren } from 'react';

export const MainFlow: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Content>{children}</Content>
        </>
    );
};
