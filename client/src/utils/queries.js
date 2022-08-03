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
