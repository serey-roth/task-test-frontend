import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
import { useActivePanelsContext } from '~/contexts/ActivePanelsContext';
import { usePanelGroupContext } from '~/contexts/PanelGroupContext';
import Panel from './Panel';

interface RegisteredPanelProps {
    id: string;
    title: string;
    children: ReactNode;
}

export const RegisteredPanel: React.FC<RegisteredPanelProps> = ({
    id,
    title,
    children
}) => {
    const {
        registerNewPanel,
        unregisterPanel,
    } = usePanelGroupContext();

    const { activePanelIds } = useActivePanelsContext();

    useEffect(() => {
        registerNewPanel(id);
    
        return () => {
            unregisterPanel(id);
        }
    }, [id, registerNewPanel, unregisterPanel])


    return (
        <>
            {activePanelIds.includes(id) && (
                <Panel title={title}>
                    {children}
                </Panel>
            )}
        </>
    );
}