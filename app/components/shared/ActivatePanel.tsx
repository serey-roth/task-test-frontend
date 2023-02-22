import type { ReactNode } from 'react';
import { usePanelActivationContext } from '~/contexts/PanelActivationContext';

type ActivatePanelProps = {
    targetPanelId: string;
    children: ReactNode;
};

/**
 * @param props The id of the new active panel, and the props of a div element.
 * @returns A wrapper div element that opens the target panel once clicked.
 */
export default function ActivatePanel({ 
    targetPanelId, children 
}: ActivatePanelProps) {
    const { setMainTargetId } = usePanelActivationContext();

    const handleClick = () => {
        setMainTargetId(targetPanelId);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer transition 
            duration-300 hover:italic hover:underline"
        >
            {children}
        </div>
    );
}