import useForm from "../../utils/useForm";
import validate from './validateCreateArticle';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Routers} from "../../utils/configUrls";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {articleContext} from "../../context/articleContext";


function AddArticle() {

    const { dispatch } = useContext(articleContext)
    const [tagsList, setTagsList] = useState([]);
    const [tag, setTag] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getTags();
    }, [])

    const getTags = async () => {
        dispatch({type: "LOADING",payload: true})
        try {
            let response = await axios(Routers.GET_TAGS);
            setTagsList(response.data.tags)
            dispatch({type: "LOADING",payload: false})
        } catch (error) {
            toast.error('Login Failed!  User name and/or Password is invalid', {className: 'bg-red-light text-red'});
            dispatch({type: "LOADING",payload: false})
        }
    };

    const createArticle =async () => {
        dispatch({type: "LOADING",payload: true})
        let data = {
            article: {
                body: values.body,
                description: values.description,
                title: values.title,
                tagList:selectedTags
            }
        };
        try {
            let response = await axios(Routers.ARTICLES, { method: 'POST', data });
            console.log('created',response.data);
            toast.success('Well done! Article created successfuly');
            navigate(`/articles`);
            dispatch({type: "LOADING",payload: false})
        } catch (error) {
            toast.error('ARTICLES Failed!', { className: 'bg-red-light text-red' });
            dispatch({type: "LOADING",payload: false})
        }
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(createArticle, validate);

    const handleCheck = (event) => {
        let updatedList = [...selectedTags];
        if (event.target.checked) {
            updatedList = [...selectedTags, event.target.value];
        } else {
            updatedList.splice(selectedTags.indexOf(event.target.value), 1);
        }
        setSelectedTags(updatedList);
        console.log('tags',selectedTags)
    };
    // const AddTag = async () => {
    //     if (!tag) {
    //         setTagErr(true);
    //         return false;
    //     } else
    //         setTagErr(false)
    //
    //     try {
    //         let response = await axios(Routers.GET_TAGS);
    //         setTagsList(response.data.tags)
    //         console.log('add tags', response.data)
    //     } catch (error) {
    //         toast.error('Login Failed!  User name and/or Password is invalid', {className: 'bg-red-light text-red'});
    //     }
    // };

    return (
        <>

            <p className={'text-4xl mb-5'}>New Article</p>
            <form onSubmit={handleSubmit} noValidate>

                <div className="grid md:grid-cols-12 grid-cols-1 gap-4">

                    <div className="col-span-7">
                        <div>
                            <label>Title</label>
                            <input type={'text'} className={`mt-1.5  ${errors.title && 'border-red'}`} name={'title'}
                                   onChange={handleChange} value={values.title || ''} placeholder={'Title'} required/>
                            {errors.title && (
                                <p className="text-red mt-1">{errors.title}</p>
                            )}
                        </div>

                        <div className="mt-5">
                            <label>Description</label>
                            <input type={'text'} className={`mt-1.5 ${errors.description && 'border-red'}`}
                                   name={'description'}
                                   onChange={handleChange} value={values.description || ''} required
                                   placeholder={'Descriptio'}/>
                            {errors.description && (
                                <p className="text-red mt-1">{errors.description}</p>
                            )}
                        </div>

                        <div className="mt-5">
                            <label>Body</label>
                            <input type={'text'} className={`mt-1.5 ${errors.body && 'border-red'}`} name={'body'}
                                   onChange={handleChange} value={values.body || ''} required/>
                            {errors.body && (
                                <p className="text-red mt-1">{errors.body}</p>
                            )}
                        </div>

                    </div>


                    <div className="col-span-4">

                        <label>Tags</label>
                        <div className={'flex items-center space-x-1 mt-1.5'}>
                            <input type={'text'} placeholder={'New tag'}
                                   value={tag}
                                   onChange={(e) => setTag(e.target.value)}/>

                            <div className={'rounded bg-blue-light text-white py-2 px-3 cursor-pointer'} >+</div>
                        </div>


                        <div className="border rounded border-gray-light mt-2 p-2 space-y-2">
                            {
                                tagsList.map((tag, index) => (
                                    <div key={`tag${index}`} className="flex items-center">
                                        <input type={'checkbox'} value={tag} onChange={handleCheck}/>
                                        <span className="ml-2">{tag}</span>
                                    </div>
                                ))
                            }

                        </div>


                    </div>
                </div>

                <button type="submit" className="btn-blue mt-7 w-24">submit</button>

            </form>
        </>
    );
}

export default AddArticle;
