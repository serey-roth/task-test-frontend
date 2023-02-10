import Panel from '~/components/shared/panel';

export default function Index() {
    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex-shring h-8 border-b border-b-gray-200"></div>
            <div className="flex h-full flex-grow flex-row">
                <div className="w-56 flex-shrink border-r border-r-gray-200">
                    <Panel title="Left panel">
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
                </div>
                <div className="flex-grow bg-gray-50"></div>
                <div className="w-56 flex-shrink border-l border-l-gray-200">
                    <Panel title="Right panel">
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
                </div>
            </div>
        </div>
    );
}
