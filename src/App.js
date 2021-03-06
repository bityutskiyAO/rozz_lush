import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {ContactsPage, HomePage, ServicesPage, WorkExamplesPage} from "./pages";
import {Layout} from "./hoc";

function App() {
    return (
        <Layout>
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
                    path="/services/:id"
                    component={ServicesPage}
                />
                <Route
                    path="/contacts"
                    component={ContactsPage}
                />
                <Route
                    exact
                    path="/"
                    component={HomePage}
                />
                <Redirect
                    to="/"
                />
            </Switch>
        </Layout>
    );
}

export default App;
