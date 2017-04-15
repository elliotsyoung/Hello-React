var React = require('react');

var GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.message}</p>
            </div>
        )
    } // end of render
});

module.exports = GreeterMessage;
