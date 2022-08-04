import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      wineSchema {
        name
        vineyard
        year
        varietal
        price
        type
        blurb
      }
    }
  }
`;

export const QUERY_WINE_BY_PARAM = gql`
  query getWine(($type: String, $minPrice: Int, $maxPrice: Int)) {
    wine(type: $type, minPrice: $minPrice, maxPrice: $maxPrice) {
      _id
      name
      vineyard
      year
      varietal
      price
      type
      blurb
    }
  }
`;
