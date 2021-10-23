import Grid from "@mui/material/Grid";
import { Paper, Radio, Typography } from "@mui/material";
import { ReactComponent as Logo } from "./logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { useState } from "react";

function Forgot() {
  document.body.style.backgroundColor = "#f6f9fa"; //can be done in a  better way using third party library react-helmet

  const [selectedValue, setSelectedValue] = useState<String>("email");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "white" }} position="static">
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Logo />
            </IconButton>
            <Typography
              variant="h4"
              sx={{ color: "#3554d1", fontWeight: "bold", flexGrow: 1 }}
            >
              Loanup
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4B5563",
                mr: 2,
                display: { xs: "none", sm: "flex" },
              }}
            >
              Already have an account?
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                px: 5,
                py: 1,
                mr: 6,
                backgroundColor: "#e4edfd",
                color: "#3554d1",
              }}
            >
              Sign in
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
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
              <Typography variant="h4">Forgot Password</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Please Select option to send link to reset password
              </Typography>
            </Grid>
            <Grid item xs={10} md={8}>
              <Paper
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  ":hover": { cursor: "pointer" },
                  borderColor:
                    selectedValue === "email" ? "#3554d1" : "lightgray",
                }}
                onClick={() => {
                  setSelectedValue("email");
                }}
              >
                <Grid container textAlign="left">
                  <Grid item xs={2}>
                    <IconButton
                      size="large"
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        m: 2,
                        color:
                          selectedValue === "email" ? "#3554d1" : "inherit",
                      }}
                    >
                      <MailOutlineIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 1,
                        color:
                          selectedValue === "email" ? "#3554d1" : "inherit",
                      }}
                    >
                      Reset via Email
                    </Typography>
                    <Typography variant="caption">
                      Link to reset will be sent to your registered email
                      address
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    justifyContent="right"
                    textAlign="right"
                    sx={{ mt: 2 }}
                  >
                    <Radio
                      icon={<CheckCircleIcon sx={{ display: "none" }} />}
                      checkedIcon={
                        <CheckCircleIcon sx={{ color: "#3554d1" }} />
                      }
                      checked={selectedValue === "email"}
                      onChange={handleChange}
                      value="email"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "email" }}
                      sx={{ ":hover": { backgroundColor: "white" } }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={10} md={8}>
              <Paper
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  ":hover": { cursor: "pointer" },
                  borderColor:
                    selectedValue === "sms" ? "#3554d1" : "lightgray",
                }}
                onClick={() => {
                  setSelectedValue("sms");
                }}
              >
                <Grid container textAlign="left">
                  <Grid item xs={2}>
                    <IconButton
                      size="large"
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        m: 2,
                        color: selectedValue === "sms" ? "#3554d1" : "inherit",
                      }}
                    >
                      <PhoneEnabledOutlinedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 1,
                        color: selectedValue === "sms" ? "#3554d1" : "inherit",
                      }}
                    >
                      Reset via SMS
                    </Typography>
                    <Typography variant="caption">
                      Link to reset will be sent to your registered phone number
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    justifyContent="right"
                    textAlign="right"
                    sx={{ mt: 2 }}
                  >
                    <Radio
                      icon={<CheckCircleIcon sx={{ display: "none" }} />}
                      checkedIcon={
                        <CheckCircleIcon sx={{ color: "#3554d1" }} />
                      }
                      checked={selectedValue === "sms"}
                      onChange={handleChange}
                      value="sms"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "sms" }}
                      sx={{ ":hover": { backgroundColor: "white" } }}
                    />
                  </Grid>
                </Grid>
              </Paper>
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
                Send Link
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Didn't receive link?
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

export default Forgot;
