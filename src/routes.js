import React from 'react';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Index from './pages/Index';
import BaseLayout from './components/BaseLayout';
import Download from "./pages/Download";
import Users from "./pages/Users";
import {Community} from "./pages/Community";

const history = createBrowserHistory();
history.listen(() => window.scrollTo(0, 0));

const Routes = () => (
    <Router history={history}>
        <BaseLayout>
            <div>
                <Route path="/" exact component={Index}/>
                <Route path="/downloads" exact component={Download}/>
                <Route path="/community" exact component={Community}/>
                <Route path="/users" exact component={Users}/>
            </div>
        </BaseLayout>
    </Router>
);

export default Routes