import './App.css';
import AppBar from './components/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState;

  return (
    <div className="App">
      <AppBar className="app-bar" />        
      <TextField label="Username" onChange={()=>setUserName(userName=this.value) } color="warning" variant="standard" size="small" focused required />
      <br />
      <TextField label="Password" color="warning" variant="standard" focused required />
      <br />
      <Button variant="contained">Login</Button>
    </div>
  );
}

export default App;
