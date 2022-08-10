import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import '../App.css';


const About = (props) => {

  return (
    <Box className="about-card">
      <Card>
        <h4>
          <Link style={{textDecoration: "none"}} to="/dash">
            Go to Dashboard
            <Button 
            variant="contained"
            color="secondary"
          >
            Dashboard Page
          </Button>
          </Link>
        </h4>
        <CardContent >
          <Typography variant="h5" sx={{fontWeight: 700}} component="div">
            About Us
          </Typography>
          <Typography sx={{width: 750, padding: 2}} variant="body2">
            We are a fledgling music streaming website company. Working to provide our customers with high quality content. This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the body tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
          </Typography>
          <Typography sx={{width: 750, padding: 2}} variant="body2">
          This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the body tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default About;