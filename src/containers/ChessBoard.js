import React, { Component } from 'react';
import ChessBoardComponent from "../components/ChessBoardComponent"

class ChessBoard extends Component {
    render() {
        return (
            <div
                style={{
                    display: "block",
                    justifySelf: "center",
                    alignSelf: "center",
                    maxHeight: "450px",
                    maxWidth: "450px"
                }}
            >
                <ChessBoardComponent />
            </div>
        );
    }
} export default ChessBoard;