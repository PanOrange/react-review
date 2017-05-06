import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import Header from '../Header';
import Review from '../Review';
import Form from '../Form';
import Footer from '../Footer';

import reviewActions from '../../actions';

class App extends Component {
    printReview = () => {
        this.props.dispatch(reviewActions.userAskedMore());
    };

    showForm = () => {
        this.props.dispatch(reviewActions.userOpenedForm());
    };

    render() {
        const { printedReviews, storedReviews, loadReview } = this.props;

        return (
            <div>
                <Loader isActive={loadReview.isLoading} />
                <Header>Review list</Header>
                <div className="form-holder">
                    <Form />
                    {
                        !loadReview.isFormActive
                        && !loadReview.isLoading
                        && <b className="btn btn-add" onClick={this.showForm}> + Add review</b>
                    }
                </div>
                <main className="wrapper">
                    {
                        printedReviews ?
                            (
                                printedReviews.map((item) => {
                                    return <Review
                                        key={item.date}
                                        text={item.text}
                                        author={item.author}
                                        date={item.date}
                                    />;
                                })
                            ) : (
                                <p>No reviews available yet</p>
                            )
                    }
                    {
                        (storedReviews.length > 0)
                        && <button className="btn btn-load" onClick={this.printReview}>Load more...</button>
                    }
                </main>
                <Footer />
            </div>
        );
    }
}

export default connect(store => ({...store}))(App);
