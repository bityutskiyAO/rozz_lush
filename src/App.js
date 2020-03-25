import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {ContactsPage, HomePage, ServicesPage, WorkExamplesPage} from "./pages";
import {Layout} from "./hoc";
import Test from "./Test";

function App() {
    return (
        <Layout>
            <Switch>
                <Route
                    path="/test"
                    component={Test}
                />
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
        </Layout>
    );
}

export default App;
