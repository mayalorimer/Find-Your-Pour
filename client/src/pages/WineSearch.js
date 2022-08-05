import React, { useEffect, useState } from 'react';
import {
    Form,
    Button,
    Col,
    Card,
    Row,
    Container
} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_GETWINE } from '../utils/queries';
import { addTypenameToDocument } from '@apollo/client/utilities';



const WineSearch = () => {
    // a state for holding all of the returned wines
    const [searchedWine, setSearchedWine] = useState([]);

    // create a state to hold the desired type
    const [type, setType] = useState('');

    // create a state to hold the max and min price
    const [minPrice, setMinPrice] = React.useState(2);
    const [maxPrice, setMaxPrice] = React.useState(0);

    const [getWine, { loading, data }] = useLazyQuery(QUERY_GETWINE, {
        variables: { type: type, minPrice: parseInt(minPrice), maxPrice: parseInt(maxPrice) }
    });
    console.log(data);
    // const getWine = useQuery(QUERY_GETWINE);
    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
        //  const winery = await getWine();
            const winery = await getWine();
            console.log("type:" , winery.data.getWine[0].type); 
            const searchedWine = winery.data.getWine.map((wine) => ({
                _id: wine._id,
                name: wine.name,
                vineyard: wine.vineyard,
                year: wine.year,
                varietal: wine.varietal || ['Blend'],
                price: wine.price,
                type: wine.type,
                blurb: wine.blurb
            }))
            console.log(searchedWine);
            setSearchedWine(searchedWine);
        //    console.log("winery:" , winery);
        //    console.log(winery.data.getWine[0].name);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <Form.Label column sm="4">
                    Select Desired Type
                </Form.Label>
                <br />
                <Form.Select size="lg" onChange={(e) => setType(e.target.value)}>
                    <option value='' defaultValue></option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value='sparkling'>Sparkling</option>
                    <option value='rose'>Rose</option>
                    <option value='dessert'>Dessert</option>
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
                            max={200}
                        />
                    </Col>
                    <Col xs="6">
                        <RangeSlider
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                            min={0}
                            max={200}
                        />
                    </Col>
                </Form.Group>
                <Button type="submit" variant="success" size="lg">
                    Submit Search
                </Button>
            </Form>


            <Container>
                {searchedWine.map((wine) => {
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
            </Container>
        </>
    );
};

export default WineSearch;