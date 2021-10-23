import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Logo } from "./logo.svg";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  return (
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
            onClick={() => history.push("/")}
          >
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
