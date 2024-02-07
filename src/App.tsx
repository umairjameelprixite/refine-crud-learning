import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated
,AuthPage,ErrorComponent, 
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";


import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { Layout } from "./components/layout";
import "./App.css";





function App() {
    

    
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
            
            <DevtoolsProvider>
                <Refine routerProvider={routerBindings}
dataProvider={dataProvider("https://api.fake-rest.refine.dev")} 
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        useNewQueryKeys: true,
                            projectId: "IE5K2Q-AqgY4W-i7vSbP",
                        
                    }}
                >


                        <Routes>
                            <Route index element={<WelcomePage />} />
                        </Routes>
                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
            <DevtoolsPanel />
            </DevtoolsProvider>
            
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
