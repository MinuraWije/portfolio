import {useEffect, useRef} from "react";

// @ts-ignore
export const RevealOnScroll = ({children}) => {

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                // @ts-ignore
                ref.current.classList.add("visible")
            }
        },{threshold:0.2, rootMargin: "0px 0px -50px 0px"});

        if(ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    })

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}