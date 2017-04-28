import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-inner">
                    <span>{this.props.children}</span>
                </div>
            </header>
        );
    }
}

export default Header;