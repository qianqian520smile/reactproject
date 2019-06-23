import React from 'react';
import {
    BrowserRouter as Router,

} from 'react-router-dom';
import routes from './routerSetting';
import RouterView from './routerView';


class RouterIndex extends React.Component {
    render() {
        return <Router>
            <RouterView routes={routes}></RouterView>
        </Router>
    }
}
export default RouterIndex;