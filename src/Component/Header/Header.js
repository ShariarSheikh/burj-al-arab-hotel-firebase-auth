import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
import headerBg from "../../Images/headerBg.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  headerStyle: {
    position: "absolute",
    top: "50px",
    zIndex: "20",
    width: "100%",
    backgroundColor: "#00000000",
    boxShadow: "none",
  },
  ToolbarStyle: {
    width: "60%",
    margin: "0 auto",
    border: "1px solid #ffffffbf",
    borderRadius: "15px",
    height: "50px",
  },
  title: {
    flexGrow: 1,
  },
  headerBg: {
    width: "100%",
    height: "350px",
  },
  headerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  navLinks: {
    color: "white",
    textDecoration: "none",
    marginRight: "12px",
    fontWeight: "600",
  },
})

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item sm={12} className={classes.headerBg}>
          <img className={classes.headerImg} src={headerBg} alt="" />
        </Grid>

        <AppBar position="static" className={classes.headerStyle}>
          <Toolbar className={classes.ToolbarStyle}>
            <Grid item>
              <Link className={classes.navLinks} to="/">
                Bruj Al Arab
              </Link>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <Link className={classes.navLinks} to="/">
                Home
              </Link>
              <Link className={classes.navLinks} to="/hotel">
                Book Now
              </Link>
              <Link to="/user" className={classes.navLinks}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default Header;
