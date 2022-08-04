import React, { useState } from 'react';
import {
  Form,
  Button,
  Col, 
  Card, 
  Row,
  Container
} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';


import { useQuery } from '@apollo/client';
import { QUERY_GETWINE } from '../utils/queries';



const WineSearch = () => {
    // a state for holding all of the returned wines
    const [searchedWine, setSearchedWine] = useState([]);

    // create a state to hold the desired type
    const [type, setType] = useState('');

    // create a state to hold the max and min price
    const [ minPrice, setMinPrice ] = React.useState(2);
    const [ maxPrice, setMaxPrice ] = React.useState(0);


//   const { loading, data } = useQuery(QUERY_GETWINE, {
  //      variables: {type: type, minPrice: minPrice, maxPrice: maxPrice},
 //   });
//    const searchedWine = data?.wines || [];

    const [getWine, { error }] = useQuery(QUERY_GETWINE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
 

        try {
            const { data } = await getWine({
             type: type, minPrice: minPrice, maxPrice: maxPrice  
            });
            console.log(data); 
            setSearchedWine(data);
// do I need this for wine??
/*              const wineData = data.map((wine) => ({
                wineId: wine._id,
                name: wine.name,
                vineyard: wine.vineyard || ['No author to display'],
              })); 

            // a way to display the search results
            setSearchedWine(wineData);
            setType('');
            setMinPrice('');
            setMaxPrice(''); */
        } catch (error) {
            console.error(error); 
        } 
    };


return (
    <>
    <Form onSubmit={handleFormSubmit}>
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
        {/* // was cardcolumns */}
        <Card>
          {searchedWine.map((wine) => {
            return (
              <Card key={wine.wineId} border="dark">
                <Card.Body>
                  <Card.Title>{wine.name}</Card.Title>
                  <ul>
                    <li>{wine.vineyard}</li>
{/*                     <li>{wine.year}</li>
                    <li>{wine.varietal}</li>
                    <li>${wine.price}</li>
            <li>{wine.type}</li> */ }
                  </ul>
                  <Card.Text>{wine.name}</Card.Text> 
                </Card.Body>
              </Card>
            );
          })}
        </Card>
      </Container>
  </>
  );
};

export default WineSearch;