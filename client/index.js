import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import App from './components/App';
import ProjectList from "./components/ProjectList";

// TODO update react router to latest version
const Root = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProjectList}/>
            </Route>
        </Router>
    );
};

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
);
