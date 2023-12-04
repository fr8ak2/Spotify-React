export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'hd';
export type BreakpointArray = Breakpoint[];

interface BreakpointsList {
    sm: number;
    md: number;
    lg: number;
    hd: number;
}

export const breakpoints: BreakpointsList = {
    sm: 640,
    md: 1024,
    lg: 1280,
    hd: 1600,
};

export const pixRatio = (): number => {
    return window.devicePixelRatio || 1;
};

export const getBpFlag = (vw: number = document.documentElement.clientWidth): Breakpoint => {
    let bp: Breakpoint = 'xs';

    if (vw < breakpoints.sm) bp = 'xs';

    if (vw >= breakpoints.sm && vw < breakpoints.md) bp = 'sm';

    if (vw >= breakpoints.md && vw < breakpoints.lg) bp = 'md';

    if (vw >= breakpoints.lg && vw < breakpoints.hd) bp = 'lg';

    if (vw >= breakpoints.hd) bp = 'hd';

    return bp;
};

export const checkBp = (arr: string[], bp?: string): boolean => {
    return arr.indexOf(bp || (getBpFlag() as string)) >= 0;
};

export const getScrollBarWidth = (): number => {
    const isSSR = typeof window === 'undefined';
    if (isSSR) return 0;

    const tester = document.createElement('div');

    document.body.appendChild(tester);

    tester.style.cssText = `
        position: absolute;
        z-index: -1;
        left: -10000px;
        top: -100000px;
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        pointer-events: none;
    `;

    const sb = tester.offsetWidth - tester.clientWidth;

    // tester.remove();
    document.body.removeChild(tester);

    return sb;
};

export const getVpHelpers = (): HTMLDivElement[] => {
    const isSSR = typeof window === 'undefined';
    if (isSSR) return [];

    const vpHelper = document.createElement('div');
    const vpHelperContainer = document.createElement('div');

    vpHelper.style.cssText = `
			position: fixed;
			z-index: -1;
			left: -101vw;
			top: -101vh;
			width: 100vw;
			height: 100vh;
			pointer-events: none;
	`;

    document.documentElement.appendChild(vpHelper);

    vpHelperContainer.classList.add('container');
    vpHelper.appendChild(vpHelperContainer);

    return [vpHelper, vpHelperContainer];
};
