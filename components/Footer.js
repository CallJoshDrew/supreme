import React from "react";
import { Box, Typography, responsiveFontSizes, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@mui/system";

export default function Footer() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        id="Contact Us"
        sx={{
          backgroundColor: "rgb(255,211,51)",
          padding: "50px 30px",
          marginTop: "50px",
        }}
      >
        <Typography variant="h2" gutterBottom sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
          Contact Us
        </Typography>
        <Grid container justifyContent="center" alignItems="center" alignContent='center'>
          <Grid item xs={5} md={5} align='right' sx={{paddingTop: '15px'}}>
            <LocationOnIcon fontSize="large"/>
          </Grid>
          <Grid item xs={6} md={6} sx={{paddingTop: '15px', textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
            <Typography variant="h5" align="left" gutterBottom>
              Address
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
              Jalan Lintas Sibuga, lintas indsutrial park, 90000 Sandakan,
              Sabah.
            </Typography>
          </Grid>
          <Grid item xs={5} md={5} align='right' sx={{paddingTop: '15px'}}>
            <PhoneIphoneIcon fontSize="large"/>
          </Grid>
          <Grid item xs={6} md={6} sx={{paddingTop: '15px', textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
            <Typography variant="h5" align="left" gutterBottom>
              Mobile
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
              +6013-883-0602
            </Typography>
          </Grid>
          <Grid item xs={5} md={5} align='right' sx={{paddingTop: '15px'}}>
            <EmailIcon fontSize="large"/>
          </Grid>
          <Grid item xs={6} md={6} sx={{paddingTop: '10px', textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
            <Typography variant="h5" align="left">
              Email
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
              supremeevershine@hotmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
