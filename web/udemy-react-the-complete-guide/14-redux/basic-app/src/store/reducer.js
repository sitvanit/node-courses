const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    let counter = state.counter;
    const results = [...state.results];

    switch (action.type) {
        case 'INCREMENT':
            counter = state.counter + 1;
            break;
        case 'DECREMENT':
            counter = state.counter - 1;
            break;
        case 'ADD':
            counter = state.counter + action.value;
            break;
        case 'SUBTRACT':
            counter = state.counter - action.value;
            break;
        case 'STORE_RESULT':
            results.push({ id: new Date(), value: state.counter });
            break;
        default:
            break;
    }

    return {
        counter,
        results
    };

};

export default reducer;
