import React, { Component } from 'react';
import ChessBoardComponent from "../components/ChessBoardComponent"

class ChessBoard extends Component {
    render() {
        return (
            <div
                style={{
                    padding: "20%"
                }}
            >
                <ChessBoardComponent/>
            </div>
        );
    }
} export default ChessBoard;