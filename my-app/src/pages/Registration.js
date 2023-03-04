import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import '../components/CSS/style.css';



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
  formControl: {
    margin: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    margin: theme.spacing(2),
    width: '100%',
    height: '56px',
    maxWidth: '400px',
  },
}));

function Registration() {
  const classes = useStyles();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  };

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    address: '',
    phone: '',
    gender:'',
    preference:'',
    hobbies:''
  })

    const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    }

  return (
    <div style={{ display: 'flex',justifyContent:'center'}}>
    
    <Paper elevation={6} sx={{borderRadius:"20px",margin:"20px",width:"600px"}}>
        
    <form className={classes.form} onSubmit={handleSubmit}>
    <Typography variant="h4" gutterBottom>
        Registration
      </Typography>
      <hr/>
      <TextField onChange={handleChange} value={formData.email} className={classes.textField} required id="email" name="email" label="Email" type="email" />
      <TextField onChange={handleChange} value={formData.password} className={classes.textField} required id="password" name="password" label="Password" type="password" />
      <FormControl className={classes.formControl} required>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select onChange={handleChange} labelId="gender-label" id="gender" name="gender">
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} required>
        <InputLabel id="preference-label">Preference</InputLabel>
        <Select onChange={handleChange} labelId="preference-label" id="preference" name="preference">
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="ambiguous">Ambiguous</MenuItem>
        </Select>
      </FormControl>
      <TextField onChange={handleChange} className={classes.textField} value={formData.hobbies} id="hobbies" name="hobbies" label="Hobbies (Separate them with spaces)" multiline rows={4} />
      <TextField onChange={handleChange} className={classes.textField} value={formData.address} id="address" name="address" label="Address" />
      <TextField onChange={handleChange} className={classes.textField} value={formData.phone} id="phone" name="phone" label="Phone" type="tel" />
    
      <Button className={classes.button} variant="contained" color="primary" type="submit">
        Register
      </Button>
    </form>
    </Paper>
    </div>
  );
}

export default Registration;