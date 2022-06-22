import './App.css';
import Form from './Form';
import DisplayLegoSets from './DisplayLegoSets';
import LegoHouse from './LegoHouse';
import legoHeads from './assets/legoHeads.png';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [legoSets, setLegoSets] = useState([]);

  const [userInputValues, setUserInputValues] = useState([]);


  useEffect(() => {
    // make an axios call to the Rebrickable Api to get back an array of lego sets

    if (userInputValues  && userInputValues.length !== 0 && userInputValues.year !== "") {
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
      }).then((res) => {

        // Store this array of lego sets in state
        setLegoSets(res.data.results)
        
      }).catch(function (error) {
        if (error.response){
            alert("Please try a new input")
          }
        })
    }
  }, [userInputValues])

  const getUserInput = function (event, inputValue) {
    event.preventDefault();
    const { name, value } = event;

    setUserInputValues({
      ...inputValue,
      [name]: value,
    });
}

return (
  <>
    <header>
      <div className='wrapper'>
        <div className='headerContent'>
          <h1>Discover the<span className='block'>past sets of</span><span className='lego'><span className='l'>l</span><span className='e'>e</span><span className='g'>g</span><span className='o'>o</span></span></h1>
          <p>Find Lego sets and rediscover the allure and imaginative power of these tiny bricks</p>
          <Form handleSubmit={getUserInput} />
        </div>
        <LegoHouse />
      </div>
      <img aria-hidden="true" className="legoHeads" src={legoHeads} alt="" />
    </header>
    <main>
      <DisplayLegoSets legoSets={legoSets} />
    </main>
    <footer>
      <p>Created at Juno College</p>
    </footer>
  </>
);
}

export default App;
