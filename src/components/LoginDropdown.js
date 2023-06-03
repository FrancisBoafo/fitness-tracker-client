import React, { useState } from 'react';
import googleLogo from './google.png';
import { FaUser } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef } from 'react';
import LogoImage1 from './Picture1.png';
import appStoreLogo from './AppleApp.png';
import gmaillogo from './gmail1.png';
import { TextField, Button, Typography, Grid, Switch, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/system';

const useStyles = styled({
  dropdownContainer: {
    position: 'relative',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 5,
    width: '350px',
    background: 'rgba(0, 0, 0, 0.2)',  // semi-transparent black
    backdropFilter: 'blur(20px)',  // Semi-transparent white
    border: '1px solid gray',
    borderRadius: '17px',
    padding: '20px',
    zIndex: 1,
    '&.fade-enter': {
      opacity: 0.01,
      transform: 'translateY(-20px)'
    },
    transition: 'all .3s ease',
    fontFamily: 'Arial',
    color: '#fff', // Black text for visibility
    '&.drop-enter': {
      opacity: 0.01,
      transform: 'translateY(-20px)'
    },
    '&.drop-enter-active': {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all .3s ease'
    },
    '&.drop-exit': {
      opacity: 1,
      transform: 'translateY(0)'
    },
    '&.drop-exit-active': {
      opacity: 0.01,
      transform: 'translateY(-20px)',
      transition: 'all .3s ease'
    },
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: '40px',
    width: 'auto',
    marginRight: '10px',
    borderRadius: '50%'
    
  },
  headerText: {
    margin: '10px 0',
    fontWeight: '700',
    color: '#fff', // Changed to white
    textAlign: 'center'
    
  },
  buttonContainer: {
    marginTop: '15px',
    display: 'grid',
    gap: '10px'
  },
  roundedButton: {
    borderRadius: '20px',
    backgroundColor: '#333',
    color: 'white',
    fontStyle: 'Arial',
    fontWeight: 'bold',
    padding: '10px',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      background: 'rgba(0, 123, 255, 0.1)'
    },
    '&:active': {
      background: 'rgba(0, 123, 255, 0.2)'
    }
  },
  actionText: {
    display: 'inline-block',
    padding: '10px',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#fff', // Changed to white
    '&:hover': {
      backgroundColor: '#333' // Changed to darker color on hover
    }
  },
  divider: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  orDivider: {
    display: 'flex',
    alignItems: 'center',
    margin: '15px 0',
    '&::before, &::after': {
      content: '""',
      flexGrow: 1,
      background: 'rgba(255, 255, 255, 0.5)', // Changed to lighter color for visibility
      height: '1px',
      fontSize: '0.1em',
      lineHeight: '1',
      margin: '0 8px',
    }
  },
  switchContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    flexDirection: 'inherit',
    '& .MuiTypography-body1': {
      color: '#fff', // Changed to white
      fontWeight: 'bold'
    }
    
  },
  switchAction: {
    color: 'gold',
    marginLeft: '5px',
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: 'gold'
      
    }
  },
  textField: {
    color: 'white', // Gold color
    '& label.Mui-focused': {
      color: 'white', // Gold color for the focused label
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white', // Gold underline
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Gold border in focused state
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'gold', // White color for the helper text
      fontStyle: 'italic', // Italic font for the helper text ,
      '& a': {
        color: 'gold', // Gold color for the link
        textDecoration: 'underline',
        '&:hover': {
          color: 'gold' // Gold color for the link on hover
        }
      }
    },
  },

});




export default function LoginDropdown() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isTrainer, setIsTrainer] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dropdownRef = useRef(null);



  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const onClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log("Clicked outside of the dropdown");
      setOpen(false);
    }
  };

  return (
    <div className={classes.dropdownContainer} ref={dropdownRef}>
      <Button onClick={toggleOpen} color="primary">
        <FaUser />
      </Button>
      
      <CSSTransition
        in={open}
        timeout={300}
        classNames="drop"
        unmountOnExit
      >
        <div className={classes.dropdown}>
          <div className={classes.logoContainer}>
            <img src={LogoImage1} alt="Logo" className={classes.logo} />
            <Typography variant="h5" className={classes.headerText}>FitnessFocus</Typography>
          </div>

          {isSignup && (
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>User</Grid>
              <Grid item>
                <Switch color="primary" checked={isTrainer} onChange={() => setIsTrainer(!isTrainer)} />
              </Grid>
              <Grid item>Trainer</Grid>
            </Grid>
          )}

          <TextField
          autoFocus 
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          helperText="Enter your email address"
          className={classes.textField} // Apply the custom class
        />

          {!isSignup && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  color="primary"
                />
              }
              label="Remember me"
            />
          )}

          <Button color="primary" fullWidth startIcon={<img src={gmaillogo} alt="Google" style={{ width: "24px", height: "24px" }} />} className={classes.roundedButton}>
            Continue with Email
          </Button>
          
          <div className={classes.orDivider}>OR</div>

          <div className={classes.buttonContainer}>
            <Button color="default" fullWidth startIcon={<img src={googleLogo} alt="Google" style={{ width: "24px", height: "24px" }} />} className={classes.roundedButton}>
              Continue with Google
            </Button>
            <Button color="default" fullWidth startIcon={<img src={appStoreLogo} alt="Apple" style={{ width: "24px", height: "24px" }} />} className={classes.roundedButton}>
              Continue with Apple
            </Button>
          </div>
                {isSignup ? (
        <div className={classes.switchContainer}>
            <Typography variant="body2" component="span">
            Already have an account?
            </Typography>
            <Typography 
            variant="body2" 
            component="span" 
            className={`${classes.switchAction} ${classes.actionText}`} 
            onClick={handleSwitch}>
            Log In
            </Typography>
        </div>
        ) : (
        <div className={classes.switchContainer}>
            <Typography variant="body2" component="span">
            Don't have an account?
            </Typography>
            <Typography 
            variant="body2" 
            component="span" 
            className={`${classes.switchAction} ${classes.actionText}`} 
            onClick={handleSwitch}>
            Sign Up
            </Typography>
        </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}














