import React from 'react';

export default class ButtonInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boolState: false,
        };
        this.onChangeBoolState = this.onChangeBoolState.bind(this);
    }

    onChangeBoolState(event) {
        this.setState( {boolState: !this.state.boolState} );
    }

    render() {
        return (
            <view>
                <text localPosition={[0, 0.40, 0]} textSize={0.04}>{this.props.caption}</text>
                <button localPosition={[0, 0.45, 0]} width={0.25} height={0.05} roundness={0.5} textSize={0.025}
                    onClick={this.onChangeBoolState}>
                        Click Me bitch
                </button>
            </view>
        );
    }
}
