import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePanelActivationContext } from './PanelActivationContext';

type PanelGroupContextValues = {
    panelIdSet: Set<string>;
    activePanelId: string | null;
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
    const [activePanelId, setActivePanelId] = useState<string | null>(null);

    const { 
        activeIds,
        targetIdFromMain,
        activatePanel,
        deactivatePanel,
        setMainTargetId,
     } = usePanelActivationContext();

    const registerNewPanel = (id: string) => {
        setPanelIdSet(prevSet => prevSet.add(id));
    }   

    const unregisterPanel = (id: string) => {
        setPanelIdSet(prevSet => {
            prevSet.delete(id);
            return prevSet;
        });
    }

    useEffect(() => {
        activeIds.forEach(id => {
            if (panelIdSet.has(id)) {
                setActivePanelId(id);
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIds]);

    useEffect(() => {
        if (targetIdFromMain && panelIdSet.has(targetIdFromMain)) {
            setActivePanelId(targetIdFromMain);
            activatePanel(targetIdFromMain);
            if (activePanelId) {
                deactivatePanel(activePanelId);
            }
            setMainTargetId(null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetIdFromMain, activePanelId])

    return (
        <PanelGroupContext.Provider
        value={{
            panelIdSet,
            activePanelId,
            registerNewPanel,
            unregisterPanel,
        }}>
            {children}
        </PanelGroupContext.Provider>
    );
}

export const usePanelGroupContext = () => useContext(PanelGroupContext);