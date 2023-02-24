import React, { useEffect } from "react";
import { Card, Box, Container, Typography, Grid, Paper, CardActionArea, CardMedia, CardContent } from "@mui/material";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import machine from "../public/machine3.jpg";
import services from "../public/services.jpg";

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
  const animate = {
    offscreen: { x: 80, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <Container maxWidth="xl" disableGutters sx={{ padding: "30px 0 0", overflowX: "hidden" }}  id="Services">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "20px", backgroundColor: "rgb(255,211,51)", padding: "30px 10px 20px", boxShadow: "3", overflow: "hidden" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.9 }}
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
      <Grid container direction={{ xs: "column", sm: "row" }} marginBottom="50px">
        <Grid item xs={12} sm={6} padding="10px" align="right">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia component="img" height="400" image={machine.src} alt="Our Services" />
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ staggerChildren: 0.5 }}>
                <motion.div variants={textAnimate}>
                  <motion.div variants={animate}>
                    <CardContent align="left">
                      <Typography variant="h6">Intelligent Control System</Typography>
                      <Typography variant="body2">- Improving Process Efficiency</Typography>
                      <Typography variant="body2">- Upgrading Factory Capacity</Typography>
                      <Typography variant="body2">- Improving Factory Productivity</Typography>
                      <Typography variant="body2">- Reducing Oil Loss</Typography>
                    </CardContent>
                  </motion.div>
                </motion.div>
              </motion.div>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} padding="10px" align="left">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia component="img" height="400" image={services.src} alt="Our Services" />
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ staggerChildren: 0.5 }}>
                <motion.div variants={textAnimate}>
                  <motion.div variants={animate}>
                    <CardContent align="left">
                      <Typography variant="h6">Our System included:</Typography>
                      <Typography variant="body2">- SCADA System in Central Control Room</Typography>
                      <Typography variant="body2">- Loading Ramp Control System</Typography>
                      <Typography variant="body2">- Sterlizer Station Control System</Typography>
                      <Typography variant="body2">- Press Station Control System</Typography>
                      <Typography variant="body2">- Clarification Station Control System</Typography>
                      <Typography variant="body2">- Kernel Recovery Station Control System</Typography>
                      <Typography variant="body2">- Power House Control System</Typography>
                      <Typography variant="body2">- Boiler Control System</Typography>
                      <Typography variant="body2">- Moving Floor Control System</Typography>
                    </CardContent>
                  </motion.div>
                </motion.div>
              </motion.div>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
