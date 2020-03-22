import React from "react";

export class MyReferedInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.triggerFocus = this.triggerFocus.bind(this);
    }

    triggerFocus() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <button type="button" onClick={this.triggerFocus}>
                    Click Me</button>
            </div>
        );
    }
}


export class MyReferedInputTwo extends React.Component {
    constructor(props) {
        super(props);
        this.myInput = null

    };

    setTextInputRef = element => {

        setTimeout(() => this.myInput = element, 3000)
    };
    triggerFocus = () => {
        if (this.myInput) this.myInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.setTextInputRef} />
                <button type="button" onClick={this.triggerFocus}>
                    Click Me</button>
            </div>
        );
    }
}
