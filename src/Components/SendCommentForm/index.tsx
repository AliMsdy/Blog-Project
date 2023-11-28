import { useMutation } from "@apollo/client";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import * as yup from "yup";
import { SEND_COMMENT } from "../../graphql/mutations";

const InputArray = [
  { name: "name", props: { label: "نام کاربری" , } },
  { name: "email", props: { label: "ایمیل",sx:{direction:"ltr"} } },
  { name: "text", props: { label: "متن کامنت", multiline: true, minRows: 4 } },
];

const schema = yup
  .object({
    name: yup.string().required("**فیلد را تکمیل کنید"),
    email: yup
      .string()
      .email("فرمت ایمیل را درست وارد کنید")
      .required("**فیلد را تکمیل کنید"),
    text: yup.string().required("**فیلد را تکمیل کنید"),
  })
  .required();

type TFormInputs = {
  name: string;
  email: string;
  text: string;
};
function SendCommentForm({ slug }: { slug: string }) {
  const [submitComment, { loading }] = useMutation(SEND_COMMENT);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<TFormInputs> = (data) => {
    const variables = { slug, ...data };
    submitComment({ variables })
      .then(() => {
        reset();
        toast.success("کامنت با موفقیت ثبت شد و در انتظار تایید میباشد");
      })
      .catch((e) => {
        toast.error(`در ثبت کامنت خطایی رخ داد .Error: ${e.message}`);
      });
  };
  return (
    <Box
      bgcolor="#fff"
      boxShadow="rgba(0,0,0,0.3) 0px 4px 18px"
      padding={3}
      borderRadius={4}
      className="rtl"
    >
      <Typography color="primary" mb={2} variant="h5">
        ارسال کامنت
      </Typography>
      <Stack
        component="form"
        rowGap={Object.keys(errors).length ? 1 : 2}
        onSubmit={handleSubmit(onSubmit)}
      >
        {InputArray.map(({ name, props }) => (
          <Fragment key={name}>
            <Controller
              name={name as keyof TFormInputs}
              control={control}
              render={({ field }) => (
                <TextField
                  spellCheck="false"
                  {...props}
                  {...field}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name={name as keyof TFormInputs}
              render={({ message }) => (
                <div className="text-red-700 pr-4">{message}</div>
              )}
            />
          </Fragment>
        ))}
        <Box>
          <Button
            disabled={loading}
            className="disabled:rounded-3xl"
            variant="contained"
            type="submit"
          >
            {loading ? (
              <div className="flex gap-x-3 cursor-not-allowed">
                در حال ارسال{" "}
                <TailSpin height="20" width="20" color="#cecece" radius="3" />
              </div>
            ) : (
              "ارسال"
            )}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default SendCommentForm;
