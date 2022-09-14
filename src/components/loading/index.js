import React, {useContext} from 'react';
import { articleContext } from "../../context/articleContext";


const Loading = () => {

    const { state } = useContext(articleContext)

    return (

        <>
            {
                state.LOADING &&
                <div className={"fixed w-auto h-auto bg-black bg-opacity-25 top-0 bottom-0 left-0 right-0 z-30 flex-col justify-center items-center flex z-50"} >
                    <div className={"px-10 py-8 bg-white rounded border border-gray-light"} >

                       <span>Loading...</span>
                        <div className="animate-pulse mt-2">
                            <div className="h-2 bg-blue rounded w-full"></div>
                        </div>

                    </div>
                </div>
            }
        </>


    );
};

export default Loading;