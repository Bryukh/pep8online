import React from 'react';
import Main from '../components/Main';

import  { Router, Route, DefaultRoute } from 'react-router';


export default (
    <Route name="app" path="/" handler={Main}>
        <DefaultRoute handler={Main} />
    </Route>
);

