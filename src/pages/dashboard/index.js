import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar";

const AllArticles = React.lazy(() => import('../allArticles'));
const AddArticles = React.lazy(() => import('../addArticle'));

function Dashboard() {



  return (
    <Sidebar>
      <React.Suspense fallback={<span>loading...</span>}>

          <Routes>
            <Route exact={true} path="/" element={<AllArticles />} />
            <Route path="/page/:id" element={<AllArticles />} />
            <Route exact={true} path="/create" element={<AddArticles />} />
          </Routes>

      </React.Suspense>
    </Sidebar>
  );
}

export default Dashboard;
