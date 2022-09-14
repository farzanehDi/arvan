import {NavLink, useNavigate} from "react-router-dom";
import useForm from "../../utils/useForm";
import validate from "./validateRegister";
import axios from "axios";
import { Routers } from "../../utils/configUrls";
import { toast } from "react-toastify";
import {useContext} from "react";
import {articleContext} from "../../context/articleContext";

function Register() {

    const { dispatch } = useContext(articleContext);
    const navigate = useNavigate();

    const register = async () => {
        dispatch({type: "LOADING",payload: true})
        let data = {
            user: {
                username: values.user,
                email: values.email,
                password: values.password
            }
        };

        try {
            let response = await axios(Routers.REGISTER, { method: 'POST', data });
            localStorage.setItem('userInfo', JSON.stringify({
                token: response.data.user.token,
                username: response.data.user.username
            }))
            dispatch({type: "LOADING",payload: false});
            toast.success('Your registration was successful!', { className: 'bg-green-light text-green' });
            navigate(`/articles`);
        } catch (error) {
            toast.error('Register Failed!', { className: 'bg-red-light text-red' });
            dispatch({type: "LOADING",payload: false})
        }
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(register, validate);


    return (
        <div className={'site'}>
            <div className={'siteContainer'}>
                <form className={'card'} onSubmit={handleSubmit} noValidate>
                    <h1 className="text-gray text-center">Register</h1>

                    <div className="mt-6">
                        <label>User</label>
                        <input type={'text'} className={`mt-1.5 ${errors.user && 'border-red'}`} name={'user'} onChange={handleChange} value={values.user || ''} required />
                        {errors.user && (
                            <p className="text-red mt-1">{errors.user}</p>
                        )}
                    </div>

                    <div className="mt-6">
                        <label>Email</label>
                        <input type={'text'} className={`mt-1.5 ${errors.email && 'border-red'}`} name={'email'} onChange={handleChange} value={values.email || ''} required />
                        {errors.email && (
                            <p className="text-red mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className="mt-6">
                        <label>Password</label>
                        <input type={`password`} className={`mt-1.5 ${errors.password && 'border-red'}`} name={'password'} onChange={handleChange} value={values.password || ''} required />
                        {errors.password && (
                            <p className="text-red mt-1">{errors.password}</p>
                        )}
                    </div>

                    <button className="btn-blue mt-7 w-full">Register</button>
                    <div className="flex items-center mt-4 text-gray-dark">
                        <p className="mr-1">Already Registered?</p>
                        <NavLink to={'/login'} className="font-bold">
                            login
                        </NavLink>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;
