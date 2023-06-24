import { TextField, Button, Typography, Grid, FormControlLabel, Checkbox, Link, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import googleLogo from './images/google.png';
import appStoreLogo from './images/AppleApp.png';

const textFieldStyles = {
  mb: 2,
  color: 'black',
  borderColor: 'black',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: 'white',

  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
  '& .MuiOutlinedInput-input': {
    color: 'black',
  },
  '&:hover .MuiOutlinedInput-input': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
    color: 'black',
  },
};



const LoginForm = ({ handleToggle }) => {
  // State to handle the "Remember Me" option
  const [rememberMe, setRememberMe] = useState(false);
  // State to handle the 'Forgot Password?' click effect
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);

  // Function to toggle the "Remember Me" option
  const handleRememberMe = () => {
    setRememberMe(prev => !prev);
  };

  // Function to handle click event on Forgot Password
  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setIsForgotPasswordClicked(true);
    setTimeout(() => setIsForgotPasswordClicked(false), 500); // Reset after half a second
    console.log('Forgot Password Clicked');
    // Implement your logic here
  };

  return (
    <>
      <EmailTextField variant='outlined' fullWidth placeholder='Email or Username' />
      <PasswordTextField variant='outlined' fullWidth placeholder='Password' type='password' />
      
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
      
      {/* Login button */}
      <RoundedButton variant='contained' fullWidth>
        Continue To Login
      </RoundedButton>
      
      <AccountToggle isSignUp={false} handleToggle={handleToggle} />
    </>
  );
};



const SignUpForm = ({ handleToggle }) => {
  return (
    <>
      <EmailTextField variant='outlined' fullWidth placeholder='Email' />
      <PasswordTextField variant='outlined' fullWidth placeholder='Password' type='password' />
      <PasswordTextField variant='outlined' fullWidth placeholder='Confirm Password' type='password' />
      
      {/* Sign Up button */}
      <RoundedButton variant='contained' fullWidth sx={{ mt: 2 }}>
       Continue To Sign Up
      </RoundedButton>
      
      <AccountToggle isSignUp={true} handleToggle={handleToggle} />
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


const EmailTextField = styled(TextField)(textFieldStyles);
const PasswordTextField = styled(TextField)(textFieldStyles);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => setIsSignUp((prev) => !prev);

  const DividerWithText = ({ children }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <hr style={{ flex: 1}} />
      <span style={{ margin: '0 1em' }}>{children}</span>
      <hr style={{ flex: 1 }} />
    </div>
  );

  return (
    <>
      <StyledFaUser size={17} onClick={handleOpen} color='#007bff' />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle>{isSignUp ? 'Sign Up' : 'Log In'}</DialogTitle>
        <DialogContent>
          {isSignUp ? <SignUpForm handleToggle={handleToggle} /> : <LoginForm handleToggle={handleToggle} />}
          <DividerWithText>OR</DividerWithText>
          <ExternalAuthButtons />
        </DialogContent>
      </Dialog>
    </>
  );
}



















