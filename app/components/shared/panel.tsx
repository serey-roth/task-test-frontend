import { type ReactNode } from 'react';

interface PanelProps {
    title: string;
    children: ReactNode;
}
export default function Panel({ title, children }: PanelProps) {
    return (
        <>
            <div className="bg-gray50 flex h-8 flex-row items-center border-b border-b-gray-200 px-2 text-lg">{title}</div>
            <div className="p-2">{children}</div>
        </>
    );
}
