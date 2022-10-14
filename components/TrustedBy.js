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

export default function TrustedBy() {

  return (
    <Container sx={{ margin: "30px 0", backgroundColor: "#f5f5f5", padding:"30px 0" }}>
      <Grid container direction="column" justifyContent="center" alignItems="center"
      >
        <Typography
          variant="h2"
          component="div"
          sx={{ color: "rgb(255,211,51)", fontWeight: "700", textAlign:"center", padding:"50px 0 0"}}
        >
          TRUSTED BY
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: "#152934", fontWeight: "bold", textAlign:"center"}}
          gutterBottom
        >
          Happy clients since 2002!
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
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
            /></Box>
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
            /></Box>
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
            /></Box>
          
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
            /></Box>
          
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
            /></Box>
          
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
            /></Box>
          
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
            /></Box>
          
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
            /></Box>
          
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
            /></Box>
          
        </Grid>
      </Grid>
    </Container>
  );
}
