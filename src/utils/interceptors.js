import axios from 'axios';
import {Routers} from "./configUrls";


export const interceptor = axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);


axios.interceptors.request.use(request => {

    let access_token = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).token;
    request.baseURL = Routers.BASE_URL;
    if(access_token){
        request.headers['Authorization'] = [`Bearer ${access_token}`];
    }
    return request;
});


const errorHandler = (error) => {

    console.log(
        "%c ERROR (interceptor) responce =>",
        "background: #8B0000; color: #ffffff; font-size:11pt; font-weight: bold;",
        error.response
    );

    if (error.response.status===401){
        localStorage.removeItem('userInfo');
        window.location.href="/login";
    }

    return Promise.reject({...error});

}


const successHandler = (response) => {

    console.log(
        "%c SUCCESS (interceptor) responce =>",
        "background: #006400; color: #ffffff; font-size:11pt; font-weight: bold;",
        response
    );

    return response;

};
