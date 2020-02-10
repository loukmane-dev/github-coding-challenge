import React , {useState ,useEffect} from 'react';
import axios from 'axios' ;
import './App.css';
import Repository from './components/repository';
import Pagination from './components/pagination';


function App() {

  const [repositories,setRepositories] = useState([]);
  const [currentPage , setCurrentPage] = useState(1);
  const [records , setRecords] = useState(null);

  useEffect(() => {
    const url = `https://api.github.com/search/repositories?q=created:>2020-01-10&sort=stars&order=desc&page=${currentPage}&client_id=0940d5637c1f1c597752&client_secret=915c97a2b569d578433e381e058d86b84a8de671`;
    axios.get(url).then(res=>{
    setRepositories(res.data.items);
    setRecords(res.data.total_count)
  }).catch(res  => {
    alert("Only the first 1000 search results are available")
  });
  } ,[currentPage])

  const onPageChanged = data => {
    const { currentPage} = data;
    setCurrentPage(currentPage) ;
  }

  return (
    <div className = "container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Repository repositories={repositories} />
          <div className="d-flex flex-row py-4 justify-content-center">
            {records && <Pagination totalRecords={records} pageNeighbours={1} onPageChanged={onPageChanged} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
