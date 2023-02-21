import { ActivePanelsContextProvider } from "~/contexts/ActivePanelsContext";

export function withActivePanelsContext<T extends React.PropsWithChildren>(
    Component: React.FC<T>
) {
    // eslint-disable-next-line react/display-name
    return (props: T) => (
        <ActivePanelsContextProvider>
            <Component {...props} />
        </ActivePanelsContextProvider>
    )
}