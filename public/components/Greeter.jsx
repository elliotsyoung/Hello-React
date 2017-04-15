var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: "This is the default message!"
        };
    }, //end of getDefaultProps
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        }
    }, // end of getInitialState
    HandleUpdates: function(updates) {
      this.setState(updates);
    }, //end of onButtonClick
    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={this.state.name} message={this.state.message}/>
                <GreeterForm onUpdates={this.HandleUpdates}/>
            </div>
        );
    } // end of render
}); // end of Greeter

module.exports = Greeter;
