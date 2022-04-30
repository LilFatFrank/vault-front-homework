export const debounce = (func: Function, delay = 1500) => {
    let timer: NodeJS.Timeout;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    };
};
