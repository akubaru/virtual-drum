import React from "react";

const inactiveStyle = {
    float: 'left'
}
const activeStyle = {
    float: 'right'
}

class Bank extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleToggle: activeStyle
        }
    }
    bankToggle() {
        if (this.props.powerStatus) {
            if (this.state.styleToggle === activeStyle) {
                this.setState({
                    styleToggle: inactiveStyle
                })
            } else {
                this.setState({
                    styleToggle: activeStyle
                })
            }
            this.props.bankHandler();
        }
    }
    render() {
        return (
            <div className="bank-container">
                <p>BANK</p>
                <div className="bank-slider-container">
                    <div 
                        className="select"
                        onClick={this.bankToggle.bind(this)}
                        style={this.state.styleToggle}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bank;