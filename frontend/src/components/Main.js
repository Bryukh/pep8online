import React from 'react';
import Header from './Header';
import Checker from './Checker/Checker';

var Main = React.createClass({
    getInitialState: function () {
        return {
            initialCode: "Paste your code"
        }
    },
    render: function () {
        return (
            <div className="container">
                <Header />

                <Checker initialCode={this.state.initialCode} />
            </div>
        );
    }
});


export default Main;