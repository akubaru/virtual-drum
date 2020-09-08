import React from "react";

class Volume extends React.Component {
    render() {
        return (
            <div className="volume-container">
                <input type="range"
                    className="volume-slider"
                    min="0" max="1"
                    step="0.01"
                    value={this.props.slideVal}
                    onChange={this.props.volumeHandler}></input>
            </div>
        )
    }
}

export default Volume