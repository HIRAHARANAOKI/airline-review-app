import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Airlines from "./Airlines/Airlines";
import Airline from "./Airlines/Airline";

const App = () => {
    return (
        <div>
        <Switch>
            <Route exact path='/' component={Airlines} />
            <Route exact path='/:slug' component={Airline} />
        </Switch>
            <h1>App js</h1>
        </div>

    );
};

export default App;