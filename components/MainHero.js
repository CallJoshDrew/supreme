import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Hero from "../public/pic2.jpg";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

export default function MediaCard() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
        marginTop: { xs: "60px", sm: "50px", md: "70px" },
      }}
    >
      <CardMedia
        component="img"
        height="400px"
        image={Hero.src}
        alt="Professional"
      />
      <Typography
        variant="h4"
        sx={{
          padding: "20px 30px",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "white",
          textDecoration: "none",
          backgroundColor: "rgb(255,211,51)",
          width: "100%",
          textAlign: "center",
          fontFamily: "Playfair Display, serif",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
          textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
        }}
      >
        Together We Help, We Grow, We Prosper!
      </Typography>
      <Box sx={{ marginTop: {xs:'30px', sm:'40px'}, height: {xs: '230px', sm: '510px'} }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ZER6zKx7e84"
          
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Container>
  );
}
