import {useEffect,useRef} from "react";

export const useOutsideClick = (callback:any) => {
    debugger;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event:any) => {
            debugger;
            if (ref.current && !ref.current.contains(event.target) ) {
                callback();
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [ref]);

    return ref;
};