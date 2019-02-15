import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';

import Home from "./js/components/home.js"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router history={hashHistory}>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));