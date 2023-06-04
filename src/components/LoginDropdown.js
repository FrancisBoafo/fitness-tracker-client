import { TextField, Button, Typography, Grid, Switch,Box, FormControlLabel, Checkbox, ButtonGroup, Link } from '@mui/material';
import DividerWithText from './DividerWithText';
import { MdClose } from 'react-icons/md';
import twitterLogo from './Twitter.png';
import facebookLogo from './Facebook.png';
import googleLogo from './google.png';
import { FaUser } from 'react-icons/fa';
import { styled } from '@mui/system';
import { CSSTransition } from 'react-transition-group';
import logoImage from './Focus.png';
import LogoImage1 from './Picture1.png';
import appStoreLogo from './AppleApp.png';
import gmaillogo from './gmail1.png';
import React, { useState, useRef, useEffect } from 'react';

const StyledFaUser = styled(FaUser)({
  marginRight: '10px', // adjust this value to move the icon more or less
});
const DropdownWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1000,
  transition: 'all .3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const DropdownContent = styled('div')({
  position: 'absolute',
  top: 40, 
  right: 5,
  width: '350px',
  background: 'rgba(0, 0, 0, 0.2)',  
  backdropFilter: 'blur(20px)',  
  border: '1px solid gray',
  borderRadius: '17px',
  padding: '10px',
  zIndex: 1,
  transition: 'all .3s ease',
  fontFamily: 'Arial',
  color: '#fff', 
});

const DropdownHeader = styled(Typography)({
  margin: '10px 0',
  fontWeight: '700',
  color: '#fff', 
  textAlign: 'center',
  '&:hover': {
    color: '#fff',
  },
  
});

const Logo = styled('img')({
  height: '25px',
  width: 'auto',
  marginRight: '10px',
  borderRadius: '50%',
  query: 'pointer',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const RoundedButton = styled(Button)({
  borderRadius: '20px',
  backgroundColor: '#333',
  color: 'white',
  fontWeight: 'bold',
  padding: '10px',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    background: 'rgba(0, 123, 255, 0.1)'
  },
  '&:active': {
    background: 'rgba(0, 123, 255, 0.2)'
  },
});

// .. continue defining other styled components


export default function DropDown() {
  const nodeRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = e => {
      if (nodeRef.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <DropdownWrapper ref={nodeRef}>
      <StyledFaUser size={17} onClick={() => setOpen(!open)} color='#007bff' startIcon={<FaUser size={30} onClick={() => setOpen(!open)} color='gray' />} />
      <CSSTransition in={open} timeout={50} classNames='drop' unmountOnExit>
      <DropdownContent>
          <Grid container justifyContent='space-between' align = "center" alignItems='center'>
            <DropdownHeader variant='h6'><Logo src={LogoImage1} />FitnessFocus</DropdownHeader >
            <MdClose onClick={() => setOpen(false)} />
          </Grid>
          <RoundedButton variant='contained' fullWidth size="small" startIcon={<Logo src={googleLogo} />} sx={{mb: 2}}>Continue with Google</RoundedButton>
          <RoundedButton variant='contained' fullWidth size="small" startIcon={<Logo src={appStoreLogo} />} sx={{mb: 2}}>Continue with Apple</RoundedButton>
          <DividerWithText sx={{mb: 2}}>OR</DividerWithText>
          <TextField variant='outlined' fullWidth placeholder='Email or Username'  sx={{mb: 2}} InputProps={{ style: { color: 'white', borderColor: 'white' } }}/>
          <TextField variant='outlined' fullWidth placeholder='Password' type='password' sx={{mb: 2}} InputProps={{ style: { color: 'white', borderColor: 'white' } }}/>
          <Grid container justifyContent='center' sx={{mb: 2}}>
          <Typography variant='body2' align='center' sx={{mb: 2}}>
            Forgot your password? <Link to='#'>Click Here</Link>
          </Typography>
        </Grid>
          <RoundedButton variant='contained' color='primary' fullWidth>
            Sign Up
          </RoundedButton>
          <FormControlLabel control={<Checkbox />} label='Remember Me' sx={{mt: 2}}/>
          <Box mt={2}>
            <Typography variant='caption' color="text.secondary" >
              By clicking "Sign Up," you're confirming that you've read and agree to our <Link to='#'>Terms of Use</Link> and <Link to='#'>Privacy Policy</Link>.
            </Typography>
          </Box>
        </DropdownContent>
      </CSSTransition>
    </DropdownWrapper>
  );
}


















