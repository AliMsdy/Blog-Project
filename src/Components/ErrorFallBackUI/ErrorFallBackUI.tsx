import {
  Backdrop,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Backdrop open={true} sx={{ bgcolor: "#b3aeef" }}>
      <Dialog open={true}>
        <Stack role="alert" alignItems="center">
          <DialogTitle variant="h5" color="red">
            Something went wrong
          </DialogTitle>
          <DialogContent color="#6b0707">
            <pre className="text-red-800">Error: {error.message}</pre>
          </DialogContent>
          <DialogActions className="w-[80%]">
            <Button
              sx={{ width: "100%",mb:2 }}
              variant="outlined"
              color="inherit"
              onClick={resetErrorBoundary}
            >
              Try again
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </Backdrop>
  );
}

export default ErrorFallback;
