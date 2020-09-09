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
        this.props.onClick();
    }
    render() {
        return (
            <div>
                <p>POWER</p>
                    <div className="select" onClick={this.powerToggle.bind(this)}>
                        <div style={this.state.styleToggle} className="inner" />
                    </div>
            </div>
        )
    }
}

export default Power;