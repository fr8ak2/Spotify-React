'use client';

import { createContext, PropsWithChildren, useEffect, useRef, useState } from 'react';

export const OriginContext = createContext<boolean>(false);

export const OriginTracker = ({ children }: PropsWithChildren) => {
    const [isWithinPage, setIsWithinPage] = useState(false);
    const isInitialLoadRef = useRef(true);

    useEffect(() => {
        if (isInitialLoadRef.current) {
            isInitialLoadRef.current = false;
            return;
        }

        setIsWithinPage(true);
        return () => setIsWithinPage(false);
    }, []);

    return <OriginContext.Provider value={isWithinPage}>{children}</OriginContext.Provider>;
};
