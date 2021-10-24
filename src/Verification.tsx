import Grid from "@mui/material/Grid";
import { Paper, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { useRef } from "react";
import Navbar from "./Navbar";

function Verification() {
  document.body.style.backgroundColor = "#f6f9fa"; //can be done in a  better way using third party library react-helmet

  const two = useRef<HTMLInputElement | null>(null);
  const three = useRef<HTMLInputElement | null>(null);
  const four = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "one") {
      if (event.target.value.length === 1 && two.current !== null) {
        two.current.focus();
        console.log(two.current);
      }
    }

    if (event.target.id === "two") {
      if (event.target.value.length === 1 && three.current !== null) {
        three.current.focus();
      }
    }

    if (event.target.id === "three") {
      if (event.target.value.length === 1 && four.current !== null) {
        four.current.focus();
      }
    }
  };

  return (
    <>
      <Navbar />
      <Grid container justifyContent="center">
        <Paper
          elevation={3}
          sx={{
            mt: 15,
            width: { sm: "95%", md: "60%", xl: "40%" },
            borderRadius: 2,
          }}
        >
          <Grid
            container
            justifyContent="center"
            textAlign="center"
            spacing={2}
            sx={{ py: 4 }}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Email Verification</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                We have sent a code to your Email ba**y@dipainhouse.com
              </Typography>
            </Grid>
            <Grid item xs={10} md={8}>
              <Stack direction="row" spacing={2}>
                <TextField
                  autoFocus
                  type="tel"
                  id="one"
                  variant="outlined"
                  inputProps={{ maxLength: 1 }}
                  onChange={handleChange}
                />
                <TextField
                  type="tel"
                  id="two"
                  variant="outlined"
                  inputRef={two}
                  inputProps={{ maxLength: 1 }}
                  onChange={handleChange}
                />
                <TextField
                  type="tel"
                  id="three"
                  variant="outlined"
                  inputRef={three}
                  inputProps={{ maxLength: 1 }}
                  onChange={handleChange}
                />
                <TextField
                  type="tel"
                  id="four"
                  variant="outlined"
                  inputRef={four}
                  inputProps={{ maxLength: 1 }}
                  onChange={handleChange}
                />
              </Stack>
            </Grid>

            <Grid item xs={10} md={8}>
              <Button
                sx={{
                  textTransform: "none",
                  ":hover": { backgroundColor: "#506eea" },
                  width: "100%",
                  px: 1,
                  backgroundColor: "#3554d1",
                }}
                variant="contained"
                size="large"
              >
                Verify Account
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Didn't receive code?
                <Typography
                  variant="body2"
                  component="span"
                  color="#3554d1"
                  sx={{ ":hover": { cursor: "pointer" } }}
                >
                  Resend
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Verification;
