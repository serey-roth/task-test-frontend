import type { ReactNode } from "react";

export function withContextProvider<
T extends React.PropsWithChildren
>(
    Component: React.FC<T>,
    ContextProvider: React.FC<{ children: ReactNode }>
) {
    // eslint-disable-next-line react/display-name
    return (props: T) => (
        <ContextProvider>
            <Component {...props} />
        </ContextProvider>
    )
}