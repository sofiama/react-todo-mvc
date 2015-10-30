var React = require('react');

var TodoApp = React.createClass({displayName: 'TodoApp',
    render: function() {
        return (
            React.createElement('h1', null, 
                'TodoApp'
            )
        )
    }
});

module.exports = TodoApp;