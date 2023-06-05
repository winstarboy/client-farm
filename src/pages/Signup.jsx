import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import signupImg from "../assets/signup.png";
import logoImg from "../assets/logo.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [register,setRegister] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "confirmPassword": "",
    "password": "",
    "agree": false
  })
  
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(register)
    navigate('/login')
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleAgreeChange = (event) => {
    setRegister({ ...register, agree: event.target.checked });
  };
  
  
  return (
    <>
      <Grid
        container
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: { xs: "50vh", sm: "100vh" } }}
          >
            {/* Sign Up Form */}
            <Box
              component="form"
              sx={{ width: { xs: "90%", sm: "80%" }, maxWidth: 400 }}
            >
              <Box display="flex" alignItems="center" mb={2}>
                <Box mr={2}>
                  <img src={logoImg} alt="Farm Cart Organic" height="50" />
                </Box>
                <Typography variant="h5">Farm Cart Organic</Typography>
              </Box>
              <Typography variant="h6" mb={2}>
                Create an Account
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="First Name"
                variant="outlined"
                size = "small"
                value={register.firstName}
                onChange={(e) => setRegister({...register,firstName: e.target.value})}
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <AccountCircleIcon />
                    </IconButton>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Last Name"
                variant="outlined"
                size = "small"
                value={register.lastName}
                onChange={(e) => setRegister({...register,lastName: e.target.value})}
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <AccountCircleIcon />
                    </IconButton>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                size = "small"
                value={register.email}
                onChange={(e) => setRegister({...register,email: e.target.value})}
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <Email />
                    </IconButton>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                size = "small"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={register.password}
                onChange={(e) => setRegister({...register,password: e.target.value})}
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <Lock />
                    </IconButton>
                  ),
                  endAdornment: (
                    <IconButton edge="end" onClick={handleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Confirm Password"
                size = "small"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                value={register.confirmPassword}
                onChange={(e) => setRegister({...register,confirmPassword: e.target.value})}
                InputProps={{
                  startAdornment: (
                    <IconButton edge="start">
                      <Lock />
                    </IconButton>
                  ),
                  endAdornment: (
                    <IconButton edge="end" onClick={handleShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox 
                  checked= {register.agree || false}
                  onChange={handleAgreeChange}
                />}
                label="I agree to terms and privacy"
                sx={{ mt: 1 }}
              />
              <Box
                display="flex"
                mt={2}
                sx={{ gap: "1rem", flexDirection: "column" }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  mt={2}
                  onClick={handleSubmit}
                  sx = {{
                    backgroundColor: "#FFC300",
                        "&:hover": {
                          backgroundColor: "#FFA500"
                        }
                    }}
                >
                  Sign Up
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  mt={2}
                  sx={{ 
                    backgroundColor: "#fff", color: "#000",
                    "&:hover": { backgroundColor: "azure" }
                    }}
                >
                  <GoogleIcon style={{ marginRight: "10px" }} />
                  Sign Up with Google
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  mt={2}
                  sx={{ backgroundColor: "#3b5998", color: "#fff" }}
                >
                  <FacebookIcon style={{ marginRight: "10px" }} />
                  Sign Up with Facebook
                </Button>
              </Box>
              <Box mt = {5} sx = {{textAlign:"center"}}> 
              <Typography variant="body1" mt={2} >
                Already a user? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
              </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={signupImg}
            alt="Right side image"
            sx={{
              width: "100%",
              height: { xs: "50vh", sm: "100%" },
              objectFit: "contain",
              objectPosition: "center",
              position: "relative",
              backgroundColor: "#FFC300"
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
