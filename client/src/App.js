// import logo from './logo.svg';
import './App.css';
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
import Header from './pages/Navbar';
import CreateWine from './pages/CreateWine';
import WineSearch from './pages/WineSearch';
//import Navbar from './pages/Navbar';
//import Navi from './pages/Navbar';

import PortfolioContainer from "./pages/PortfolioContainer";

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
      <Router>
      {/* <Header /> */}
      {/* <NavTabs /> */}
      <PortfolioContainer />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/createwine"
            element={<CreateWine />}
          />
          <Route
            path="/winesearch"
            element={<WineSearch />}
          />
          <Route
            path='*'
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;
