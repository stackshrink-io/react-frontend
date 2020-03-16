import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class TerminalComponent extends Component {
    render() {
        return (
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                    'play-chess': () => this.props.contextSwitcher()
                }}
                descriptions={{
                    'play-chess': 'a magical chess board appears to which you may invite a friend or an artificial intelligence',
                    showmsg: 'shows a message',
                    alert: 'alert', popup: 'alert'
                }}
                msg='What would you like to do?'
            />
        );
    }
} export default TerminalComponent;
