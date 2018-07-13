import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import signup from './components/signup/Signup';
import home from './components/home/Home';
import login from './components/login/Login';
// import welcome from './components/welcome/Welcome';
// import NotFound from './components/notFound/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/*<Route exact path="/" component={welcome}/>*/}
            <Route path="/" component={login}/>
            {/*<Route path="/signup" component={signup}/>*/}
            <Route path="/home" component={home}/>
            {/*<Route path="*" component={NotFound}/>*/}
        </Switch>
    </BrowserRouter>
);

export default Routes;