import './App.css';
import Form from './Form';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [legoSets, setLegoSets] = useState([]);

  useEffect( () => {
    // make an axios call to the Rebrickable Api to get back an array of lego sets
    axios({
      baseURL: 'https://rebrickable.com',
      url: '/api/v3/lego/sets/',
      method: 'GET',
      params: {
        key: 'c93bcf1a05a902f8f50743ccf00ecc41',
        page_size: 15,
        min_year: 1968,
        max_year: 1968,
        min_parts: 100,
      }
    }) .then ((res) => {
      console.log(res.data.results);
      // Store this array of lego sets in state
      setLegoSets(res.data.results)
    })
  }, [])

  return (
    <>
     <header>
        <h1>Find your lego match</h1>
        <Form />
     </header>

    </>
  );
}

export default App;
