import { AccountCircle, Close, Code } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import { logout } from "features/Auth/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const useStyle = makeStyles({
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  closeButton: {
    position: "absolute !important",
    top: 1,
    right: 1,
    zIndex: 1,
  },
});
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const dispath = useDispatch();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
      setOpen(false);
    }
  };
  const hanleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    const action = logout();
    dispath(action);
    setAnchorEl(null);
  };

  const style = useStyle();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Code />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={style.link} to="/">
              QuangThiet DEV
            </Link>
          </Typography>
          <NavLink className={style.link} to="Todo">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink className={style.link} to="Album">
            <Button color="inherit">Albums</Button>
          </NavLink>
          {!isLoggedIn ? (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          ) : (
            <IconButton
              color="inherit"
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={hanleUserClick}
            >
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
      <Dialog open={open} onClose={handleClose}>
        <IconButton className={style.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account? Sign in
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button onClick={() => setMode(MODE.REGISTER)}>
                  Done have an account. Register here
                </Button>
              </Box>
            </>
          )}
          {/*  */}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
