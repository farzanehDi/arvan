export const initialState = {
    CONFIRM_MODAL: false,
    LOADING: false,
    ARTICLE_LIST: [],
    TOTAL_ARTICLE: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONFIRM_MODAL":
            return {...state, CONFIRM_MODAL: action.payload}
        case "LOADING":
            return {...state, LOADING: action.payload}
        case "ARTICLE_LIST":
            return {...state, ARTICLE_LIST: action.payload}
        case "TOTAL_ARTICLE":
            return {...state, TOTAL_ARTICLE: action.payload}

        default:
            return state
    }


}
export default reducer;