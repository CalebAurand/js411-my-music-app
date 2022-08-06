import React, {useState} from 'react';
// import useState from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function SoundQualCard(props) {
  const {notifications, setNotifications} = props;
  const [soundQual, setSoundQual] = useState('normal');

  const handleChange = (event) =>{
    setSoundQual(event.target.value);

    if(soundQual === 'low'){
      if(!notifications.length){
        setNotifications(arr => [...arr, 'Music quality is degraded. Increase quality if your connection allows it.'])
      }else if(!notifications.find(el=>el==='Music quality is degraded. Increase quality if your connection allows it.')){
        setNotifications(arr => [...arr, 'Music quality is degraded. Increase quality if your connection allows it.'])
      };
    };
  };


  return (
    <Box sx={{ minWidth: 275, minHeight: 215, margin: 5}}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent sx={{height: 130, width: 250}}>
      <Typography variant="h5" sx={{fontWeight: 700}}component="div">
        Sound Quality
      </Typography>
      <Typography sx={{width: 250}} variant="body2">
        Manually control the music quality in the event of poor connection
      </Typography>
    </CardContent>
    <CardActions>
      <FormControl fullWidth size="small">
        <InputLabel id="sound-quality-label">Sound Quality</InputLabel>
        <Select 
        labelId="sound-quality-label"
        id="sound-quality-select"
        value={soundQual}
        label="Sound Quality"
        onChange={handleChange}
        >
          <MenuItem value='low'>Low</MenuItem>
          <MenuItem value='normal'>Normal</MenuItem>
          <MenuItem value='high'>High</MenuItem>
        </Select>
      </FormControl>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}
