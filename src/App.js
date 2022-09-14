import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './utils/interceptors';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./utils/privateRoute";
import Loading from "./components/loading";
import {ArticleContextProvider} from "./context/articleContext";

const Login = React.lazy(() => import('./pages/login'));
const Register = React.lazy(() => import('./pages/register'));
const Dashboard = React.lazy(() => import('./pages/dashboard'));

function App() {
    return (
        <>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <ArticleContextProvider>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/articles/*" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                        </Routes>
                        <Loading/>
                    </ArticleContextProvider>
                </Suspense>
            </Router>
            <ToastContainer position="top-right" icon={false}/>

        </>
    );
}

export default App;
