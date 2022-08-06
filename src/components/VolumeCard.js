import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

  

export default function VolumeCard(props) {
  const {notifications, setNotifications} = props;
  const [volume, setVolume] = useState(0);
  const onChange =(e) =>{
    setVolume(e.target.value);

    if(volume >= 80){
      if(!notifications.length){
        setNotifications(arr => [...arr, 'Listening to loud music can damage your hearing.'])
      } else if(!notifications.find(el=>el==='Listening to loud music can damage your hearing.')){
        setNotifications(arr => [...arr, 'Listening to loud music can damage your hearing.'])
      };
    };
  };
  return (
    <Box sx={{ minWidth: 275, minHeight: 215, margin: 5}}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent sx={{height: 130, width: 250}}>
      <Typography variant="h5" sx={{fontWeight: 700}} component="div">
        Master Volume
      </Typography>
      <Typography sx={{width: 250}} variant="body2">
        Overrides all other sound settings in this application
      </Typography>
    </CardContent>
    <CardActions>
      <Stack spacing={2} direction="row" sx={{mb:1, width: 265}} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={volume} onChange={onChange}/>
        <VolumeUp />
      </Stack>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}
