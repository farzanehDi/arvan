import React, { useReducer } from "react";
import reducer, { initialState } from "./reducer";
// import { Routers } from "../utils/configUrl";
// import axios from "axios";

export const modalContext = React.createContext();

export const ModalContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // const getList = async () => {
    //     try {
    //         const response = await axios(Routers.LIST);
    //         const data = response.data;
    //         dispatch({
    //             type: "LISTS",
    //             payload: data
    //         })
    //     } catch (err) {
    //         console.log('err', err)
    //     }
    // };

    return (
        <modalContext.Provider value={{ state, dispatch }} >
            {props.children}
        </modalContext.Provider>
    )
}