import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { CREATE_WINE } from '../utils/mutations';


const CreateWine = () => {
  const [name, setName] = useState('');
  const [vineyard, setVineyard] = useState('');
  const [year, setYear] = useState('');
  const [varietal, setVarietal] = useState('')
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [blurb, setBlurb] = useState('');

  const [createWine, { error }] = useMutation(CREATE_WINE);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("info1:", name, varietal, year, price, type, blurb);

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

      console.log("info:", name, varietal, year, price, type, blurb);
      setName('');
      setVineyard('')
      setYear('')
      setVarietal('')
      setPrice('')
      setType('')
      setBlurb('')

      // on submit redirect to the home page
      navigate('/');


    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div class="wineAddForm">
      <h4>Add your own wines!</h4>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name </Form.Label>
          <Form.Control type="text" placeholder="Enter Wine Name" value={name} class="formInput" onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVineyard">
          <Form.Label>Vineyard </Form.Label>
          <Form.Control type="text" placeholder="Enter Vineyard" value={vineyard} onChange={e => setVineyard(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicYear">
          <Form.Label>Year </Form.Label>
          <Form.Control type="text" placeholder="Enter Vintage" value={year} onChange={e => setYear(parseInt(e.target.value))} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVarietal">
          <Form.Label>Varietal </Form.Label>
          <Form.Control type="text" placeholder="Enter Varietal" value={varietal} onChange={e => setVarietal(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price </Form.Label>
          <Form.Control type="text" placeholder="Enter Price" value={price} onChange={e => setPrice(parseInt(e.target.value))} />
        </Form.Group>
        <Form.Select aria-label="Default select example" className="dropDown" value={type} onChange={(e) => setType(e.target.value)}>
          <option clasNames="selection">Select Type</option>
          <option value="red">🍷 Red</option>
          <option value="white">🥂 White</option>
          <option value='sparkling'>🍾 Sparkling</option>
          <option value='rose'>🌷 Rose</option>
          <option value='dessert'>🍰 Dessert</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tell us about the wine</Form.Label>
          <br />
          <Form.Control as="textarea" rows={3} value={blurb} onChange={e => setBlurb(e.target.value)} />
        </Form.Group>
        <button  type="submit" className='submitBtn testBtn'>
          Add Wine
        </button>
      </Form>

    </div>
  );
};

export default CreateWine;
