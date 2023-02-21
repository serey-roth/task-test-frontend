import type { ChangeEvent, ReactNode} from 'react';
import { useEffect, useState } from 'react';
import { useActivePanelsContext } from '~/contexts/ActivePanelsContext';
import { usePanelGroupContext } from '~/contexts/PanelGroupContext';
import { withPanelGroupContext } from '~/utils/withPanelGroupContext';

type Side = "left" | "right";

function getTransitionClasses(
    isOpen: boolean, 
    side: Side
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
    side: Side;
    activeId: string;
    children: ReactNode;
}

function PanelGroup({
    side,
    activeId,
    children
}: PanelGroupProps) {
    const [isOpen, setIsOpen] = useState(false);

    const [currentActiveId, setCurrentActiveId] = useState(activeId);
    
    const { 
        panelIdSet
    } = usePanelGroupContext();

    const {
        activatePanel,
        deactivatePanel,
    } = useActivePanelsContext();

    const handleSelectPanel = (event: ChangeEvent<HTMLSelectElement>) => {
        setCurrentActiveId(event.target.value);
        //fix this
        deactivatePanel(currentActiveId);
        activatePanel(event.target.value);
        //
    }

    const togglePanelGroup = () => {
        setIsOpen(prevState => !prevState);
    }
    
    useEffect(() => {
        activatePanel(currentActiveId);
    }, [activatePanel, currentActiveId]);

    return (
        <div
        className={`absolute top-0 bottom-0 flex
        h-full flex-row ${side === 'left' ? 
        'left-0' : 'right-0'}`}
        >
            <div
            className={`flex w-56 flex-shrink flex-col
            gap-2 ${getTransitionClasses(isOpen, side)}
            transition duration-1000 ease-in-out bg-white
            ${side === "left" ? "border-r" : "border-l"}
            overflow-auto border-r border-r-gray-200 p-2`}
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

export default withPanelGroupContext(PanelGroup);