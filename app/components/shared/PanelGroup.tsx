import type { ChangeEvent, ReactNode} from 'react';
import { Children, useState } from 'react';

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
    active: number;
    children: ReactNode;
}

export function PanelGroup({
    side,
    active,
    children
}: PanelGroupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentActive, setCurrentActive] = useState(active);

    const handleSelectPanel = (event: ChangeEvent<HTMLSelectElement>) => {
        setCurrentActive(Number.parseInt(event.target.value));
    }

    const togglePanelGroup = () => {
        setIsOpen(prevState => !prevState);
    }

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
                    value={currentActive} 
                    onChange={handleSelectPanel}>
                        {Children.map(children, (_, index) => (
                            <option key={`panel-${index}`} value={index + 1}>
                                Panel {index + 1}
                            </option>
                        ))}
                    </select>
                    <button onClick={togglePanelGroup}>X</button>
                </div>
                {Children.toArray(children)[currentActive - 1]}
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
                        Panel {active}
                    </span>
                </button>
            </div>
        </div>
    );
}