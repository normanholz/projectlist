import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ProjectList from "./components/ProjectList";

const Root = () => {
    return (
        <App>
            <ProjectList/>
        </App>
    );
};

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
);
