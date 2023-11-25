import { gql } from "@apollo/client";
const CREATE_USER = gql`
  mutation createUser($name: String!, $username: String!, $email: String!) {
    createUser(input: { name: $name, username: $username, email: $email }) {
      id
      name
      username
      email
    }
  }
`;

const DELETE_USER = gql`
mutation deleteUser($id:ID!){
    deleteUser(id:$id)
}
`

export { CREATE_USER,DELETE_USER };
