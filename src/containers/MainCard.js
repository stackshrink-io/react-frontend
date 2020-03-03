import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Terminal from './Terminal';
import ChessBoard from './ChessBoard';

class MainCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
    }

    onContextSwitch = () => {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <div className="App"
                style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <Terminal contextSwitcher={this.onContextSwitch} />
                    <ChessBoard />
                </ReactCardFlip>
            </div>
        );
    }
} export default MainCard;