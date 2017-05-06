import React, { Component } from 'react';
import { connect } from 'react-redux';

import reviewActions from '../../actions';

const initialState = {
    author: "",
    text: "",
    date: null
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onCloseForm = () => {
        this.props.dispatch(reviewActions.userClosedForm());
        this.setState(initialState);
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.author.length > 1 && this.state.text.length > 1 ) {

            this.setState({
                date: (+new Date())
            });

            this.props.dispatch(reviewActions.userSentReview());

            setTimeout(() => {
                this.props.dispatch(reviewActions.printReview(this.state));
                this.setState(initialState);
            }, 3000);

            window.scrollTo(0, 0)
        }
    };

    render() {
        const { loadReview } = this.props;

        return (
            <form className={ loadReview.isFormActive ? "form active" : "form"}>
                <fieldset>
                    <div className="close" onClick={this.onCloseForm} >+</div>
                    <div className="form-item">
                        <label>Your name <br/>
                            <input name="author"
                                   type="text"
                                   onChange={this.onChange}
                                   value={this.state.author}
                            />
                        </label>
                    </div>
                    <div className="form-item">
                        <label>Your review<br/>
                            <textarea
                                name="text"
                                onChange={this.onChange}
                                value={this.state.text}
                            />
                        </label>
                    </div>
                    <div className="form-item">
                        <button
                            className="btn-publish"
                            onClick={this.onSubmit}
                        >Publish</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default connect(store => ({...store}))(Form);