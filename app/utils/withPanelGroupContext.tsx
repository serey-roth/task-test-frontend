import { PanelGroupContextProvider } from "~/contexts/PanelGroupContext";

export function withPanelGroupContext<T extends React.PropsWithChildren>(
    Component: React.FC<T>
) {
    // eslint-disable-next-line react/display-name
    return (props: T) => (
        <PanelGroupContextProvider>
            <Component {...props} />
        </PanelGroupContextProvider>
    )
}