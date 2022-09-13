import { NavLink } from "react-router-dom";
import useForm from "../../utils/useForm";
import validate from "./validateLogin";
import axios from "axios";
import { Routers } from "../../utils/configUrls";
import { toast } from "react-toastify";

function Login() {


    const login = async () => {

        let data = {
            user: {
                email: values.email,
                password: values.password
            }
        };

        try {
            let response = await axios(Routers.LOGIN, { method: 'POST', data });
            localStorage.setItem('userInfo', JSON.stringify({
                token: response.data.user.token,
                username: response.data.user.username
            }))
        } catch (error) {
            toast.error('Login Failed!  User name and/or Password is invalid', { className: 'bg-red-light text-red' });
        }
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);


    return (
        <div className={'site'}>
            <div className={'siteContainer'}>
                <form onSubmit={handleSubmit} className={'card'} noValidate>
                    <h1 className="text-gray text-center">LOGIN</h1>

                    <div className="mt-6">
                        <label>Email</label>
                        <input type={'email'} className={`mt-1.5  ${errors.email && 'border-red'}`} name={'email'}
                            onChange={handleChange} value={values.email || ''} required />
                        {errors.email && (
                            <p className="text-red mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className="mt-6">
                        <label>Password</label>
                        <input type={'password'} className={`mt-1.5 ${errors.password && 'border-red'}`} name={'password'}
                            onChange={handleChange} value={values.password || ''} required />
                        {errors.password && (
                            <p className="text-red mt-1">{errors.password}</p>
                        )}
                    </div>

                    <button type="submit" className="btn-blue mt-7 w-full">Login</button>
                    <div className="flex items-center mt-4 text-gray-dark">
                        <p className="mr-1">Don’t have account?</p>
                        <NavLink to={'/register'} className="font-bold">
                            Register Now
                        </NavLink>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
