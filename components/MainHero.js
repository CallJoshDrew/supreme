import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Hero from "../public/pic2.jpg";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { motion, Variants } from "framer-motion";

export default function MediaCard() {
  const textAnimate = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "backInOut",
        duration: 1,
      },
    },
  };
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
      }}>
      <CardMedia component="img" height="400px" image={Hero.src} alt="Professional" />
      <Box
        sx={{
          backgroundColor: "rgb(255,211,51)",
          width: "100%",
          boxShadow: "2",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
          overflow: "hidden",
        }}>
        <motion.div variants={textAnimate} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.9 }}>
          <Typography
            variant="h4"
            sx={{
              padding: "20px 30px",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "white",
              textAlign: "center",
              fontFamily: "Playfair Display, serif",
              textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
            }}>
            Together We Help, We Grow, We Prosper!
          </Typography>
        </motion.div>
      </Box>
      {/* <Box sx={{ marginTop: { xs: "30px", sm: "40px" }, height: { xs: "230px", sm: "510px" }, boxShadow: "3" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/ZER6zKx7e84"
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <a href="https://www.youtube.com/watch?v=ZER6zKx7e84" target="_blank" rel="noopener noreferrer">Open on YouTube</a>
          <p style={{ color: "#666", marginTop: 4, fontSize: "0.9rem" }}>If the video is private or embedding is disabled, open it on YouTube.</p>
        </div>
      </Box> */}
    </Container>
  );
}
