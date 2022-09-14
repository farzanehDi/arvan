export const initialState = {
    CONFIRM_MODAL: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONFIRM_MODAL":
            return { ...state, CONFIRM_MODAL: action.payload }

        default:
            return state
    }


}
export default reducer;