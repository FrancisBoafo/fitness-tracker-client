import React, { useState } from 'react';
import { IconButton, TextField, Paper, List, ListItem, ListItemText, Button, makeStyles, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  chatBox: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1000,
  },
  chatWindow: {
    maxHeight: '50vh',
    width: '300px',
    overflow: 'auto',
    padding: theme.spacing(1),
    borderRadius: '20px',
    background: '#fff',
    zIndex: 1000,
  },
  messageInput: {
    display: 'flex',
    marginTop: theme.spacing(1),
    alignItems: 'center',
  },
  textField: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    borderRadius: '50px',
    '& .MuiFilledInput-input': {
      padding: '10px 12px',
    },
    '& .MuiFilledInput-root': {
      borderRadius: '50px',
    },
  },
  chatButton: {
    background: 'linear-gradient(45deg, #007bff 10%, rgba(0,123,255,0.6) 90%)',
    color: '#fff',
    borderRadius: '50px',
    padding: theme.spacing(1),
    '&:hover': {
      background: 'linear-gradient(45deg, #007bff 10%, rgba(0,123,255,0.8) 90%)',
    }
  },
}));

function ChatBox() {
  const classes = useStyles();
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

  return (
    <div className={classes.chatBox}>
      {chatOpen ? (
        <Paper className={classes.chatWindow}>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <ListItemText primary={message.text} secondary={message.timestamp.toLocaleTimeString()} />
              </ListItem>
            ))}
          </List>
          <div className={classes.messageInput}>
            <TextField
              className={classes.textField}
              variant="filled"
              size="small"
              value={currentMessage}
              placeholder="Type here..."
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </div>
        </Paper>
      ) : null}
      <Button className={classes.chatButton} variant="contained" onClick={() => setChatOpen(!chatOpen)}>
        Let's Chat
      </Button>
    </div>
  );
}

export default ChatBox;








