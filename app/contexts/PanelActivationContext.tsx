import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePersist } from '~/utils/usePersist';

type PanelActivationContextValues = {
    activeIds: string[];
    targetIdFromMain: string | null;
    activatePanel: (id: string) => void;
    deactivatePanel: (id: string) => void;
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

    const { persistedValues, persistValues } = usePersist();
    
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

    const setMainTargetId = (value: string | null) => {
        setTargetIdFromMain(value);
    }

    useEffect(() => {
        if (persistedValues.length > 0) {
            setActiveIds(persistedValues);
        }
    }, [persistedValues])

    useEffect(() => {
        persistValues(activeIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIds]);

    return (
        <PanelActivationContext.Provider
        value={{
            activeIds,
            targetIdFromMain,
            activatePanel,
            deactivatePanel,
            setMainTargetId
        }}>
            {children}
        </PanelActivationContext.Provider>
    );
}

export const usePanelActivationContext = () => useContext(PanelActivationContext);