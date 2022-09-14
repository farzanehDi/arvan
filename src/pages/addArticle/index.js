import useForm from "../../utils/useForm";
import validate from './validateCreateArticle';


function AddArticle() {

   

    const createArticle = () => {
        console.log('ok');
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(createArticle, validate);

    
    return (
        <>
                        
            <p className={'text-4xl mb-5'}>New Article</p>
            <form onSubmit={handleSubmit} noValidate >

                <div className="grid md:grid-cols-12 grid-cols-1 gap-4">

                    <div className="col-span-7">
                        <div>
                            <label>Title</label>
                            <input type={'text'} className={`mt-1.5  ${errors.title && 'border-red'}`} name={'title'}
                                onChange={handleChange} value={values.title || ''} placeholder={'Title'} required />
                            {errors.title && (
                                <p className="text-red mt-1">{errors.title}</p>
                            )}
                        </div>

                        <div className="mt-5">
                            <label>Description</label>
                            <input type={'text'} className={`mt-1.5 ${errors.description && 'border-red'}`} name={'description'}
                                onChange={handleChange} value={values.description || ''} required placeholder={'Descriptio'} />
                            {errors.description && (
                                <p className="text-red mt-1">{errors.description}</p>
                            )}
                        </div>

                        <div className="mt-5">
                            <label>Body</label>
                            <input type={'text'} className={`mt-1.5 ${errors.body && 'border-red'}`} name={'body'}
                                onChange={handleChange} value={values.body || ''} required />
                            {errors.body && (
                                <p className="text-red mt-1">{errors.body}</p>
                            )}
                        </div>

                    </div>


                    <div className="col-span-4">


                        <label>Tags</label>
                        <input type={'text'} className={`mt-1.5  ${errors.tag && 'border-red'}`} placeholder={'New tag'} name={'tag'}
                            onChange={handleChange} value={values.tag || ''} required />
                        {errors.tag && (
                            <p className="text-red mt-1">{errors.tag}</p>
                        )}
                        <div className="border rounded border-gray-light mt-2 p-2">
                            <div className="flex items-center">
                                <input type={'checkbox'} />
                                <span className="ml-2">tag</span>
                            </div>
                            <div className="flex items-center">
                                <input type={'checkbox'} />
                                <span className="ml-2">tag</span>
                            </div>
                            <div className="flex items-center">
                                <input type={'checkbox'} />
                                <span className="ml-2">tag</span>
                            </div>
                            <div className="flex items-center">
                                <input type={'checkbox'} />
                                <span className="ml-2">tag</span>
                            </div>
                            <div className="flex items-center">
                                <input type={'checkbox'} />
                                <span className="ml-2">tag</span>
                            </div>
                        </div>


                    </div>
                </div>

                <button type="submit" className="btn-blue mt-7 w-24">submit</button>

            </form>
        </>
    );
}

export default AddArticle;
