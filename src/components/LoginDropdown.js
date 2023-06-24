import { TextField, Button, Typography, Grid, FormControlLabel, Checkbox, Link, Dialog, DialogTitle, DialogContent, IconButton, InputAdornment, Box,Container } from '@mui/material';
import { FaUser,FaEye, FaEyeSlash,FaCheck,FaArrowLeft } from 'react-icons/fa';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import googleLogo from './images/google.png';
import appStoreLogo from './images/AppleApp.png';


const LoginForm = ({ handleToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!isValidPassword(e.target.value)) {
      setPasswordError('Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, and one number.');
    } else {
      setPasswordError(null);
    }
  };

  const handleRememberMe = () => {
    setRememberMe(prev => !prev);
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setIsForgotPasswordClicked(true);
    setTimeout(() => setIsForgotPasswordClicked(false), 500);
    console.log('Forgot Password Clicked');
  };

  const handleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const isLoginDisabled = !email || !password || emailError || passwordError;
  return (
    <>
      <Box mt={2}>
        <TextField 
          variant="outlined" 
          fullWidth
          id="outlined-adornment-email"
          label="Email or Username"
          type="text"
          error={!!emailError}
          helperText={emailError}
          onChange={handleEmailChange}
        />
      </Box>
      
      <Box mt={2}>
        <TextField 
          variant="outlined" 
          fullWidth
          id="outlined-adornment-password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          error={!!passwordError}
          helperText={passwordError}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox 
                checked={rememberMe} 
                onChange={handleRememberMe} 
                sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }}
              />
            }
            label={<Typography sx={{ color: 'black' }}>Remember Me</Typography>}
          />
        </Grid>
        <Grid item>
          <Link 
            component="button" 
            variant="body2" 
            underline="hover"
            onClick={handleForgotPasswordClick}
            sx={{ 
              color: 'black', 
              '&:hover': { color: 'gray', textDecoration: 'underline' },
              '&:active': { transform: 'scale(0.95)' },
              transition: isForgotPasswordClicked ? 'all 0.5s ease-in-out' : 'none',
              opacity: isForgotPasswordClicked ? 0.4 : 1
            }}
          >
            Forgot Password?
          </Link>
        </Grid>
      </Grid>

      <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 2 }}>
      By continuing, a verification code may be sent. Message & data rates may apply.
      </Typography>
      
      <RoundedButton variant='contained' fullWidth disabled={isLoginDisabled}>
        Login
      </RoundedButton>
      
      <AccountToggle isSignUp={false} handleToggle={handleToggle} />
    </>
  );
};




const isValidEmail = (email) => {
  // A simple email validation regex
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const isValidPassword = (password) => {
  // Modify this function to meet your password constraints
  // For example, a password should be at least 8 characters, include at least one uppercase letter, one lowercase letter, and one number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
};

const SignUpForm = ({ handleToggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prevShowConfirmPassword => !prevShowConfirmPassword);
  };

  const passwordsMatch = password === confirmPassword;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!isValidPassword(e.target.value)) {
      setPasswordError('Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, and one number.');
    } else {
      setPasswordError(null);
    }
  };

  const isSignUpDisabled = !email || !password || !passwordsMatch || emailError || passwordError;


  return (
    <>
    <Box mt={2}>
        <TextField 
          variant="outlined" 
          fullWidth
          id="outlined-adornment-email"
          label="Email"
          type="text"
          error={!!emailError}
          helperText={emailError}
          onChange={handleEmailChange}
        />
      </Box>

      <Box mt={2}>
    <TextField 
        variant="outlined" 
        fullWidth
        id="outlined-adornment-password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        error={!!passwordError}
        helperText={passwordError}
        onChange={handlePasswordChange} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </IconButton>
            </InputAdornment>
          ),
        }}
    />
</Box>


<Box mt={2}>
  <TextField 
    variant="outlined" 
    fullWidth
    id="outlined-adornment-confirm-password"
    label="Confirm Password"
    type={showConfirmPassword ? 'text' : 'password'}
    onChange={(e) => setConfirmPassword(e.target.value)}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            edge="end"
            onClick={handleShowConfirmPassword}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
  {passwordsMatch && password.length > 0 && 
    <Typography variant="body2" color="success.main" align="left" sx={{ mt: 2 }}>
      <FaCheck /> Passwords match
    </Typography>
  }
</Box>

      
      <RoundedButton 
        variant='contained' 
        fullWidth 
        sx={{ mt: 2 }} 
        disabled={isSignUpDisabled}
      >
        Sign Up
      </RoundedButton>

      <AccountToggle isSignUp={true} handleToggle={handleToggle} fullWidth sx={{ mt: 2 }}/>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 2 }}>
      By continuing, you agree to our <Link href="#" underline="hover" sx={{ color: 'black' }}>Terms of Use</Link> and <Link href="#" underline="hover" sx={{ color: 'black' }}>Privacy Policy</Link>.
      </Typography>
    </>
  );
};




const StyledButton = styled(Button)({
  marginLeft: '10px',
  color: '#007bff',
  '&:hover': {
    textDecoration: 'underline',
    backgroundColor: 'transparent'
  },
  transition: 'all 0.3s ease',
});

const AccountToggle = ({ isSignUp, handleToggle }) => {
  return (
    <Grid container justifyContent='center' sx={{ mt: 2 }}>
      <Typography variant='body2' align='center'>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <StyledButton variant='text' onClick={handleToggle}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </StyledButton>
      </Typography>
    </Grid>
  );
};


// Assuming the styles from your code
const StyledFaUser = styled(FaUser)({
  marginLeft: 'auto', // This will push the element to the right
  marginRight: '10px', // Adjust the margin as per your needs
  margin: '4px',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});




const Logo = styled('img')({
  height: '25px',
  width: 'auto',
  marginRight: '10px',
  borderRadius: '50%',
  cursor: 'pointer',
  alignItems: 'center',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const RoundedButton = styled(Button)({
  borderRadius: '20px',
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  padding: '10px',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    background: '#0056b3'
  },
  '&:active': {
    background: '#004085'
  },
});

const ExternalAuthButtons = () => (
  <>
    <RoundedButton variant='contained' fullWidth size="small" startIcon={<Logo src={googleLogo} />} sx={{ mb: 2 }}>Continue with Google</RoundedButton>
    <RoundedButton variant='contained' fullWidth size="small" startIcon={<Logo src={appStoreLogo} />} sx={{ mb: 2 }}>Continue with Apple</RoundedButton>
  </>
);


export default function UserDialog() {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // This line navigates to '/home' when the dialog is closed.
  };

  const handleToggle = () => setIsSignUp((prev) => !prev);

  const goBack = () => {
    setOpen(false);
    navigate('./'); // This line navigates to '/' when the back button is clicked.
  };

  const LoginIconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the end of the container
    padding: '10px', // Adjust padding as needed
  });
  
  const DividerWithText = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <hr style={{ flex: 1}} />
      <span style={{ margin: '0 1em' }}>{children}</span>
      <hr style={{ flex: 1 }} />
    </div>
  );
  return (
    <>
      <LoginIconContainer>
        <StyledFaUser size={17} onClick={handleOpen} color='#007bff' />
      </LoginIconContainer>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DialogTitle>{isSignUp ? 'Sign Up' : 'Log In'}</DialogTitle>
          <Container maxWidth="sm">
            {isSignUp ? <SignUpForm handleToggle={handleToggle} /> : <LoginForm handleToggle={handleToggle} />}
            <DividerWithText>OR</DividerWithText>
            <ExternalAuthButtons />
          </Container>
        </DialogContent>
        {/* Button to go back in history, shown only when dialog is open */}
        <Button onClick={goBack } sx={{ position: 'absolute', top: '10px', left: '10px' }} variant='text' startIcon={<FaArrowLeft />} size='small'>Back</Button>
      </Dialog>
    </>
  );
}














