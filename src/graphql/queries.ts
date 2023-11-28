import { gql } from "@apollo/client";
const GET_POSTS_INFO = gql`
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
        slug
        avatar {
          url
        }
      }
    }

    authors {
      name
      id
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      slug
      description {
        html
      }
      field
      posts {
        title
        id
        coverPhoto {
          url
        }
        slug
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPostInfo($slug:String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
      comments {
        name
        text
        createdAt
        id
      }
    }
  }
`;

export { GET_AUTHOR_INFO, GET_POSTS_INFO,GET_POST_INFO };
