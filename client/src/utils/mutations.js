import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_WINE = gql`
mutation Mutation($name: String!, $vineyard: String!, $year: Int!, $price: Int!, $type: String!, $varietal: String, $blurb: String) {
  createWine(name: $name, vineyard: $vineyard, year: $year, price: $price, type: $type, varietal: $varietal, blurb: $blurb) {
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