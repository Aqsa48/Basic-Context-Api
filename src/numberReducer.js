const numberReducer = (state, action) => {
    switch (action.type) {
        case 'increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        default:
            console.log("Error")
    }
}

export default numberReducer