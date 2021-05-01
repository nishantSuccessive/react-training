import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
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

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = () => {
      console.log("OOOO", history)
      history.push('/login')
  }

  function HomeIcon(props) {
    return (
      <SvgIcon {...props} onClick={() => history.push('/home')}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <HomeIcon style={{ color: "white" }} />
          <Typography variant="h6" className={classes.title} style={{"textAlign": "center"}}>
            User Management
          </Typography>
          <Button color="inherit" onClick={() => handleClick()}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}