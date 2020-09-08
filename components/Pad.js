import React from "react";

const inactiveStyle = {
    backgroundColor: '#C6C6C6',
    boxShadow: '1px 1px 3px 0 hsla(0,0%,97%,.67), 1px 1px 3px 0 #eee'
}
const activeStyle = {
    backgroundColor: 'blue',
    boxShadow: '0 3px blue'
}

class Pad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleToggle: inactiveStyle
        }
    }
    padToggle() {
        if (this.props.powerStatus) {
            if (this.state.styleToggle === inactiveStyle) {
                this.setState({
                    styleToggle: activeStyle
                })
            } else {
                this.setState({
                    styleToggle: inactiveStyle
                })
            }
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.keypressHandler)
    }
    componentWillMount() {
        document.removeEventListener('keydown', this.keypressHandler)
    }
    keypressHandler() {
        if (this.props.powerStatus) {
            if (event.keyCode === this.props.keyCode) {
                this.clickHandler()
            }
        }
    }
    clickHandler() {
        if (this.props.powerStatus) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.displayHandler(this.props.id);
            this.padToggle()
            setTimeout(() => this.padToggle(), 100)
        }
    }
    render() {
        return (
            <div className="pad-bank">
                <div className="drum-pad"
                    id={this.props.id}
                    onClick={this.clickHandler}
                    style={this.state.styleToggle}>
                        <p>{this.props.keyTrigger}</p>
                        <audio src={this.props.src}
                            className="clip"
                            id={this.props.keyTrigger}
                            ref={ref => this.audio = ref}>
                        </audio>
                </div>
            </div>
        )
    }
}

export default Pad;