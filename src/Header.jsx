const React = require('react');
const { Component } = React;
class Header extends Component{
    state = {
        text : 'Hello Header'
    }

    render(){
        return (
            <header>
                <h1>{this.state.text}</h1>
            </header>
        )
    }
}

module.exports = Header;