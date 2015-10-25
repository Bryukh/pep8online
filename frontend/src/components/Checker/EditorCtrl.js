import React from 'react';
import Codemirror from 'codemirror';


var EditorCtrl = React.createClass({
    propTypes: {
        checkCode: React.PropTypes.func.isRequired,
        uploadFile: React.PropTypes.func.isRequired
    },
    render: function () {
        return (
            <div className="row">
                <button className="btn" onClick={this.props.uploadFile}>Upload File</button>
                <button className="btn" onClick={this.props.checkCode}>Check Code</button>

            </div>
        )
    }
});

export default EditorCtrl;

