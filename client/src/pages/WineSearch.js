import React, { useState, useEffect } from 'react';
import {
  Form,
  Button,
  Col
} from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_WINE_BY_PARAM } from '../utils/queries';

import Auth from '../utils/auth';


const WineSearch = () => {

    const [searchedWine, setSearchedWine] = useState([]);

    // create a state to hold the desired type
    const [type, setType] = useState('');

    // create a state to hold the max and min price
    const [ minPrice, setMinPrice ] = React.useState(2);
    const [ maxPrice, setMaxPrice ] = React.useState(0);

    const [getWine, {error}] = useQuery(QUERY_WINE_BY_PARAM);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await getWine({ 
                variables: { type, minPrice, maxPrice } 
            });
// do I need this for wine??
/*             const bookData = items.map((book) => ({
                bookId: book.id,
                authors: book.volumeInfo.authors || ['No author to display'],
                title: book.volumeInfo.title,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks?.thumbnail || '',
              })); */

            // a way to display the search results
            setSearchedWine(data);
            setType('');
            setMinPrice('');
            setMaxPrice('');
        } catch (e) {
            console.error(e); 
        }
    };


return (
    <>
    <Form onSubmite={handleFormSubmit}>
        <Form.Select size="lg" onChange={(e) => setType(e.target.value)}>
            <Form.Label column sm="4">
            Select Desired Type
            </Form.Label>
        <option>Red</option>
        <option>White</option>
        <option>Sparkling</option>
        <option>Rose</option>
        <option>Dessert</option>
        </Form.Select>
        <br />

        <Form.Group as={Row}>
            <Form.Label column sm="4">
                Select Desired Price Range
            </Form.Label>
            <Col xs="6">
            <RangeSlider
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                min={0}
                max={1000}
            />
            </Col>
            <Col xs="6">
            <RangeSlider
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                min={0}
                max={1000}
            />
            </Col>
        </Form.Group>
        <Button type="submit" variant="success" size="lg">
            Submit Search
        </Button>
    </Form>


    <Container>
        <h2>
          {searchedWine.length
            ? `Viewing ${searchedWine.length} results:`
            : 'Select parameters to begin'}
        </h2>
        <CardColumns>
          {searchedWine.map((wine) => {
            return (
              <Card key={wine._Id} border="dark">
                <Card.Body>
                  <Card.Title>{wine.name}</Card.Title>
                  <ul>
                    <li>{wine.vineyard}</li>
                    <li>{wine.year}</li>
                    <li>{wine.varietal}</li>
                    <li>${wine.price}</li>
                    <li>{wine.type}</li>
                  </ul>
                  <Card.Text>{wine.blurb}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
  </>
  );
};

export default WineSearch;