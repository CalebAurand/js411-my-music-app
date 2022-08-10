import React, {useState} from 'react';
import OnlineCard from './OnlineCard';
import VolumeCard from './VolumeCard';
import SoundQualCard from './SoundQualCard';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Dashboard = (props) => {
  const {userName} = props;
  const [notifications, setNotifications] = useState([]);


  return (
    <div className="dashboard">
      <h2 style={{color: "grey"}}>Hello {userName} old chum!</h2>
      <h4>
        <Link style={{textDecoration: "none"}} to="/about">
          Learn more about us here.
          <Button 
            variant="contained"
            color="secondary"
          >
            About Page
          </Button>
        </Link>
      </h4>
      <section style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <OnlineCard notifications={notifications} setNotifications={setNotifications} />
        <VolumeCard notifications={notifications} setNotifications={setNotifications} />
        <SoundQualCard notifications={notifications} setNotifications={setNotifications} />
      </section>
      <h3>System Notifications:</h3>
      {notifications.length ? 
      <div>
        {notifications.map((note, index)=>(
          <p key={index} style={{color: "red"}}>{note}</p>
        ))}
      </div>
      : <p>No new notifications to display.</p>
      }
    </div>
  )
}

export default Dashboard;