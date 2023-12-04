'use client';

import { Breakpoint, getBpFlag, getScrollBarWidth, getVpHelpers, isTouchDevice } from '@utils/utils';
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

interface ViewportInterface {
    vw: number;
    vh: number;
    sb: number;
    out: number;
    bp?: Breakpoint;
}

const initialState = {
    vw: 0,
    vh: 0,
    sb: 0,
    out: 0,
    bp: undefined,
};

const isTouch = isTouchDevice();
const scrollbarWidth = getScrollBarWidth();
const [helper, helperContainer] = getVpHelpers();

let vw: number, vh: number, bp: Breakpoint, out: number;

export const ViewportContext = createContext<ViewportInterface>(initialState);
export const ViewportProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<ViewportInterface>(initialState);

    useEffect(() => {
        let mounted = true;
        const isSSR = typeof window === 'undefined';

        if (isSSR || !mounted) return;

        document.documentElement.classList.toggle('---touch', isTouch);
        document.documentElement.classList.toggle('--mouse', !isTouch);

        const handleResize = () => {
            const sb = scrollbarWidth;

            vw = document.documentElement.clientWidth;
            vh = helper ? helper.offsetHeight : document.documentElement.clientHeight;
            bp = getBpFlag(vw + sb);
            out = helperContainer?.offsetLeft;

            setState({
                vw,
                vh,
                sb,
                out,
                bp,
            });

            document.documentElement.style.setProperty('--vw', `${Math.max(320, vw)}px`);
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            document.documentElement.style.setProperty('--sb', `${sb}px`);
            document.documentElement.style.setProperty('--ow', `${vw + sb}px`);
            document.documentElement.style.setProperty('--out', `${out}px`);
        };

        handleResize();
        window.addEventListener('load', handleResize, { passive: true });
        //window.addEventListener("resize", handleResize, { passive: true });

        if (!isTouch) {
            window.addEventListener('resize', handleResize, { passive: true });
        } else {
            window.addEventListener('orientationchange', handleResize, { passive: true });
        }

        return () => {
            mounted = false;
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);

    return <ViewportContext.Provider value={{ ...state }}>{children}</ViewportContext.Provider>;
};

export const useViewport = (): ViewportInterface => {
    const context = useContext(ViewportContext);

    if (context === undefined) {
        throw new Error('useViewport was used outside of its Provider');
    }

    return context;
};
