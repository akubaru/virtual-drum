import React from "react";
import Bank from "../components/Bank";
import Power from "../components/Power";
import PadBank from "../components/Pad";
import Volume from "../components/Volume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            soundBank: bankOne,
            power: true,
            display: 'Press Key',
            slideVal: 0.3
        }
        this.displayHandler = this.displayHandler.bind(this);
        this.powerHandler = this.powerHandler.bind(this);
        this.bankHandler = this.bankHandler.bind(this);
        this.volumeHandler = this.volumeHandler.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }
    bankHandler() {
        if (this.state.soundBank === bankOne) {
            this.setState({
                soundBank: bankTwo
            })
        } else {
            this.setState({
                soundBank: bankOne
            })
        }
    }
    powerHandler() {
        if (this.state.power) {
            return this.setState({
                power: !this.state.power
            })
        }
        this.setState({
            power: true
        })
    }
    displayHandler(display) {
        if (this.state.power) {
            this.setState({
                display: display
            })
        }
    }
    volumeHandler(e) {
        if (this.state.power) {
            this.setState({
                slideVal: e.target.value,
                display: 'Volume: ' + Math.round(e.target.value * 100)
            })
            setTimeout(() => this.clearDisplay(), 100)
        }
    }
    clearDisplay() {
        this.setState({
            display: String.fromCharCode(160)
        })
    }
    render() {
        const clips = [].slice.call(document.getElementsByClassName('clip'));
        clips.forEach(sound => {
            sound.volume = this.state.slideVal
        });
        return (
          <div>
            <div className="inner-container" id="drum-machine">
                {/* <div id="display"> */}
                        <PadBank
                            displayHandler={this.displayHandler}
                            powerStatus={this.state.power}
                            currentPadBank={this.state.soundBank} />
                        <div className="controls-container">
                            <p id="display">{this.state.display}</p>
                            <Volume display={this.state.display}
                                slideVal={this.state.slideVal}
                                volumeHandler={this.volumeHandler} />
                            <div className="control">
                                <Power onClick={this.powerHandler}
                                powerStatus={this.clearDisplay} />
                            </div>
                            <div className="control">
                                <Bank bankHandler={this.bankHandler} powerStatus={this.state.power} />
                            </div>
                        </div>
                {/* </div> */}
            </div>
            <div className="footer">
          Made by _<a className="button" target="_blank" href="https://github.com/akubaru">Akbar </a><FontAwesomeIcon icon={faGithub} size="lg"/>
                </div>
          </div>
        )
    }
}

export default App;