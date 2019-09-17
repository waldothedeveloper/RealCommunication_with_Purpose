import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import mainlogo from "../image/main-logo.png";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  AppMobile: {
    backgroundColor: "#333",
    height: "100vh !important",
    transition:
      "background .36s cubic-bezier(0.32, 0.08, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)"
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
    fontSize: "16",
    fontWeight: "400",
    letterSpacing: "-0.4px",
    color: "#fff",
    padding: 18,
    cursor: "pointer"
  },
  appB: {
    backgroundColor: "#14ee80"
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
    background: "#333",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  hideMobileLang: {
    display: "none"
  },
  changeMobileHamburgerPos: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(4),
    flexGrow: 1,
    justifyContent: "flex-end"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [values, setValues] = React.useState({
    language: "English"
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  function handleMenuOpen(event) {
    setMobileMenu(!mobileMenu);
  }

  const ht = document.getElementsByTagName("HTML")[0];
  const bd = document.getElementsByTagName("body")[0];

  React.useEffect(() => {
    if (mobileMenu) {
      ht.setAttribute(
        "style",
        "height: 100vh !important; overflow: hidden !important"
      );
      bd.setAttribute(
        "style",
        "height: 100vh !important; overflow: hidden !important"
      );
    } else {
      ht.removeAttribute(
        "style",
        "height: 100vh !important; overflow: hidden !important"
      );
      bd.removeAttribute(
        "style",
        "height: 100vh !important; overflow: hidden !important"
      );
    }
  });

  return (
    <div className={mobileMenu ? `${classes.AppMobile}` : ""}>
      <AppBar
        className={mobileMenu ? `${classes.appBMobile}` : `${classes.appB}`}
        position='static'
      >
        <Toolbar>
          {/* Logo  */}
          <div
            className={
              mobileMenu ? `${classes.hideMobileLang}` : `${classes.divLogo}`
            }
          >
            <img src={mainlogo} alt='main-logo' />
          </div>

          {/* Links */}
          <ul className={`main-menu ${classes.hideMobile}`}>
            <li className='menu-item'>
              <a className={classes.anch} href='#features'>
                Free Landing Pages
              </a>
            </li>
            <li className='menu-item'>
              <a className={classes.anch} href='#features'>
                Features
              </a>
            </li>
            <li className='menu-item'>
              <a className={classes.anch} href='#one'>
                Services
              </a>
            </li>
            <li className='menu-item'>
              <a className={classes.anch} href='#pricing'>
                Pricing
              </a>
            </li>
            <li className='menu-item'>
              <a className={classes.anch} href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          {/* Selecting the language feature change */}
          <FormControl
            className={
              mobileMenu
                ? `${classes.hideMobileLang}`
                : `${classes.formControl}`
            }
          >
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
            {/* <FormHelperText>Select a language</FormHelperText> */}
          </FormControl>

          {/* mobile Menu icon */}
          <IconButton
            onClick={handleMenuOpen}
            edge='start'
            className={
              mobileMenu
                ? `${classes.changeMobileHamburgerPos}`
                : `${classes.menuButton}`
            }
            color='inherit'
            aria-label='menu'
          >
            {mobileMenu ? <Close /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        {/* Mobile menu links */}
        {mobileMenu && (
          <ul className={classes.mobileMenu}>
            <li className={classes.mobileMenuItems}>
              <a className={classes.mobileAnch} href='#features'>
                Free Landing Pages
              </a>
            </li>
            <li className={classes.mobileMenuItems}>
              <a className={classes.mobileAnch} href='#features'>
                Features
              </a>
            </li>
            <li className={classes.mobileMenuItems}>
              <a className={classes.mobileAnch} href='#one'>
                Services
              </a>
            </li>
            <li className={classes.mobileMenuItems}>
              <a className={classes.mobileAnch} href='#pricing'>
                Pricing
              </a>
            </li>
            <li className={classes.mobileMenuItems}>
              <a className={classes.mobileAnch} href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        )}
      </AppBar>
    </div>
  );
}
