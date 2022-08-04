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



const WineSearch = () => {
    // a state for holding all of the returned wines
    const [searchedWine, setSearchedWine] = useState([]);

    // create a state to hold the desired type
    const [type, setType] = useState('');

    // create a state to hold the max and min price
    const [minPrice, setMinPrice] = React.useState(2);
    const [maxPrice, setMaxPrice] = React.useState(0);


    //   const { loading, data } = useQuery(QUERY_GETWINE, {
    //      variables: {type: type, minPrice: minPrice, maxPrice: maxPrice},
    //   });
    //    const searchedWine = data?.wines || [];

    const [getWine, { loading, data }] = useLazyQuery(QUERY_GETWINE, {
        variables: { type: type, minPrice: parseInt(minPrice), maxPrice: parseInt(maxPrice) }
    });
    console.log(data);
    console.log(type, minPrice, maxPrice);
    // const getWine = useQuery(QUERY_GETWINE);
    const handleFormSubmit = async (event) => {
        event.preventDefault();


        try {
            await getWine();
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
                
            </Container>
        </>
    );
};

export default WineSearch;