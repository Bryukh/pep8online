import React from 'react';
import Codemirror from 'codemirror';


var Editor = React.createClass({
    propTypes: {
        code: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <div>
                <textarea onChange={this.props.changeCode} value={this.props.code}></textarea>

            </div>
        )
    }
});

export default Editor;

