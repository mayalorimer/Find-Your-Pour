// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NavTabs from './pages/NavTabs';
import CreateWine from './pages/CreateWine';
import WineSearch from './pages/WineSearch';
//import Navbar from './pages/Navbar';
//import Navi from './pages/Navbar';
import Footer from './pages/Footer';


const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
function App() {
  return (
    <ApolloProvider client={client}>
       <div className="pageContainer">
        <div className="content-wrap">
          <NavTabs />
        </div>
       <Footer />
      </div>
    </ApolloProvider>
  );
}
export default App;
