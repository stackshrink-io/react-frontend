import React, { Component } from 'react';
import Chess from 'react-chess';

class ChessBoardComponent extends Component {
    showMsg = () => 'Hello World'

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
                <Chess />
            </div>
        );
    }
} export default ChessBoardComponent;