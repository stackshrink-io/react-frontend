import React, { Component } from 'react';
import TerminalComponent from '../components/TerminalComponent';

class Terminal extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <TerminalComponent contextSwitcher={this.props.contextSwitcher} />
            </div>
        );
    }
} export default Terminal;