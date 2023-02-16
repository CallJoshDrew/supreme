import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { products } from "../src/pendingProducts.js";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";

function WorkProgress() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { query } = useRouter();
  const router = useRouter();
  const id = query.id;

  const product = products.find((p) => p.name === id);
  if (!product) {
    return (
      <Box sx={{ position: "fixed", top: "45%", left: "45%" }}>
        <CircularProgress color="info" />
      </Box>
    );
  }

  const urlBack = "Categories";
  const productTab = product.productTab;
  const handleBack = () => {
    router.push({
      pathname: "/",
      query: {
        urlBack,
        productTab,
      },
    });
  };
  return (
    <Container maxWidth="md" sx={{ padding: { xs: "20px 15px", sm: "10px 15px" } }}>
      <ThemeProvider theme={theme}>
        <Box
          component="div"
          sx={{
            position: "fixed",
            bottom: "0px",
            right: "15px",
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            alignItems: "center",
            marginBottom: { xs: "20px", sm: "20px" },
          }}>
          <a onClick={handleBack}>
            <CancelIcon
              sx={{
                color: "white",
                backgroundColor: "rgb(255,211,51)",
                fontSize: { xs: "2rem", sm: "2.7rem" },
                cursor: "pointer",
                boxShadow: 2,
                borderRadius: "50%",
              }}
            />
          </a>
        </Box>
        <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={3} wrap="nowrap">
          <Grid item xs={12} sm={6} md={6} align="center">
            <Box
              sx={{
                border: 1,
                borderRadius: "10px",
                borderColor: "white",
                padding: "20px",
                maxHeight: "400px",
                minWidth: "300px",
                boxShadow: 2,
              }}>
              <Image src={product.image} alt={product.name} height={200} width={300}  objectFit="contain"/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                borderRadius: "5px",
                backgroundColor: "rgb(255,211,51)",
                boxShadow: 2,
                padding: "10px 5px",
              }}>
              <Typography
                variant="h6"
                align="center"
                sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)", color: "white" }}>
                {product.name}
              </Typography>
              <Typography
                align="center"
                sx={{
                  color: "#444444",
                  fontWeight: "600",
                  textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
                }}>
                Category: {product.brand}
              </Typography>{" "}
            </Box>
          </Grid>
        </Grid>
        <Grid container alignItems="center" sx={{ boxShadow:2, marginTop:"10px", borderRadius:'5px'}}>
          <Grid item xs={3} sm={2}align="center">
            <InfoIcon fontSize="large"/>
          </Grid>
          <Grid item xs={9} sm={10}>
            <Typography
              align="left"
              sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)", marginTop:"5px", padding: {xs:"15px 10px 15px 0", sm:"15px 50px 15px 5px"} }}>
              At the moment, no product details are available. Please check back later as we will be updating them.
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default WorkProgress;
