import React from 'react';
import ReactDOM from 'react-dom';

import { MyReferedInput, MyReferedInputTwo } from 'refs'


export default class Alerts extends React.Component {

    constructor(props) {
        super(props);
        this.myMini = null;
    }

    componentDidMount() {
        var ref1 = this.refs.ref1;
        var ref2 = ReactDOM.findDOMNode(this.refs.ref2);
        console.log("ref1 ", ref1);
        console.log("ref2 ", ref2);
        ref2.style.background = "green";
    }

    setMiniRef = element => {
        this.myMini = element
    };

    handleClick = () => {
        console.log("Ref1 Value", this.refs.ref1.value)
    }

    render() {
        return <div>
            <h2>Alerts Page</h2>
            <MyReferedInput />
            <MyReferedInputTwo />
            <WontWork ref={this.setMiniRef} />
            <input ref="ref1" />
            <MiniAlerts ref="ref2" />
            <button onClick={this.handleClick}>Show Ref1 value</button>
        </div>
    }
}

export class MiniAlerts extends React.Component {

    render() {
        return <div>
            <h2>Make Me Green</h2>
        </div>

    }
}

export function WontWork() {

    return <div>
        <h2>Make Me Red</h2>
    </div>

}