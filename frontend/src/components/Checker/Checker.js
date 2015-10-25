import React from 'react';
import Editor from './Editor';
import EditorCtrl from './EditorCtrl';

var Checker = React.createClass({
    propTypes: {
        initialCode: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            code: this.props.initialCode
        }
    },
    changeCode: function (e) {
        this.setState({code: e.target.value});
    },
    uploadFile: function () {

    },
    checkCode: function () {

    },
    render: function () {
        return (
            <div className="container">
                <span>{this.state.code}</span>
                <Editor changeCode={this.changeCode} code={this.state.code} />
                <EditorCtrl checkCode={this.changeCode} uploadFile={this.uploadFile} />
            </div>
        )
    }
});

export default Checker;

