var React = require('react');
var TodoApp = require('./components/TodoApp');

React.render(
    React.createElement(TodoApp, null),
    document.getElementById('todoapp')
);