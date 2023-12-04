export const isTouchDevice = (): boolean => {
    try {
        document.createEvent('TouchEvent');
        return true;
    } catch (e) {
        return typeof window !== 'undefined' && ('ontouchstart' in window || Boolean(window.navigator.maxTouchPoints));
    }
};
