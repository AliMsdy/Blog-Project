import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation createComment(
    $name: String!
    $text: String!
    $email: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        text: $text
        email: $email
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };
