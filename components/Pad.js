import React from "react";

const inactiveStyle = {
    backgroundColor: 'rgb(48, 180, 241)',
    boxShadow: "0 3px rgb(48, 180, 241)",
    height: 77,
    marginTop: 13
}
const activeStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: "3px 3px 5px black"
}

class Pad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleToggle: inactiveStyle
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.padToggle = this.padToggle.bind(this);
        this.keypressHandler = this.keypressHandler.bind(this);
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
        } else {
            if (this.state.styleToggle === activeStyle) {
                this.setState({
                    styleToggle: inactiveStyle
                })
            } else {
                this.setState({
                    styleToggle: {
                        height: 77,
                        marginTop: 13,
                        backgroundColor: 'grey',
                        boxShadow: '0 3px grey'
                    }
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
            this.props.displayHandler(this.props.id.replace(/-/g, ' '));
            this.padToggle()
            setTimeout(() => this.padToggle(), 100)
        }
    }
    render() {
        return (
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
        )
    }
}

class PadBank extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let padBank;
        if (this.props.powerStatus) {
            padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
                return (
                    <Pad 
                        id={padBankArr[i].id}
                        url={padBankArr[i].url}
                        keyTrigger={padBankArr[i].keyTrigger}
                        keyCode={padBankArr[i].keyCode}
                        displayHandler={this.props.displayHandler}
                        powerStatus={this.props.powerStatus}
                    />
                )
            })
        } else {
            padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
                return (
                    <Pad 
                        id={padBankArr[i].id}
                        url="#"
                        keyTrigger={padBankArr[i].keyTrigger}
                        keyCode={padBankArr[i].keyCode}
                        displayHandler={this.props.displayHandler}
                        powerStatus={this.props.displayHandler}
                    />
                )
            })
        }
        return (
            <div className="pad-bank">
                {padBank}
            </div>
        )
    }
}

export default PadBank;