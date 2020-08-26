import React from 'react';
import {Route, Switch} from 'react-router';
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Landing from "./Landing";
import NotFound from "./404";
import EventDetails from "../components/EventDetails";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/view-events' component={Home}/>
                <Route exact path='/choose-stall' component={EventDetails} />
                {/*<Route exact path='/choose-stall/:eventid' component={EventDetails} />*/}
                {/*<Route exact path='/choose-stall/:eventid'*/}
                {/*       render={(props) => <EventDetails eventid={props.match.params.eventid}/>}/>*/}
                <Route component={NotFound}/>
            </Switch>
            {/*<Route exact path='/' component={} />*/}
        </div>
    );
};

export default App;
