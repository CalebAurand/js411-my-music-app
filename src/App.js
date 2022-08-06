import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [userName, setUserName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
      setLoggedIn(!loggedIn);
  };

  return (  
    loggedIn ? 
    <div className="App">
      <Dashboard 
      userName={userName} />
    </div> : 
    <div className="App">
      <form onSubmit={()=>handleSubmit()}>        
        <TextField 
        label="Username" 
        color="warning" 
        variant="standard" 
        size="small" 
        onChange={(e)=>setUserName(e.target.value)} 
        focused 
        required />
        <br />
        <TextField 
        label="Password"  
        color="warning" 
        variant="standard" 
        focused 
        required />
        <br />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </div>
  )
}

export default App;
