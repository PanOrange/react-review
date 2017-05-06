import React, { Component } from 'react';

class Loader extends Component {
    render() {
        const classNames = "loader " + (this.props.isActive ? " active" : "");

        return (
            <div className={classNames}>
                <div className="cs-loader">
                    <label>	●</label>
                    <label>	●</label>
                    <label>	●</label>
                    <label>	●</label>
                    <label>	●</label>
                    <label>	●</label>
                </div>
            </div>
        );
    }
}

export default Loader;