import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class TerminalComponent extends Component {
    showMsg = () => 'Hello World'

    render() {
        return (
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'play-chess': () => window.open('https://www.google.com/', '_blank'),
                        showmsg: this.showMsg,
                        popup: () => alert('Terminal in React')
                    }}
                    descriptions={{
                        'play-chess': 'a magical chess board appears to which you may invite your friends or select an artificial intelligence to accompany you',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }}
                    msg='What would you like to do?'
                />
        );
    }
} export default TerminalComponent;