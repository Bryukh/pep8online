import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import routes from './config/routes';
import Main from "./components/Main";

render(
    (
        <Router>
            <Route path="/" component={Main} />
        </Router>
    ),
    document.getElementById('app')
);
