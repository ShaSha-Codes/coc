import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, formatMs } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import '../components/CSS/style.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { ADD_TO_USERDATA } from '../feature/navSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



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
  const [toggler, settoggler] = useState(false);
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    gender: '',
    preference: '',
    hobbies: '',
    xcode: 0,
    ycode: 0,
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const registerWithEmailId = async () => {
    // console.log(formData)
    const docRef = doc(db, "userInfo", formData.email);
    const docSnap = await getDoc(docRef);
    var words = formData.hobbies.split(",");
    if (!docSnap.exists()) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user);
          user.displayName = formData.name;
          // setuser(user);
          dispatch(ADD_TO_USERDATA(formData));
          setDoc(doc(db, "userInfo", `${formData.email}`), {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            phone: formData.phone,
            gender: formData.gender,
            preference: formData.preference,
            hobbies: words,
            timestemps: serverTimestamp(),
            xcode: formData.xcode,
            ycode: formData.ycode,
            photourl: "",
          });
          navigation("/profile")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    } else {
      settoggler(true);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <Paper elevation={6} sx={{ borderRadius: "20px", margin: "20px", width: "600px" }}>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Registration
          </Typography>
          {toggler ?
            (
              <>
                <Alert variant="outlined" severity="error">
                  This is an error alert — check it out!
                </Alert>
              </>
            )
            :
            ""}
          <hr />
          <TextField onChange={handleChange} value={formData.name} className={classes.textField} required id="name" name="name" label="Name" type="text" />
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

          <Button className={classes.button} onClick={() => registerWithEmailId()} variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Registration;