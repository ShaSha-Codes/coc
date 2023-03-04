import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {app} from '../firebase'
import Alert from '@mui/material/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  textField: {
    margin: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    margin: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
  },
}));

function Login() {
  let navigate = useNavigate()
  const classes = useStyles();
  const [formData,setFormData] = React.useState({
    email:'',
    password:''
  })
  const [toggler,setToggler]=React.useState(false)
const auth = getAuth();
    const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });

    }



  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
        let data=await signInWithEmailAndPassword(auth, formData.email, formData.password)
        navigate('/profile')
    }catch(error){
        setToggler(true)
    }

  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <Paper elevation={6} sx={{height:"450px",borderRadius:"20px",margin:"20px",width:"600px"}}>
        <form  className={classes.form} onSubmit={handleSubmit}>
        <Box mt={1}>
            <Typography sx={{marginTop:"20px"}} variant="h4" gutterBottom>
                Login
            </Typography>
           
        </Box>
        {toggler && <Collapse in={toggler}>
        <Alert
        severity='error'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setToggler(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Invalid Email or Password
        </Alert>
      </Collapse>}
        <TextField value={formData.email} onChange={handleChange}  className={classes.textField} required id="email" name="email" label="Email" type="email" />
        <TextField value={formData.password} onChange={handleChange} className={classes.textField} required id="password" name="password" label="Password" type="password" />
        <Button className={classes.button} variant="contained" color="primary" type="submit">
            Login
        </Button>
        </form>
    </Paper>
    </div>
  );
}

export default Login;