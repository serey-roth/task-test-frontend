import PanelGroup from '~/components/shared/PanelGroup';
import { RegisteredPanel } from '~/components/shared/RegisteredPanel';
import { withActivePanelsContext } from '~/utils/withActivePanelsContext';

function Index() {
    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex-shrink h-8 border-b border-b-gray-200"></div>
            <div className="flex h-full flex-grow flex-row relative">
                <PanelGroup side="left" activeId={"Panel 1"}>
                    <RegisteredPanel id="Panel 1" title="Panel 1">
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
                    </RegisteredPanel>
                    <RegisteredPanel id="Panel 2" title="Panel 2">
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
                    </RegisteredPanel>
                </PanelGroup>
                <div className="flex-grow bg-gray-50"></div>
                <PanelGroup side="right" activeId={"Panel 3"}>
                    <RegisteredPanel id="Panel 3" title="Panel 3">
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
                    </RegisteredPanel>
                    <RegisteredPanel id="Panel 4" title="Panel 4">
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
                    </RegisteredPanel>
                </PanelGroup>
            </div>
        </div>
    );
}

export default withActivePanelsContext(Index);