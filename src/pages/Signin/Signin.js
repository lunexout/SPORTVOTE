import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./Signin.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#1a9f21",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1A9F21"
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <i class="fas fa-futbol" style={{fontSize: "30px"}}></i>
        </Avatar>
        <Typography className="helvetica-medium" style={{userSelect: "none"}} component="h1" variant="h5">
          შესვლა
        </Typography>
        <form className={`${classes.form} form__component`} noValidate onSubmit={e => e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="მომხმარებლის სახელი"
            name="email"
            autoComplete="email"
            autoFocus
            className="input__signin optimization__focused__input"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="პაროლი"
            type="password"
            id="password"
            autoComplete="current-password"
            className="input__signin password__optimization__focused__input"
          />
          <FormControlLabel
            control={<Checkbox className="checkbox" value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`${classes.submit} button__hover`}
            style={{fontFamily: "HelveticaNeue-Medium"}}
          >
            შესვლა
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{color: "#8FA3B0", fontFamily: "HelveticaNeue-Medium"}}>
                დაგავიწყდათ პაროლი?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" style={{color: "#8FA3B0", fontFamily: "HelveticaNeue-Medium"}}>
                {"რეგისტრაცია"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
