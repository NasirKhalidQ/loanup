import Grid from "@mui/material/Grid";
import { Paper, Radio, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { useState } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router";

function Forgot() {
  document.body.style.backgroundColor = "#f6f9fa"; //can be done in a  better way using third party library react-helmet

  const [selectedValue, setSelectedValue] = useState<String>("Email");
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
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
                    selectedValue === "Email" ? "#3554d1" : "lightgray",
                }}
                onClick={() => {
                  setSelectedValue("Email");
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
                          selectedValue === "Email" ? "#3554d1" : "inherit",
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
                          selectedValue === "Email" ? "#3554d1" : "inherit",
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
                      checked={selectedValue === "Email"}
                      onChange={handleChange}
                      value="Email"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "Email" }}
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
                    selectedValue === "SMS" ? "#3554d1" : "lightgray",
                }}
                onClick={() => {
                  setSelectedValue("SMS");
                }}
              >
                <Grid container textAlign="left">
                  <Grid item xs={2}>
                    <IconButton
                      size="large"
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        m: 2,
                        color: selectedValue === "SMS" ? "#3554d1" : "inherit",
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
                        color: selectedValue === "SMS" ? "#3554d1" : "inherit",
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
                      checked={selectedValue === "SMS"}
                      onChange={handleChange}
                      value="SMS"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "SMS" }}
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
                onClick={() =>
                  history.push("/verification", {
                    title: selectedValue,
                    info:
                      selectedValue === "Email"
                        ? "Email ba**y@dipainhouse.com"
                        : "Mobile Phone 911-***-**12",
                  })
                }
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
