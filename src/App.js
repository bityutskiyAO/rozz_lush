import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {ContactsPage, HomePage, ServicesPage, WorkExamplesPage} from "./pages";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/work-examples"
                    component={WorkExamplesPage}
                />
                <Route
                    path="/services"
                    component={ServicesPage}
                />
                <Route
                    path="/contacts"
                    component={ContactsPage}
                />
                <Route
                    exact={true}
                    path="/"
                    component={HomePage}
                />
                <Redirect
                    to="/"
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
