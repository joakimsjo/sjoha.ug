import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route} from 'react-router-dom';

import Home from "./js/components/home.js"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));