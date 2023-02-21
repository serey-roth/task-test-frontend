import { PanelActivationContextProvider } from "~/contexts/PanelActivationContext";

export function withPanelActivationContext<T extends React.PropsWithChildren>(
    Component: React.FC<T>
) {
    // eslint-disable-next-line react/display-name
    return (props: T) => (
        <PanelActivationContextProvider>
            <Component {...props} />
        </PanelActivationContextProvider>
    )
}