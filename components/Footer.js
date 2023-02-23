import React from "react";
import { Box, Typography, responsiveFontSizes, Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { motion, Variants } from "framer-motion";

export default function Footer() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const textAnimate = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "linear",
        duration: 2,
      },
    },
  };
  const phaseAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 2,
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        id="Contact Us"
        sx={{
          backgroundColor: "rgb(255,211,51)",
          padding: "50px 20px",
          marginTop: "50px",
          overflow: "hidden",
        }}>
        <Grid container maxWidth="md">
          <Grid item xs={12}>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ staggerChildren: 0.5 }}>
              <motion.div variants={textAnimate}>
                <Typography
                  align="left"
                  variant="h2"
                  gutterBottom
                  sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
                  Contact Us
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
        <Grid container maxWidth="md" justifyContent="center" alignItems="center" alignContent="center">
          <Grid item xs={2} sm={1} sx={{ paddingTop: "15px" }}>
            <LocationOnIcon fontSize="large" />
          </Grid>
          <Grid
            item
            xs={10}
            sm={11}
            sx={{ paddingTop: "5px", textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
            <Typography variant="h5">Address</Typography>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ staggerChildren: 0.5 }}>
              <motion.div variants={phaseAnimate}>
                <Typography variant="h6" sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
                  Jalan Lintas Sibuga, lintas indsutrial park, 90000 Sandakan, Sabah.
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignContent="center" marginTop="20px">
            <Grid item xs={2} sm={1} sx={{ paddingTop: "15px" }}>
              <PhoneIphoneIcon fontSize="large" />
            </Grid>
            <Grid
              item
              xs={10}
              sm={11}
              sx={{ paddingTop: "5px", textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
              <Typography variant="h5">Mobile</Typography>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.9 }}
                transition={{ staggerChildren: 0.5 }}>
                <motion.div variants={phaseAnimate}>
                  <Button
                    target="_blank"
                    variant="h6"
                    href="https://wa.me/60138830602?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20company%20products%20and%20services!"
                    sx={{
                      fontSize: "1.1rem",
                      color: "black",
                      padding: "0",
                      textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
                    }}>
                    +6013-883-0602
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignContent="center" marginTop="20px">
            <Grid item xs={2} sm={1} sx={{ paddingTop: "15px" }}>
              <EmailIcon fontSize="large" />
            </Grid>
            <Grid
              item
              xs={10}
              sm={11}
              sx={{ paddingTop: "10px", textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
              <Typography variant="h5">Email</Typography>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.9 }}
                transition={{ staggerChildren: 0.5 }}>
                <motion.div variants={phaseAnimate}>
                  <Typography variant="h6" sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
                    supremeevershine@hotmail.com
                  </Typography>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
