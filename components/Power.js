import React from "react";

const inactiveStyle = {
    float: 'left'
}
const activeStyle = {
    float: 'right'
}

class Power extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleToggle: activeStyle
        }
    }
    powerToggle() {
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
    render() {
        return (
            <div className="power-container">
                <p>POWER</p>
                <div className="power-slider-container">
                    <div 
                        className="select"
                        onClick={this.powerToggle.bind(this)}
                        style={this.state.styleToggle}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Power;