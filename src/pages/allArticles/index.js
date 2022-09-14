import { useEffect, useState } from "react";
import axios from "axios";
import { Routers } from "../../utils/configUrls";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import ConfirmModal from "../../components/confirmModal";
import { useContext, useDispatch } from "react";
import { modalContext } from "../../context/modalContext";
import Pagination from 'react-responsive-pagination';

function AllArticles() {

    const { state, dispatch } = useContext(modalContext)
    const [articleList, setArticleList] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    let navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        listOfArticle();
        console.log('params', params.id);
    }, [])

    const listOfArticle = async () => {
        try {
            let response = await axios(`${Routers.ARTICLES}?limit=10&offset=${params.id || 0}`);
            setArticleList(response.data.articles);
            setTotalPages(response.data.articlesCount)
        } catch (error) {
            toast.error('Error in receiving information', { className: 'bg-red-light text-red' });
        }
    }


    const handlePageChange = (page) => {
        console.log('page', page)
        page != 1 ? navigate(`/articles/page/${page}`, { replace: true }) : navigate(`/articles`);

    }

    const openModal = () => {
        dispatch({
            type: "CONFIRM_MODAL",
            payload: !state.CONFIRM_MODAL
        })
    }
    return (

        <>
            <p className={'text-4xl mb-5'}>All Posts</p>

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-dark">
                    <thead className="font-bold text-gray uppercase bg-silver text-center">
                        <tr>
                            <th scope="col" className="py-2 px-6">
                                #
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Author
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Tags
                            </th>
                            <th scope="col" className="py-2 px-6">
                                Excerpt
                            </th>
                            <th scope="col" className="py-2 px-6">
                                created
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            articleList.map((article, index) => (
                                <tr key={`article${index}`} className="bg-white border-b border-gray-light text-center">
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td className="py-4 px-6">
                                        {article.title}
                                    </td>
                                    <td className="py-4 px-6">
                                        {article.author.username}
                                    </td>
                                    <td className="py-4 px-6">
                                        {article.tagList.join(" , ")}
                                    </td>
                                    <td className="py-4 px-6">
                                        {article.body.split(' ').slice(0, 20).join(' ')}
                                    </td>
                                    <td className="py-4 px-6 flex items-center">
                                        {article.createdAt}
                                        <button className="ml-1 bg-blue-light rounded px-3 py-1 text-white">Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


            <Pagination
                className={"border border-gray-light mt-8 flex mx-auto rounded divide-x divide-gray-light w-60 h-10"}
                pageItemClassName="text-gray-dark text-center flex item-center"
                pageLinkClassName={'w-10 h-10 leading-9'}
                activeItemClassName="text-white bg-blue"
                disabledItemClassName="text-gray-light"
                a11yActiveLabel={''}
                srOnlyClassName={'hidden'}
                total={totalPages}
                current={params.id}
                previousLabel={'<'}
                nextLabel={">"}
                onPageChange={page => handlePageChange(page)}
            />

            <ConfirmModal />
        </>
    );
}

export default AllArticles;
