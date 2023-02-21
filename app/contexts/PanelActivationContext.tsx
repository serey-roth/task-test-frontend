import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

export type Side = "left" | "right";

type PanelActivationContextValues = {
    readyToBeActiveIds: string[];
    activatePanel: (id: string) => void;
    setPanelForActivation: (id: string) => void;
};

const PanelActivationContext = createContext<PanelActivationContextValues>(
    {} as PanelActivationContextValues
);


interface PanelActivationContextProps {
    children: ReactNode;
}

export function PanelActivationContextProvider({
    children
}: PanelActivationContextProps) {
    const [readyToBeActiveIds, setReadyToBeActiveIds] = useState<string[]>([]);

    const activatePanel = (id: string) => {
        setReadyToBeActiveIds(prevIds => 
            prevIds.filter(i => i !== id));
    }   

    const setPanelForActivation = (id: string) => {
        setReadyToBeActiveIds(prevIds => {
            if (prevIds.includes(id)) {
                return prevIds;
            } else {
                return [...prevIds, id]
            }
        });
    }

    return (
        <PanelActivationContext.Provider
        value={{
            readyToBeActiveIds,
            activatePanel,
            setPanelForActivation,
        }}>
            {children}
        </PanelActivationContext.Provider>
    );
}

export const usePanelActivationContext = () => useContext(PanelActivationContext);