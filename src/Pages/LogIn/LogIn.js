import { Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory, useLocation } from "react-router";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Component/State/AuthContext";

//firebase auth
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Your Website
      {new Date().getFullYear()}
    </Typography>
  );
}

const LogIn = () => {
  const [toggle, setToggle] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // sign in google auth provider
  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleAuthProvider)
      .then((result) => {
        const user = result.user;
        const { displayName, email } = user;
        const signedUser = { displayName, email };
        setAuth(signedUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    {
      toggle //create email and password provider
        ? firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
              const user = res.user;
          
              const { displayName, email } = user;
              const signedUser = { displayName, email };
              setAuth(signedUser);
              updateUser(name);
              history.replace(from);
            })
            .catch((err) => {
              const errCode = err.code;
              const errMessage = err.massage;
              console.log(errCode, errMessage);
            })
        : // log in with email and password
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              // Signed in
              const user = res.user;
              const { displayName, email } = user;
              const signedUser = { displayName, email };
              setAuth(signedUser);
              history.replace(from);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
    }
  };

  //update user name
  const updateUser = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        console.log("user name updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          {toggle && (
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              inputRef={register}
            />
          )}
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={register}
          />
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            inputRef={register}
          />
          <Grid container alignItems="center" justify="space-between">
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Typography
              color="primary"
              onClick={signIn}
              style={{ cursor: "pointer" }}
            >
              Continue With Google
            </Typography>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {toggle ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography
                color="primary"
                variant="body2"
                style={{ cursor: "pointer" }}
              >
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={() => setToggle(!toggle)}
              >
                {toggle
                  ? "Already have an account? Log in"
                  : "Don't have an account? Sign Up"}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LogIn;
