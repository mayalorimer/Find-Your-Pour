import React, { useState } from 'react';
import {
    Form,
    Button,
    Col,
    Row,
    Container
} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

import { useLazyQuery } from '@apollo/client';
import { QUERY_GETWINE } from '../utils/queries';




const WineSearch = () => {
    // a state for holding all of the returned wines
    const [searchedWine, setSearchedWine] = useState([]);

    // create a state to hold the desired type
    const [type, setType] = useState('');

    // create a state to hold the max and min price
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(200);

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
            console.log("type:", winery.data.getWine[0].type);
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
            setType('');
            setMinPrice(0);
            setMaxPrice(200);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Form onSubmit={handleFormSubmit} className="searchForm">
                <div className="labels">
                    <Form.Label className="slideLabel">
                        Select desired type and price range:
                    </Form.Label>
                </div>
                <Form.Group as={Row} className="sliderSelect">
                    <Col>
                        <Form.Select size="lg" onChange={(e) => setType(e.target.value)} className="selectOption">
                            <option value='' defaultValue>Select Type</option>
                            <option value="red">🍷 Red</option>
                            <option value="white">🥂 White</option>
                            <option value='sparkling'>🍾 Sparkling</option>
                            <option value='rose'>🌷 Rose</option>
                            <option value='dessert'>🍰 Dessert</option>
                        </Form.Select>
                        <br />
                        <Form.Label className="minAndMax">Minimum Price:</Form.Label>
                        <br />
                        <RangeSlider
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            min={0}
                            max={200}
                            className="range"
                        />
                        <Form.Label className="minAndMax">Maximum Price:</Form.Label>
                        <br />
                        <RangeSlider
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            min={0}
                            max={200}
                            className="range"
                        />
                    </Col>
                </Form.Group>
                <div>
                    <button type="submit" variant="secondary" size="lg" className="submitBtn">
                        Find my Pour
                    </button>
                </div>
            </Form>


            <Container>
                <div class='flex'>
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
                </div>
            </Container>

        </>
    );
};

export default WineSearch;