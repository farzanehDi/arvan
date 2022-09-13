import {useEffect, useState} from "react";
import axios from "axios";
import {Routers} from "../../utils/configUrls";
import {toast} from "react-toastify";
import { useParams } from "react-router-dom";

function AllArticles() {

    const [articleList, setArticleList] = useState([]);
    const params = useParams();

    useEffect(() => {
        listOfArticle();
        // console.log('params',params.id);
    }, [])

    const listOfArticle = async () => {
        try {
            let response = await axios(`${Routers.ARTICLES}?limit=10&offset=${params.id || 0}`);
            setArticleList(response.data.articles);
            // console.log(response.data.articles);
        } catch (error) {
            toast.error('Error in receiving information', {className: 'bg-red-light text-red'});
        }
    }

    return (

        <>
            <p className={'text-4xl mb-5'}>All Posts</p>

            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray dark:text-gray-light">
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
                        articleList.map((article,index)=>(
                            <tr key={`article${index}`} className="bg-white border-b border-gray-light text-center">
                                <td >
                                    {index+1}
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
                                <td className="py-4 px-6">
                                    {article.createdAt}
                               </td>
                            </tr>
                        ))
                    }


                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllArticles;
