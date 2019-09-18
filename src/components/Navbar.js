import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import MenuIcon from "@material-ui/icons/Menu";
// import Close from "@material-ui/icons/Close";
import mainlogo from "../image/default-monochrome-black.svg";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import Divider from "@material-ui/core/Divider";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(theme => ({
  AppMobile: {
    backgroundColor: "#333",
    height: "100vh !important",
    transition: "background .22s  ease"
  },
  divLogo: {
    flexGrow: 1
  },
  menuButton: {
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(4)
  },
  hideMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  anch: {
    fontSize: "16",
    fontWeight: "400",
    letterSpacing: "-0.4px",
    color: "#1f1f1f",
    padding: 18,
    cursor: "pointer"
  },
  mobileAnch: {
    fontSize: "1.2rem",
    fontWeight: "400",
    letterSpacing: "-0.4px",
    color: "#fff",
    padding: 18,
    cursor: "pointer"
  },
  appB: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  appBMobile: {
    backgroundColor: "#333",
    boxShadow: "none"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "18% 0"
  },
  hideMobileLang: {
    display: "none"
  },
  changeMobileHamburgerPos: {
    color: "#fff",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(4)
  },
  emptyMobileDiv: {
    flexGrow: 1
  }
}));

export default function NavBar({ english, spanish, handleChange, values }) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appB} position='static'>
        <Toolbar>
          {/* Logo  */}
          <div className={classes.divLogo}>
            <img
              style={{ height: 32, width: 112 }}
              src={mainlogo}
              alt='main-logo'
            />
          </div>

          {/* Links */}
          <ul className={`main-menu ${classes.hideMobile}`}>
            <li className='menu-item'>
              <a href='#about' className={classes.anch}>
                {values.language === "English"
                  ? english[0].navbar.about
                  : spanish[0].navbar.about}
              </a>
            </li>
            <li className='menu-item'>
              <a href='#contact' className={classes.anch}>
                {values.language === "English"
                  ? english[0].navbar.contact
                  : spanish[0].navbar.contact}
              </a>
            </li>
          </ul>
          {/* Selecting the language feature change */}
          <FormControl className={classes.formControl}>
            <Select
              value={values.language}
              // labelWidth={labelWidth}
              onChange={handleChange}
              inputProps={{
                name: "language"
              }}
            >
              <MenuItem value='English'>English</MenuItem>
              <MenuItem value='Spanish'>Spanish</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
