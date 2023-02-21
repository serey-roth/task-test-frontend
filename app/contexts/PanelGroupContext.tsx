import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

export type Side = "left" | "right";

type PanelGroupContextValues = {
    panelIdSet: Set<string>
    registerNewPanel: (id: string) => void;
    unregisterPanel: (id: string) => void;
};

const PanelGroupContext = createContext<PanelGroupContextValues>(
    {} as PanelGroupContextValues
);


interface PanelGroupContextProps {
    children: ReactNode;
}

export function PanelGroupContextProvider({
    children
}: PanelGroupContextProps) {
    const [panelIdSet, setPanelIdSet] = useState<Set<string>>(new Set<string>());

    const registerNewPanel = (id: string) => {
        setPanelIdSet(prevSet => prevSet.add(id));
    }   

    const unregisterPanel = (id: string) => {
        setPanelIdSet(prevSet => {
            prevSet.delete(id);
            return prevSet;
        });
    }

    return (
        <PanelGroupContext.Provider
        value={{
            panelIdSet,
            registerNewPanel,
            unregisterPanel,
        }}>
            {children}
        </PanelGroupContext.Provider>
    );
}

export const usePanelGroupContext = () => useContext(PanelGroupContext);