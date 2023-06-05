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
import signupImg from "../assets/login.png";
import logoImg from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  
  
  const [loginForm, setLoginForm] = useState({
      'email': '',
      'password': '',
      'rememberMe': false
    })
    
    const handleRememberMeChange = (event) => {
      setLoginForm({...loginForm, rememberMe :event.target.checked});
    };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(loginForm);
    navigate('/');
  }

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
                Login
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                size = "small"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm,email :e.target.value})}
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
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm,password: e.target.value})}
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
              <FormControlLabel
                control={
                <Checkbox 
                    checked={loginForm.rememberMe || false}
                    onChange={handleRememberMeChange}        
                />}
                label="Remember me"
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
                  onClick={handleLogin}
                  sx = {{
                    backgroundColor: "#FFC300",
                        "&:hover": {
                          backgroundColor: "#FFA500"
                        }
                    }}
                >
                  Login
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
                  Login with Google
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
                  Login with Facebook
                </Button>
              </Box>
              <Box mt = {5} sx = {{textAlign:"center"}}>
              <Typography variant="body1" mt={2} >
                New user? <Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link>
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

export default Login;
