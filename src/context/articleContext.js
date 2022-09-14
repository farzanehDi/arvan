import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import axios from "axios";
import {Routers} from "../utils/configUrls";
import {toast} from "react-toastify";


export const articleContext = React.createContext();

export const ArticleContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const listOfArticle = async (offset) => {
        dispatch({type: "LOADING",payload: true})
        try {
            let response = await axios(`${Routers.ARTICLES}?limit=5&offset=${offset}`);
            dispatch({type: "ARTICLE_LIST",payload: response.data.articles})
            dispatch({type: "TOTAL_ARTICLE",payload: response.data.articlesCount})
            dispatch({type: "LOADING",payload: false})
        } catch (error) {
            dispatch({type: "LOADING",payload: false})
            toast.error('Error in receiving information', { className: 'bg-red-light text-red' });
        }
    }
    
    return (
        <articleContext.Provider value={{ state, dispatch,listOfArticle}} >
            {props.children}
        </articleContext.Provider>
    )
}