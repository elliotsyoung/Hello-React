var React = require('react');

var GreeterForm = React.createClass({
    render: function() {
        return (
            <div>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" placeholder="Enter Name"/>
                    <br />
                    <textarea placeholder="Enter Message" ref="message"></textarea>
                    <br />
                    <button>Update</button>
                </form>
            </div>
        );
    }, // end of render
    onButtonClick: function(e) {
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        if (message.length > 0) {
          this.refs.message.value = '';
          updates.message = message;
        }
        this.props.onUpdates(updates);
    }, //end of onButtonClick
});

module.exports = GreeterForm;
