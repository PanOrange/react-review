import React, { Component } from 'react';

class Review extends Component {
    render() {
        let date = new Date(this.props.date).toLocaleString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });

        return (
            <div className="review-item">
                <span className="author">{this.props.author}</span>
                <span className="date">{date}</span>
                <p className="review-text">{this.props.text}</p>
            </div>
        );
    }
}

export default Review;