import update from 'react-addons-update';

const initialState = {

    printedReviews: [
        {
            author: "John Black",
            date: 1493194099552,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur, deleniti eius enim excepturi fugiat harum hic id laudantium nesciunt nisi, officiis quae quis reiciendis, sunt vitae voluptates. At, fuga."
        }, {
            author: "Alex Colt",
            date: 1493123000102,
            text: "Accusamus architecto cum, delectus distinctio dolore dolorem doloribus ducimus enim eos error facere fugit harum illum, in laudantium minima minus nostrum, officia perferendis placeat praesentium repudiandae vitae voluptatum. Minima, officiis."
        }
    ],

    storedReviews: [
        {
            author: "Harry White",
            date: 1493125001023,
            text: "Architecto enim, explicabo laboriosam laudantium minus modi natus obcaecati odit, quae quam sed, unde veniam! Blanditiis corporis deleniti dolore dolores eligendi explicabo fugiat, fugit ipsum nam nesciunt nisi quae unde!"
        }, {
            author: "George Goldman",
            date: 1493227001023,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur, deleniti eius enim excepturi fugiat harum hic id laudantium nesciunt nisi, officiis quae quis reiciendis, sunt vitae voluptates. At, fuga."
        }, {
            author: "Pete Bell",
            date: 1493194000011,
            text: "Alias fuga illo ipsum mollitia quas soluta veritatis. Consequuntur esse ex hic impedit, inventore magnam officia quis sit vel. Nam, qui, repellendus. Dolores inventore libero nobis numquam qui repellat voluptatum"
        }, {
            author: "Kate Pretty",
            date: 1493124000102,
            text: "Consequuntur distinctio dolorem doloremque dolores expedita, illum in laborum maxime modi necessitatibus nostrum quae quidem ratione reiciendis reprehenderit sunt tempora veniam? Aperiam beatae consequatur, laboriosam perferendis reiciendis sunt ullam vitae."
        }, {
            author: "Mary Smile",
            date: 1493255001023,
            text: "Consequuntur distinctio dolorem doloremque dolores expedita, illum in laborum maxime modi necessitatibus nostrum quae quidem ratione reiciendis reprehenderit sunt tempora veniam? Aperiam beatae consequatur, laboriosam perferendis reiciendis sunt ullam vitae."
        }
    ],

    loadReview: {
        isLoading: false,
        isFormActive: false
    }
};

const reviewReducer = function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "USER_ASKED_MORE":
            let newItem = state.storedReviews.splice(0, 2);
            return update(state, { printedReviews: { $push: newItem} });
        case "USER_OPENED_FORM":
            return update(state, {
                loadReview: {
                    isFormActive: { $set: true }
                }
            });
        case "USER_SENT_REVIEW":
            return update(state, {
                loadReview: {
                    isLoading: { $set: true },
                    isFormActive: { $set: false }
                }
            });
        case "PRINT_REVIEW":
            let newRev = {...payload};
            return update(state, {
                printedReviews: { $unshift: [newRev] },
                loadReview: {
                    isLoading: { $set: false }
                }
            });
        case "USER_CLOSED_FORM":
            return update(state, {
                loadReview: {
                    isFormActive: { $set: false }
                }
            });
        default:
            return state;
    }
}


export default reviewReducer;