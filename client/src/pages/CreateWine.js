import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

function CreateWine(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Create a wine"
          id="search"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
