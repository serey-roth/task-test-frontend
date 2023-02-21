import ActivatePanel from '~/components/shared/ActivatePanel';
import PanelGroup from '~/components/shared/PanelGroup';
import { RegisteredPanel } from '~/components/shared/RegisteredPanel';
import { PanelActivationContextProvider } from '~/contexts/PanelActivationContext';
import { withContextProvider } from '~/utils/withContextProvider';

function Index() {
    return (
        <div className="flex h-full w-full flex-col">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="flex-shrink h-8 border-b border-b-gray-200"></div>
            <div className="flex h-full flex-grow flex-row relative
            max-h-screen overflow-hidden">
                <PanelGroup 
                side="left" 
                activeId={"Panel 1"} 
                resizable={true}>
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
                    <RegisteredPanel id="Panel 5" title="Panel 5">
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
                    <RegisteredPanel id="Panel 6" title="Panel 6">
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
                <div className="flex flex-grow justify-center bg-gray-500
                text-white p-4">
                    <div className='max-w-[800px] flex justify-center items-center 
                    flex-1 flex-col'>
                        <ActivatePanel targetPanelId='Panel 1'>
                            Open panel with Id=1
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 2'>
                            Open panel with Id=2
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 3'>
                            Open panel with Id=3
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 4'>
                            Open panel with Id=4
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 5'>
                            Open panel with Id=5
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 6'>
                            Open panel with Id=6
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 7'>
                            Open panel with Id=7
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 8'>
                            Open panel with Id=8
                        </ActivatePanel>

                        <ActivatePanel targetPanelId='Panel 9'>
                            Open panel with Id=9
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 10'>
                            Open panel with Id=10
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 11'>
                            Open panel with Id=11
                        </ActivatePanel>
                        <ActivatePanel targetPanelId='Panel 12'>
                            Open panel with Id=12
                        </ActivatePanel>
                    </div>
                </div>
                <PanelGroup 
                side="right" 
                activeId={"Panel 7"}
                resizable={true}>
                    <RegisteredPanel id="Panel 7" title="Panel 7">
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
                    <RegisteredPanel id="Panel 8" title="Panel 8">
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
                    <RegisteredPanel id="Panel 9" title="Panel 9">
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
                    <RegisteredPanel id="Panel 10" title="Panel 10">
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
                    <RegisteredPanel id="Panel 11" title="Panel 11">
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
                    <RegisteredPanel id="Panel 12" title="Panel 12">
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

export default withContextProvider(Index, PanelActivationContextProvider);