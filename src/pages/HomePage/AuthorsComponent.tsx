import {
  Avatar,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

//type
import { AuthorType } from "../../types/model";

type AuthorsComponent = {
  index: number;
  data: AuthorType;
};

function AuthorsComponent({ index, data }: AuthorsComponent) {
  const {
    name,
    slug,
    avatar: { url },
  } = data;
  return (
    <>
      {index !== 0 && <Divider variant="middle" />}
      <ListItem disablePadding>
        <Link className="w-full no-underline text-inherit" to={`/authors/${slug}`}>
          <ListItemButton>
            <Avatar src={url} />
            <ListItemText className="text-right pr-4" primary={name} />
          </ListItemButton>
        </Link>
      </ListItem>
    </>
  );
}

export default AuthorsComponent;
