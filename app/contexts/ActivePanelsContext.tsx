import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

export type Side = "left" | "right";

type ActivePanelsContextValues = {
    activePanelIds: string[];
    activatePanel: (id: string) => void;
    deactivatePanel: (id: string) => void;
};

const ActivePanelsContext = createContext<ActivePanelsContextValues>(
    {} as ActivePanelsContextValues
);


interface ActivePanelsContextProps {
    children: ReactNode;
}

export function ActivePanelsContextProvider({
    children
}: ActivePanelsContextProps) {
    const [activePanelIds, setActivePanelIds] = useState<string[]>([]);

    const activatePanel = (id: string) => {
        setActivePanelIds(prevIds => {
            if (prevIds.includes(id)) {
                return prevIds;
            } else {
                return [...prevIds, id]
            }
        });
    }   

    const deactivatePanel = (id: string) => {
        setActivePanelIds(prevIds => prevIds.filter(i => 
            i !== id));
    }

    return (
        <ActivePanelsContext.Provider
        value={{
            activePanelIds,
            activatePanel,
            deactivatePanel,
        }}>
            {children}
        </ActivePanelsContext.Provider>
    );
}

export const useActivePanelsContext = () => useContext(ActivePanelsContext);