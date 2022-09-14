import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ConfirmModal from "../../components/confirmModal";
import { useContext } from "react";
import { articleContext } from "../../context/articleContext";
import Pagination from 'react-responsive-pagination';

function AllArticles() {

    const { state, dispatch, listOfArticle } = useContext(articleContext)
    const [articleSlug, setArticleSlug] = useState();
    const rowsPerPage = 5;

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        listOfArticle(params.id || 0);
    }, [params.id])


    const handlePageChange = (page) => {
        console.log('page', page)
        page != 1 ? navigate(`/articles/page/${page}`, { replace: true }) : navigate(`/articles`);
    }

    const confirmModal = (slug) => {
        setArticleSlug(slug)
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
                            state.ARTICLE_LIST.map((article, index) => (
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
                                        <button className="ml-1 bg-blue-light rounded px-3 py-1 text-white" onClick={() => confirmModal(article.slug)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* <Pagination
                className={"pagination border border-gray-light mt-8 flex mx-auto rounded divide-x divide-gray-light h-10"}
                pageItemClassName="text-gray-dark text-center flex item-center"
                pageLinkClassName={'w-10 h-10 leading-9'}
                activeItemClassName="text-white bg-blue"
                disabledItemClassName="text-gray-light"
                a11yActiveLabel={''}
                srOnlyClassName={'hidden'}
                total={state.TOTAL_ARTICLE % rowsPerPage ? Math.floor(state.TOTAL_ARTICLE / rowsPerPage) + 1 : Math.floor(state.TOTAL_ARTICLE / rowsPerPage)}
                current={params?.id || 1}
                previousLabel={'<'}
                nextLabel={">"}
                onPageChange={page => handlePageChange(page)}
            /> */}
            {
                state.CONFIRM_MODAL && <ConfirmModal slug={articleSlug} />
            }

        </>
    );
}

export default AllArticles;
