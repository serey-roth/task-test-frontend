import { type ReactNode } from 'react';

interface PanelProps {
    title: string;
    children: ReactNode;
}

function Panel({ title, children }: PanelProps) {
    return (
        <>
            <div className="flex h-8 flex-row items-center border-b border-b-gray-200 bg-gray-50 px-2 text-lg">{title}</div>
            <div>{children}</div>
        </>
    );
}

export default Panel;