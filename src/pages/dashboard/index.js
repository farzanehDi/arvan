import React from 'react';
import {Route, Routes} from "react-router-dom";
import Sidebar from "../../components/sidebar";

const AllArticles = React.lazy(() => import('../allArticles'));

function Dashboard() {



  return (
    <Sidebar>
      <React.Suspense fallback={<span></span>}>
        <Routes>
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/page/:id" element={<AllArticles />} />
        </Routes>
      </React.Suspense>
    </Sidebar>
  );
}

export default Dashboard;
