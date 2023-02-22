import ActivatePanel from '~/components/shared/ActivatePanel';
import PanelGroup from '~/components/shared/PanelGroup';
import { RegisteredPanel } from '~/components/shared/RegisteredPanel';
import { PanelActivationContextProvider } from '~/contexts/PanelActivationContext';
import { withContextProvider } from '~/utils/withContextProvider';

function Index() {
    return (
        <div className="flex h-full w-full flex-col overflow-hidden">
            <div className="h-16 flex-shrink border-b border-b-gray-200"></div>
            <div className="h-8 flex-shrink border-b border-b-gray-200"></div>
            <div className="relative flex max-h-screen flex-grow flex-row">
                <PanelGroup 
                side="left" 
                activeId={'angular'} 
                resizable={true}>
                    <RegisteredPanel 
                    id="angular" 
                    title="Why Angular?">
                        <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>
                                    A popular open-source front-end framework for building web applications, developed and maintained by
                                    Google.
                                </p>
                            </li>
                            <li>
                                <p>
                                    It separates the application into three distinct layers: the model, which represents the data and
                                    business logic; the view, which represents the user interface; and the controller, which manages the
                                    interaction between the model and view.
                                </p>
                            </li>
                        </ul>
                        <p className="my-2 underline">Benefits of Angular</p>
                        <ul className="flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>
                                    <span className="font-semibold italic">Robust and feature-rich - </span>Developers do not need to use
                                    many third-party libraries or tools, as many common functionalities are built into Angular itself.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="font-semibold italic">Strong emphasis on testability - </span>It provides many tools
                                    and features to make it easy to test and debug applications.
                                </p>
                            </li>
                        </ul>
                        <p>
                            Angular requires developers to learn a lot of new concepts, such as TypeScript, dependency injection, and
                            observables, which can make it challenging for beginners to get started.
                        </p>
                    </RegisteredPanel>
                    <RegisteredPanel id="react" title="React Is Cool?!">
                        <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>A popular open-source JavaScript library for building user interfaces, developed by Facebook.</p>
                            </li>
                            <li>
                                <p>
                                    User interface is broken down into reusable components that can be combined to create complex
                                    interfaces.
                                </p>
                            </li>
                        </ul>
                        <p className="my-2 underline">Benefits of React</p>
                        <ul className="flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>
                                    <span className="font-semibold italic">Fast and efficient - </span>React uses a virtual DOM, and it
                                    updates the real DOM only when necessary.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="font-semibold italic">Highly flexible and extensible - </span>It can be used with a
                                    wide range of other libraries and tools, and it can be easily integrated with existing web applications.
                                </p>
                            </li>
                        </ul>
                        <p className="mt-2">
                            While React itself is relatively lightweight, it does not come with many built-in features, such as routing or
                            state management, which means that developers need to choose and configure additional libraries for these tasks.
                        </p>
                    </RegisteredPanel>
                </PanelGroup>
                <div
                style={{
                    WebkitOverflowScrolling: 'touch'
                }}
                className="flex flex-grow justify-center bg-gray-500 p-4 text-white"
                >
                    <div className="max-h-full max-w-[600px] overflow-auto">
                        <h1 className="text-xl font-bold underline underline-offset-4">React vs. Angular vs. Svelte vs. Vue</h1>
                        <p className="my-2">
                            React, Angular, Svelte, and Vue are all popular JavaScript frameworks for building user interfaces for web
                            applications. While they share some similarities, each framework has its own unique features and approaches to
                            web development.
                        </p>
                        <section>
                            <ActivatePanel targetPanelId="react">
                                <h2 className="mt-2 text-lg font-semibold">React</h2>
                            </ActivatePanel>
                            <p>
                                React is a popular front-end library for building user interfaces. It is known for its flexibility and
                                reusability, which makes it a popular choice for large-scale applications. React follows a component-based
                                architecture, where each component manages its own state and logic. React also uses a virtual DOM, which
                                makes it fast and efficient for handling updates to the user interface.
                            </p>
                        </section>
                        <section>
                            <ActivatePanel targetPanelId="angular">
                                <h2 className="mt-2 text-lg font-semibold">Angular</h2>
                            </ActivatePanel>
                            <p>
                                Angular is a full-featured front-end framework for building complex, data-driven web applications. It is
                                built and maintained by Google and has a strong emphasis on TypeScript, a statically typed superset of
                                JavaScript. Angular follows an MVC architecture, which makes it easy to structure large-scale applications.
                                It also has a rich set of built-in features such as dependency injection, templates, and directives.
                            </p>
                        </section>
                        <section>
                            <ActivatePanel targetPanelId="svelte">
                                <h2 className="mt-2 text-lg font-semibold">Svelte</h2>
                            </ActivatePanel>
                            <p>
                                Svelte is a relatively new front-end framework that emphasizes performance and small bundle sizes. Unlike
                                React and Angular, Svelte compiles code at build time, which means that it generates optimized code that
                                runs fast. Svelte also has a unique approach to state management, where it creates reactive variables that
                                update the UI automatically.
                            </p>
                        </section>
                        <section>
                            <ActivatePanel targetPanelId="vue">
                                <h2 className="mt-2 text-lg font-semibold">Vue</h2>
                            </ActivatePanel>
                            <p>
                                Vue is a progressive front-end framework that is easy to learn and use. It is similar to React in its
                                component-based architecture and virtual DOM, but it also has built-in support for templates and reactive
                                data binding. Vue is known for its simplicity and flexibility, making it a popular choice for building small
                                to medium-sized applications.
                            </p>
                        </section>
                        <p className="mt-4">
                            Overall, the choice between these frameworks depends on the specific needs of your application, your development
                            team's expertise, and your personal preferences. React and Angular are popular choices for large-scale, complex
                            applications, while Vue and Svelte are more suitable for smaller applications or rapid prototyping.
                        </p>
                    </div>
                </div>
                <PanelGroup 
                side="right" 
                activeId={'svelte'} 
                resizable={true}>
                    <RegisteredPanel 
                    id="svelte" 
                    title="Svelte">
                        <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>
                                    It was first released in 2016 and has gained popularity in recent years due to its unique approach to
                                    building user interfaces.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Unlike other front-end frameworks like React or Angular, Svelte compiles code at build time, which means
                                    that it generates optimized code that runs fast.
                                </p>
                            </li>
                        </ul>
                        <p className="my-2 underline">Benefits of Svelte</p>
                        <ul className="flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>
                                    <span className="font-semibold italic">Small bundle size - </span>Because Svelte compiles the code at
                                    build time, it is able to remove unnecessary code and generate highly optimized output.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="font-semibold italic">Simple and intuitive - </span>Svelte uses a syntax that is
                                    similar to HTML and allows developers to write code that is easy to read and understand.
                                </p>
                            </li>
                        </ul>
                        <p className="mt-2">
                            While Svelte has gained popularity in recent years, it is still a relatively new framework, which means that it
                            may not have the same level of community support or documentation as other more established frameworks.
                        </p>
                    </RegisteredPanel>
                    <RegisteredPanel 
                    id="vue" 
                    title="What about Vue?">
                        <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>Vue is an open-source JavaScript framework for building user interfaces, developed by Evan You.</p>
                            </li>
                            <li>
                                <p>
                                    Vue is often compared to other popular frameworks such as React and Angular, but it has its own unique
                                    features and advantages.
                                </p>
                            </li>
                        </ul>
                        <p className="my-2 underline">Benefits of Vue</p>
                        <ul className="flex list-disc flex-col gap-2 pl-5">
                            <li>
                                <p>
                                    <span className="font-semibold italic">Simple and easy to use - </span>It has a straightforward and
                                    intuitive syntax that is similar to HTML, which makes it easy to read and understand.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="font-semibold italic">Flexible - </span>It has a straightforward and intuitive syntax
                                    that is similar to HTML, which makes it easy to read and understand.
                                </p>
                            </li>
                        </ul>
                        <p className="mt-2">
                            While Vue is relatively lightweight compared to some other frameworks, it may still add some overhead to the
                            size of the application.
                        </p>
                    </RegisteredPanel>
                </PanelGroup>
            </div>
        </div>
    );
}

export default withContextProvider(Index, PanelActivationContextProvider);