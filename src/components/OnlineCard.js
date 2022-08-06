import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';


export default function OnlineCard(props) {
  const {notifications, setNotifications} = props;
  const [online, setOnline] = useState(false);

  const handleChange = () => {
    setOnline(!online);
    
    if(!online){
      if(!notifications.length){
        setNotifications(arr => [...arr, "Your application is offline. You won't be able to share or stream music to other devices."])
      };
      if(notifications.length >1 && !notifications.find(el=>el==="Your application is offline. You won't be able to share or stream music to other devices.")){
        setNotifications(arr => [...arr, "Your application is offline. You won't be able to share or stream music to other devices."])
      };
    };
  }
  return (
    <Box sx={{ minWidth: 275, minHeight: 215, margin: 5}}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent sx={{height: 130, width: 250}}>
      <Typography variant="h5" sx={{fontWeight: 700}} component="div">
        Online Mode
      </Typography>
      <Typography sx={{width: 250}} variant="body2">
        Is this application connected to the internet?
      </Typography>
    </CardContent>
    <CardActions>
      <Switch onClick={handleChange} defaultChecked>Learn More</Switch>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}
