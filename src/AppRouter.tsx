import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Root from './Root';
import InterconsultationView from './views/InterconsultationView';

const AppRouter = () => {
    return (
        <NativeRouter>
            <Switch>
                <Route exact path="/" component={Root}/>
                <Route exact path="/assistance" component={InterconsultationView}/>
            </Switch>
        </NativeRouter>
    )
};

export default AppRouter;
