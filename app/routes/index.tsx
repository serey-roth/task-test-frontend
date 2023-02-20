import Panel from '~/components/shared/panel';
import { PanelGroup } from '~/components/shared/PanelGroup';

export default function Index() {
    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex-shrink h-8 border-b border-b-gray-200"></div>
            <div className="flex h-full flex-grow flex-row relative">
                <PanelGroup side="left" active={1}>
                    <Panel title="Panel 1">
                        <h2 className="font-bold">Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>List</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i}>
                                        <td>Item {i}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Panel>
                    <Panel title="Panel 2">
                        <h2 className="font-bold">Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>List</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i}>
                                        <td>Item {i}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Panel>
                </PanelGroup>
                <div className="flex-grow bg-gray-50"></div>
                <PanelGroup side="right" active={1}>
                    <Panel title="Panel 3">
                        <h2 className="font-bold">Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>List</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i}>
                                        <td>Item {i}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Panel>
                    <Panel title="Panel 4">
                        <h2 className="font-bold">Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>List</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4].map((i) => (
                                    <tr key={i}>
                                        <td>Item {i}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Panel>
                </PanelGroup>
            </div>
        </div>
    );
}
