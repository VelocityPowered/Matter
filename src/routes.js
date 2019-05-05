import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import BaseLayout from './components/BaseLayout';
import Download from "./pages/Download";
import {Community} from "./pages/Community";

const Routes = () => (
    <BrowserRouter>
        <BaseLayout>
            <div>
                <Route path="/" exact component={Index}/>
                <Route path="/downloads" exact component={Download}/>
                <Route path="/community" exact component={Community}/>
            </div>
        </BaseLayout>
    </BrowserRouter>
)

export default Routes