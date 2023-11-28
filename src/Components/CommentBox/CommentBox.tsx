// import jalaliMoment from 'jalali-moment';
import { Avatar, Box, Stack, Typography } from "@mui/material";
// import * as shamsi from "shamsi-date-converter";

//type
import { CommentType } from "../../types/model";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

function CommentBox({ name, text, createdAt }: CommentType) {
  const shamsiDate = new Date(createdAt);
  const Date_Time_Converted = new Intl.DateTimeFormat("fa-IR", options).format(
    shamsiDate
  ).split(",").reverse().join(" , ")

  return (
    <Box border="2px solid #c1c1c1" padding={2} my={2} borderRadius={3}>
      <Stack direction="row" alignItems="center" columnGap={2}>
        <Avatar>{name[0]}</Avatar>
        <Typography fontWeight={600} >{name}</Typography>
        <Typography textAlign="left" flex={1}>{Date_Time_Converted}</Typography>
      </Stack>
      <Typography mt={2}>{text}</Typography>
    </Box>
  );
}

export default CommentBox;

