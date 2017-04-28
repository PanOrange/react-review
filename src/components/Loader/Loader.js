import React, { Component } from 'react';

class Loader extends Component {
    render() {
        const classNames = "loader" + (this.props.isActive ? " active" : "");

        return (
            <div className={classNames}>Loading...</div>
        );
    }
}

export default Loader;