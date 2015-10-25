import React from 'react';

var Header = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>PEP8 online</h1>
                <h4>Check your code for PEP8 requirements</h4>
            </div>
        )
    }
});

export default Header;