//-------------------//
//----- Home.js -----//
//-------------------//


import React from 'react';
import winelogo from './FindYourPourLogo.png';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_WINES } from '../utils/queries';
import Auth from '../utils/auth';


// -- Display All Wines (Homepage) -- //
const Home = () => {
  const { loading, data } = useQuery(QUERY_WINES);
  const wines = data?.wines || [];
  console.log(wines);

  return (
    <div class="flex">
      <div>
      <h2>Find Your Pour ~ Complete Wine List</h2>
      </div>
      <div class="flex">
        {wines.map((wine) => {
          return (
            <div class="outline winecard">
              <p key={wine._id}>
                <p class="headline">{wine.vineyard}</p>
                {wine.name}
                <br></br><br></br>
                • {wine.year} •
                <br></br><br></br>
                {wine.varietal}
                <br></br><br></br>
                <p class="outline">{wine.name} is a {wine.type} wine...
                <br></br>
                 {wine.blurb}</p>
                <br></br>
                ${wine.price}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Home;