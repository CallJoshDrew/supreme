import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

import { motion, Variants } from "framer-motion";

import TimelineIcon from '@mui/icons-material/Timeline';
export default function Services() {
  const textAnimate = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "linear",
        duration: 1,
      },
    },
  };
  const phaseAnimate = {
    offscreen: { y: 80, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <Container maxWidth="xl" disableGutters sx={{ padding: "30px 0 0", overflowX: "hidden" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "20px", backgroundColor: "rgb(255,211,51)", padding: "30px 10px 20px", boxShadow: "3", overflow: "hidden" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.9 }}
          transition={{ staggerChildren: 0.5 }}>
          <motion.div variants={textAnimate}>
            <Typography
              variant="h2"
              component="div"
              sx={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              Our Services
            </Typography>
          </motion.div>
          <motion.div variants={phaseAnimate}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "#152934",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}
              gutterBottom>
              Automation for Palm Oil
            </Typography>
          </motion.div>
        </motion.div>
      </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="center" marginBottom="50px">
        <Grid item xs={6}>
        <Paper elevation={3} sx={{
              background: "linear-gradient(to right bottom, #FCEE21, rgb(255,211,51))",
              height: 50,
              width: "100vw",
            }}>
          
            <Typography variant="h6" sx={{color:"$444444", textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}} endIcon="TimelineIco">Improving Process Efficiency</Typography>
            {/* <Typography>Upgrading Factory Capacity</Typography>
              <Typography>Improving Factory Productivity</Typography>
              <Typography>Reducing Oil Loss</Typography> */}
       </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
