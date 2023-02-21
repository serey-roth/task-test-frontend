import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
import { usePanelGroupContext } from '~/contexts/PanelGroupContext';
import Panel from './panel';

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
        activePanelId,
        registerNewPanel,
        unregisterPanel,
    } = usePanelGroupContext();

    useEffect(() => {
        registerNewPanel(id);
    
        return () => {
            unregisterPanel(id);
        }
    }, [id, registerNewPanel, unregisterPanel])


    return (
        <>
            {activePanelId && activePanelId === id && (
                <Panel title={title}>
                    {children}
                </Panel>
            )}
        </>
    );
}