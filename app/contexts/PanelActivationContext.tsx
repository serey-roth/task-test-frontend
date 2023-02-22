import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePersist } from '~/utils/usePersist';

type PanelActivationContextValues = {
    activeIds: string[];
    targetIdFromMain: string | null;
    activatePanel: (id: string) => void;
    deactivatePanel: (id: string) => void;
    switchActivePanels: (newActiveId: string, oldActiveId: string) => void;
    setMainTargetId: (id: string | null) => void;
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
    const [activeIds, setActiveIds] = useState<string[]>([]);
    const [targetIdFromMain, setTargetIdFromMain] = useState<string | null>(null);

    const { 
        persistedEntries, 
        persistValues,
        getPersistedValuesByIdentifier
    } = usePersist();
    
    const activatePanel = (id: string) => {
        setActiveIds(prevIds => {
            if (prevIds.includes(id)) {
                return prevIds;
            } else {
                return [...prevIds, id];
            }
        });
    };

    const deactivatePanel = (id: string) => {
        setActiveIds(prevIds => {
            return prevIds.filter(val => val !== id);
        });
    }

    const switchActivePanels = (newActiveId: string, oldActiveId?: string) => {
        let currentActiveIds = activeIds.slice();
        if (oldActiveId) {
            currentActiveIds = currentActiveIds.filter(id => id !== oldActiveId);
        } 
        if (!currentActiveIds.includes(newActiveId)) {
            currentActiveIds.push(newActiveId);
        }
        setActiveIds(currentActiveIds);
    }

    const setMainTargetId = (value: string | null) => {
        setTargetIdFromMain(value);
    }

    useEffect(() => {
        if (persistedEntries.length > 0) {
            setActiveIds(getPersistedValuesByIdentifier('active'));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [persistedEntries])

    useEffect(() => {
        persistValues(activeIds, 'active');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIds]);


    return (
        <PanelActivationContext.Provider
        value={{
            activeIds,
            targetIdFromMain,
            activatePanel,
            deactivatePanel,
            switchActivePanels,
            setMainTargetId
        }}>
            {children}
        </PanelActivationContext.Provider>
    );
}

export const usePanelActivationContext = () => useContext(PanelActivationContext);