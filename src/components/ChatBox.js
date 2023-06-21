
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled} from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import React, { useRef, useEffect ,useState} from "react";


const ChatBox = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "🤖 Welcome to our app!", timestamp: new Date(), sender: 'responder' },
    { text: "🤖 How can we assist you today?", timestamp: new Date(), sender: 'responder' },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSend = () => {
    if (currentMessage.trim() !== '') {
      const timestamp = new Date();
      setMessages(prevMessages => [...prevMessages, { text: `💬 ${currentMessage}`, timestamp, sender: 'user' }]);
      setCurrentMessage('');
    }
  };

  const StyledPaper = styled(Paper)(({ theme }) => ({
    maxHeight: '50vh',
    width: '300px',
    overflow: 'auto',
    padding: theme.spacing(1),
    borderRadius: '20px',
    background: '#fff',
    zIndex: 1000,

    flexDirection: 'column',
    alignItems: 'flex-end',

    '& > *': {
      margin: theme.spacing(1),

    }

  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #007bff 10%, rgba(0,123,255,0.6) 90%)',
    color: '#fff',
    borderRadius: '50px',

    padding: theme.spacing(1),
    '&:hover': {
      background: 'linear-gradient(45deg, #007bff 10%, rgba(0,123,255,0.8) 90%)',

    }
  }));

  const ChatContainer = styled('div')(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),

    }

  }));

  const ChatInput = ({ currentMessage, setCurrentMessage, handleSend }) => {
    const inputRef = useRef();
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  
    return (
      <TextField
        variant="filled"
        size="small"
        value={currentMessage}
        placeholder="Type here..."
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
          }
        }}
        InputProps={{
          style: {
            borderRadius: 50,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" onClick={handleSend}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
        inputRef={inputRef} // change from 'ref' to 'inputRef'
      />
    );
  };
  

  return (
    <ChatContainer>
      {chatOpen ? (
        <ClickAwayListener onClickAway={() => setChatOpen(false)}>
          <StyledPaper>
            <List>
              {messages.map((message, index) => (
                <ListItem key={index}>
                  <ListItemText primary={message.text} secondary={message.timestamp.toLocaleTimeString()} />
                </ListItem>
              ))}
            </List>
            <ChatInput
              currentMessage={currentMessage}
              setCurrentMessage={setCurrentMessage}
              handleSend={handleSend}
            />
          </StyledPaper>
        </ClickAwayListener>
      ) : null}
      <StyledButton variant="contained" onClick={() => setChatOpen(!chatOpen)}>
        Let's Chat
      </StyledButton>
    </ChatContainer>
  );
                      }
  
  export default ChatBox;










