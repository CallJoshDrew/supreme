import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import IoIGroup from "../public/clients/ioiGroup.png";
import Ijm from "../public/clients/ijm.png";
import SimeDarby from "../public/clients/SimeDarby.png";
import Petron from "../public/clients/petron.png";
import SabahSoftwoods from "../public/clients/SabahSoftwoods.png";
import TianSiang from "../public/clients/TianSiang.png";
import Wilmar from "../public/clients/wilmar.png";
import Genting from "../public/clients/Genting.png";
import Bousted from "../public/clients/Bousted.png";
import KLK from "../public/clients/KLK.png";
import { motion, Variants } from "framer-motion";

export default function TrustedBy() {
  const textAnimate = {
    offscreen: {  opacity: 0 },
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
    <Container maxWidth="xl" disableGutters sx={{ padding: "30px 0 0", overflowX: "hidden",}}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "20px", backgroundColor: "rgb(255,211,51)",padding:"30px 10px 20px", boxShadow: "3", overflow: "hidden" }}>
          <motion.div initial={"offscreen"} whileInView={"onscreen"} viewport={{once:false, amount:0.9}} transition={{staggerChildren:0.5}}>

          
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
            TRUSTED BY
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
            Happy clients since 2014!
          </Typography>
        </motion.div></motion.div>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" >
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={IoIGroup.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={Ijm.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={SimeDarby.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={Petron.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={SabahSoftwoods.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={TianSiang.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={Wilmar.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={Genting.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="The IOIGROUP"
              src={Bousted.src}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
              }}
              alt="KLK Berhad"
              src={KLK.src}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
