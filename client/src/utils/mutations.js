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
mutation createWine($name: String!, $vineyard: String!, $year: Int!, $varietal: String, $price: Int!, $type: String!, $blurb: String) {
  createWine(name: $name, vineyard: $vineyard, year: $year, varietal: $varietal, price: $price, type: $type,  blurb: $blurb) {
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