import { useEffect, useRef, useState } from "react";
import type { HorizontalPlacement } from "~/types";

export default function useHorizontalResize(
    targetPlacement: HorizontalPlacement
) {
    const resizableRef = useRef<HTMLDivElement>(null);
    const resizerRef = useRef<HTMLDivElement>(null);
    
    const [currentPos, setCurrentPos] = useState(targetPlacement);

    const setTargetPlacement = (placement: HorizontalPlacement) => {
        setCurrentPos(placement);
    }

    useEffect(() => {
        setCurrentPos(targetPlacement);
    }, [targetPlacement]);

    useEffect(() => {
        if (!resizableRef.current || !resizerRef.current) return;
        let width = resizableRef.current.clientWidth;
        let x: number, dx: number = 0;

        const startResize = function(evt: any) {
            x = evt.screenX;
        };

        const resize = function(evt: any) {
            if (!resizableRef.current) return;
            dx = evt.screenX - x;
            x = evt.screenX;
            if (currentPos === 'left') {
                width += dx;
            } else {
                width -= dx;
            }
            resizableRef.current.style.width = (width < 50 ? 50 : width) + "px";
        };

        resizerRef.current.addEventListener("mousedown", function(evt: any) {
            startResize(evt);
            document.body.addEventListener("mousemove", resize);
            document.body.addEventListener("mouseup", function() {
                document.body.removeEventListener("mousemove", resize);
            });
        });
    }, [currentPos]);

    return {
        resizableRef,
        resizerRef,
        setTargetPlacement 
    }
}