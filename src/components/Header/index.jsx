import { Close, Code } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Register from "features/Auth/components/Register";
import { useState } from "react";
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

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
      setOpen(false);
    }
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
          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <IconButton className={style.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Register closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
