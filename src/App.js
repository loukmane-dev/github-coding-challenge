import React , {useState ,useEffect} from 'react';
import axios from 'axios' ;
import './App.css';
import Repository from './components/repository';


function App() {

  const [repositories,setRepositories] = useState([]);

  useEffect(() => {
    const url = `https://api.github.com/search/repositories?q=created:>2020-01-10&sort=stars&order=desc&page=1`;
    axios.get(url).then(res=>{
    setRepositories(res.data.items);
  });
  } ,[])

  return (
    <div className = "container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Repository repositories={repositories} />
        </div>
      </div>
    </div>
  );
}

export default App;
