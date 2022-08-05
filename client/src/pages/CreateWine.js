import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { CREATE_WINE } from '../utils/mutations';

import Auth from '../utils/auth';
import { set } from 'mongoose';

const CreateWine = () => {
  const [name, setName] = useState('');
  const [vineyard, setVineyard] = useState('');
  const [year, setYear] = useState(0);
  const [varietal, setVarietal] = useState('')
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');
  const [blurb, setBlurb] = useState('');

  const [createWine, { error }] = useMutation(CREATE_WINE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("info1:" , name, varietal, year, price, type, blurb);
    
    try { 
      const { data } = await createWine({
        variables: {
         name,
         vineyard,
         year,
         varietal,
         price,
         type,
         blurb
        },
      });

      console.log("info:" , name, varietal, year, price, type, blurb);
      setName('');
      setVineyard('')
      setYear(0)
      setVarietal('')
      setPrice(0)
      setType('')
      setBlurb('')

    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      <h4>Add your own wines!</h4>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Wine Name" onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVineyard">
          <Form.Label>Vineyard</Form.Label>
          <Form.Control type="text" placeholder="Enter Vineyard" onChange={e => setVineyard(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicYear">
          <Form.Label>Year</Form.Label>
          <Form.Control type="text" placeholder="Enter Vintage" onChange={e => setYear(parseInt(e.target.value))} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVarietal">
          <Form.Label>Varietal</Form.Label>
          <Form.Control type="text" placeholder="Enter Varietal" onChange={e => setVarietal(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" onChange={e => setPrice(parseInt(e.target.value))} />
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(e) => setType(e.target.value)}>
        <option>Select Type</option>
        <option value="red">Red</option>
        <option value="white">White</option>
        <option value="sparkling">Sparkling</option>
        <option value="rose">Rose</option>
        <option value="dessert">Dessert</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tell us about the wine</Form.Label>
          <br />
          <Form.Control as="textarea" rows={3} onChange={e => setBlurb(e.target.value)} />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>

    </div>
  );
};

export default CreateWine;
