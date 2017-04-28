const reviewActions = {
    userAskedMore() {
        return {
            type: 'USER_ASKED_MORE'
        };
    },
    userOpenedForm() {
        return {
            type: 'USER_OPENED_FORM'
        };
    },
    userSentReview() {
        return {
            type: 'USER_SENT_REVIEW'
        };
    },
    printReview(data) {
        return {
            type: 'PRINT_REVIEW',
            payload: {...data}
        };
    },
    userClosedForm() {
        return {
            type: 'USER_CLOSED_FORM'
        };
    }
}

export default reviewActions;