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
                    play: {
                        method: (args, print, runCommand) => {
                            switch (args._[0]) {
                                case "chess":
                                    this.props.contextSwitcher();
                                    break;
                                case "frozen-lake-d":
                                    print("frozen-lake-d...");
                                    break;
                                case "frozen-lake-s":
                                    print("frozen-lake-s...");
                                    break;
                                default:
                                    print('Please select a game from the following options:');
                                    print('   chess:\n     the classical game of strategy');
                                    print('   frozen-lake-d:\n     a deterministic, text based frozen lake appears... survive');
                                    print('   frozen-lake-s:\n     a stochastic!, text based frozen lake appears... survive');
                            }
                        },
                        options: [
                            {
                                name: 'chess',
                                description: 'a magical chess board appears to which you may invite a friend or an artificial intelligence'
                            }, {
                                name: 'frozen-lake-d',
                                description: 'a deterministic text based frozen lake appears which you must navigate in order to survive',
                            }, {
                                name: 'frozen-lake-s',
                                description: 'a stochastic text based frozen lake appears which you must navigate in order to survive',
                            }
                        ]
                    },
                    rl: {
                        method: (args, print, runCommand) => {
                            switch (args._[0]) {
                                case "chess":
                                    this.props.contextSwitcher();
                                    break;
                                case "frozen-lake-d":
                                    print("frozen-lake-d...");
                                    break;
                                case "frozen-lake-s":
                                    print("frozen-lake-s...");
                                    break;
                                default:
                                    print('The argument following "rl" did not match any of the games...');
                            }
                        },
                        options: [
                            {
                                name: 'chess',
                                description: 'the classical game of strategy'
                            }, {
                                name: 'frozen-lake-d',
                                description: 'a deterministic text based frozen lake appears which you must navigate in order to survive',
                            }, {
                                name: 'frozen-lake-s',
                                description: 'a stochastic text based frozen lake appears which you must navigate in order to survive',
                            }
                        ]
                    }
                }}
                descriptions={{
                    rl: 'Demonstration of reinforcement learning playing the available games using the algorithm of your choosing!',

                    play: 'Which game would you like to play?'
                    // frozen- lake - d policy-iteration': 'reinforcement learning: given a deterministic MDP & a policy, evaluate the policy, improve it, & repeat until optimal',
                    //     showmsg: 'shows a message',
                    //     alert: 'alert', popup: 'alert'
                    // }, {
                    //     'rl frozen-lake-d value-iteration': 'reinforcement learning: given a deterministic MDP, find the optimal value function & evaluate it greedily to find the optimal policy',
                    //     showmsg: 'shows a message',
                    //     alert: 'alert', popup: 'alert'
                    // }, {
                    //     'rl frozen-lake-s policy-iteration': 'reinforcement learning: given a stochastic MDP & a policy, evaluate the policy, improve it, & repeat until optimal',
                    //     showmsg: 'shows a message',
                    //     alert: 'alert', popup: 'alert'
                    // }, {
                    //     'rl frozen-lake-s value-iteration': 'reinforcement learning: given a stochastic MDP, find the optimal value function & evaluate it greedily to find the optimal policy',
                    //     showmsg: 'shows a message',
                    //     alert: 'alert', popup: 'alert'
                    // }
                }}
                msg='What would you like to do? (type "help")'
            />
        );
    }
} export default TerminalComponent;
