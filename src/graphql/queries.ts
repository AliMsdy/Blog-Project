import { gql } from "@apollo/client";
const GET_POSTS = gql`
  query {
    posts {
      slug
      title
      coverPhoto {
        url
      }
      id
      author {
        name
        avatar {
          url
        }
      }
    }

    authors {
      name
      id
      avatar {
        url
      }
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      username
    }
  }
`;
export { GET_POSTS, GET_USER };
