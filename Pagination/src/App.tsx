import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from './Components/table';
import Pagination from './Components/pagination';
import axios from 'axios';
// import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setListPerPge] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10'
      );
      setData(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastData = currentPage * listPerPage;
  const indexOfFirstData = indexOfLastData - listPerPage;
  const currentPosts = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Beers</h1>
      <Table data={currentPosts} loading={loading} />
      <Pagination
        listPerPage={listPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
