import './App.css';
import Form from './Form';
import DisplayLegoSets from './DisplayLegoSets';
import Footer from './Footer';
import LegoHouse from './LegoHouse';
import legoHeads from './assets/legoHeads.png';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [legoSets, setLegoSets] = useState([]);

  const [userInputValues, setUserInputValues] = useState([]);

  const [error, setError] = useState(null)


  useEffect(() => {
    // make an axios call to the Rebrickable Api to get back an array of lego sets

    if (userInputValues  && userInputValues.length !== 0 && userInputValues.year !== "") {
      axios({
        baseURL: 'https://rebrickable.com',
        url: '/api/v3/lego/sets/',
        params: {
          key: 'c93bcf1a05a902f8f50743ccf00ecc41',
          page: 1,
          page_size: 15,
          min_year: userInputValues.year,
          max_year: userInputValues.year,
          min_parts: userInputValues.pieces,
        }
      }).then((res) => {
        res.data.results.length === 0 
          ? setError("Sorry no sets were found - try another input")
          : setLegoSets(res.data.results)
      }).catch(function (error) {
        error.response.status === 400
          ? setError("Oh oh something went wrong! Please try another input")
          : setError("Sorry something went wrong becasue of us")
      })
    }
  }, [userInputValues])

  const getUserInput = function (event, inputValue) {
    event.preventDefault();
    setError(null);
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
          <Form handleSubmit={getUserInput} error={error}/>
        </div>
        <LegoHouse />
      </div>
      <img aria-hidden="true" className="legoHeads" src={legoHeads} alt="" />
    </header>
    <main>
      <DisplayLegoSets legoSets={legoSets} />
    </main>

    <Footer />
  </>
);
}

export default App;
