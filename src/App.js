import './App.css';
import Form from './Form';
import DisplayLegoSets from './DisplayLegoSets';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [legoSets, setLegoSets] = useState([]);

  const [userInputValues, setUserInputValues] = useState([]);

  useEffect( () => {
    // make an axios call to the Rebrickable Api to get back an array of lego sets
    axios({
      baseURL: 'https://rebrickable.com',
      url: '/api/v3/lego/sets/',
      method: 'GET',
      params: {
        key: 'c93bcf1a05a902f8f50743ccf00ecc41',
        page_size: 15,
        min_year: userInputValues.year,
        max_year: userInputValues.year,
        min_parts: userInputValues.pieces,
      }
    }) .then ((res) => {
      console.log(res.data.results);
      // Store this array of lego sets in state
      setLegoSets(res.data.results)
    })
  }, [userInputValues])

  const getUserInput = function (event, inputValue) {

    event.preventDefault();

    const {name, value} = event;

    setUserInputValues({
      ...inputValue,
      [name]: value,
    });
    console.log("here is setUserChoice", userInputValues)
  }

  return (
    <>
     <header>
        <h1>Find your lego match</h1>
        <Form handleSubmit={getUserInput} />
     </header>
     <DisplayLegoSets legoSets={legoSets} />

    </>
  );
}

export default App;
