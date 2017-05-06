import React, { Component } from 'react';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 100)
    }

    render() {
        const date = new Date(this.props.date).toLocaleString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });

        const classNames = "review-item" + (this.state.isLoaded ? " loaded" : "")

        return (
            <div className={classNames}>
                <span className="author">{this.props.author}</span>
                <span className="date">{date}</span>
                <p className="review-text">{this.props.text}</p>
            </div>
        );
    }
}

export default Review;