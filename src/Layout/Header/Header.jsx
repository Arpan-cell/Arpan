import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PersonIcon from "@material-ui/icons/Person";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

import { useSelector } from "react-redux";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { AiOutlineLogin } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const user = localStorage.getItem("full_name");

  const history = useHistory();
  const ProductD = () => {
    history.push("/Registration");
  };
  const ProductDi = () => {
    history.push("/Login");
  };
  const myprofile = () => {
    history.push("/Myprofile");
  };

  //  logout

  const logout = () => {
    window.localStorage.clear();
    history.push("/Home");
  };
  const notify = () => {
    // toast.success("Logout Successful", { position: toast.POSITION.RIGHT });
    toast.success("Logout Successfull", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <div className={classes.root}>
          <CssBaseline id="appdrawer" />

          <AppBar position="static">
            <Toolbar>
              <Link to="/home">
                <Typography
                  variant="h6"
                  className={classes.title}
                  id="section11"
                >
                  <h4>Home</h4>
                </Typography>
              </Link>
              

              <Typography variant="h6" className={classes.title}></Typography>

              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <PersonIcon />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    {localStorage.getItem("token") ? (
                      <>
                        
                        <MenuItem
                          onClick={() => {
                            notify();
                            logout();
                          }}
                        >
                          Log out
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem onClick={ProductD}>Registration</MenuItem>
                        <MenuItem onClick={ProductDi}>Log in</MenuItem>
                      </>
                    )}
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </>
  );
}
