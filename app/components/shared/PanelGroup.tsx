import type { ChangeEvent, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { usePanelActivationContext } from '~/contexts/PanelActivationContext';
import { PanelGroupContextProvider, usePanelGroupContext } from '~/contexts/PanelGroupContext';
import type { HorizontalPlacement } from '~/types';
import useHorizontalResize from '~/utils/useHorizontalResize';
import { withContextProvider } from '~/utils/withContextProvider';

function getTransitionClasses(
    isOpen: boolean, 
    side: HorizontalPlacement
) {
    let classes = "";
    if (isOpen) {
        classes += "translate-x-0 opacity-100";
    } else {
        classes += "opacity-0 " + 
        (side === "left" ? 
        "-translate-x-full" : 
        "translate-x-full");
    }
    return classes;
}

interface PanelGroupProps {
    side: HorizontalPlacement;
    activeId: string;
    children: ReactNode;
    resizable?: boolean;
}

function PanelGroup({
    side,
    activeId,
    children,
    resizable=false
}: PanelGroupProps) {
    const [isOpen, setIsOpen] = useState(false);

    const { 
        panelIdSet,
        activePanelId
    } = usePanelGroupContext();

    const [currentActiveId, setCurrentActiveId] = useState(activeId);

    const {
        setPanelForActivation,
    } = usePanelActivationContext();

    const {
        resizableRef,
        resizerRef,
    } = useHorizontalResize(side);

    const handleSelectPanel = (event: ChangeEvent<HTMLSelectElement>) => {
        setCurrentActiveId(event.target.value);
        setPanelForActivation(event.target.value);
    }

    const togglePanelGroup = () => {
        setIsOpen(prevState => !prevState);
    }
    
    useEffect(() => {
        setPanelForActivation(currentActiveId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (activePanelId) {
            setCurrentActiveId(activePanelId);
        }
    }, [activePanelId]);

    return (
        <div
        ref={resizableRef}
        className={`absolute top-0 bottom-0 flex w-56
        h-full flex-shrink flex-row ${side === 'left' ? 
        'left-0' : 'right-0'} ${resizable ? 'resize-x' : ''}`}
        >
            <div
            style={{
                WebkitOverflowScrolling: 'touch'
            }}
            className={`flex w-full flex-col
            gap-2 ${getTransitionClasses(isOpen, side)}
            transition duration-1000 ease-in-out bg-white
            ${side === "left" ? "border-r" : "border-l"}
            border-gray-200 p-2 max-h-full 
            ${resizable ? 'resize-x overflow-auto' : ''}`}
            >
                <div className="flex flex-row items-center 
                justify-between gap-2">
                    <select 
                    className='flex-1'
                    value={currentActiveId} 
                    onChange={handleSelectPanel}>
                        {Array.from(panelIdSet).map(panelId => (
                            <option key={panelId} value={panelId}>
                                {panelId}
                            </option>
                        ))}
                    </select>
                    <button onClick={togglePanelGroup}>X</button>
                </div>
                <div>{children}</div>
                <div
                ref={resizerRef}
                className={`absolute top-0 bottom-0 h-full
                    ${side === 'left' ? 'right-0' : 'left-0'} z-10 w-2
                    ${resizable ? 'cursor-col-resize block opacity-100' : 
                    'hidden opacity-100'} 
                    bg-inherit transition duration-1000 ease-in-out`}
                ></div>
            </div>
            <div className={`absolute top-0 bottom-0 w-12 flex-shrink  
            ${side === "left" ? "left-0 border-r" : 
            "right-0 border-l"} ${isOpen ? "opacity-0" : 
            "opacity-100"} transition duration-500 ease-in-out
            bg-white border-gray-200`}>
                <button 
                className="w-full border-b drop-shadow-sm" 
                onClick={togglePanelGroup}>
                    <span
                    style={{
                        writingMode: 'vertical-lr',
                        msWritingMode: 'vertical-lr',
                        WebkitWritingMode: 'vertical-lr'
                    }}
                    className={`${side === 'left' && 'rotate-180'}
                    inline-block whitespace-nowrap py-1`}
                    >
                        {currentActiveId}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default withContextProvider(PanelGroup, PanelGroupContextProvider);