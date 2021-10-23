import Grid from "@mui/material/Grid";
import { Button, Divider, Typography, InputLabel, Link } from "@mui/material";
import { ReactComponent as Google } from "./google.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Revenue } from "./revenue.svg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

function Login() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "outlined-adornment-password") {
      setPassword(e.target.value);
    }
  }

  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <Grid
          container
          sx={{
            width: { sm: "100%", md: "80%" },
            pl: { xs: 2, md: 6 },
            mt: 4,
            pr: 2,
          }}
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ color: "#3554d1", fontWeight: "bold" }}
            >
              <Logo width={25} height={25} /> Loanup
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" sx={{ mt: 4, mb: 1 }}>
              Hi, Welcome Back!
            </Typography>
            <Typography variant="body1">
              Start your 14 days free trial. No credit card required.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{ textTransform: "none", width: "100%", px: 1 }}
              variant="outlined"
              startIcon={<Google height={25} width={25} />}
              color="inherit"
              size="large"
            >
              Sign in with Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider>Or sign in using Email</Divider>
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>
              Email Address
            </InputLabel>
            <OutlinedInput
              id="email"
              fullWidth
              placeholder="example@gmail.com"
              value={email}
              onChange={handleForm}
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlinedIcon aria-label="email"></MailOutlinedIcon>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel sx={{ fontWeight: "bold", mb: 1 }}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              fullWidth
              placeholder="*******"
              value={password}
              onChange={handleForm}
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon aria-label="toggle password visibility"></LockOutlinedIcon>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12}>
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
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Not registered yet?
              <Link href="#" variant="body2" color="#3554d1">
                Create an account
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 18 }}>
            <Typography variant="body2">
              ©️ 2021 Loanup. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} md={6} alignItems="right">
        <Revenue width="100%" />
      </Grid>
    </Grid>
  );
}

export default Login;
