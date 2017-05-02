/**
 * Created by 11095 on 01/05/17.
 */

export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            console.log("the state is", state);
            if (state <= 0) {
                return 0;
            }
            return state - 1
        default:
            return state
    }
}
