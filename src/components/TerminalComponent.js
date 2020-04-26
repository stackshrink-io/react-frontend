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
                descriptions={
                    {
                        'play chess': 'a magical chess board appears to which you may invite a friend or an artificial intelligence',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    },{
                        'play frozen-lake-d': 'a deterministic text based frozen lake appears which you must navigate in order to survive',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    },{
                        'play frozen-lake-s': 'a stochastic text based frozen lake appears which you must navigate in order to survive',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    },{
                        'rl frozen-lake-d policy-iteration': 'reinforcement learning: given a deterministic MDP & a policy, evaluate the policy, improve it, & repeat until optimal',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    },{
                        'rl frozen-lake-d value-iteration': 'reinforcement learning: given a deterministic MDP, find the optimal value function & evaluate it greedily to find the optimal policy',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    },{
                        'rl frozen-lake-s policy-iteration': 'reinforcement learning: given a stochastic MDP & a policy, evaluate the policy, improve it, & repeat until optimal',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    },{
                        'rl frozen-lake-s value-iteration': 'reinforcement learning: given a stochastic MDP, find the optimal value function & evaluate it greedily to find the optimal policy',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }
                }
                msg='What would you like to do? (type "help")'
            />
        );
    }
} export default TerminalComponent;
