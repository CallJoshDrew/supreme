import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import eBrochure from "../public/eBrochure.png";
import { Button, responsiveFontSizes } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Brochure() {
  return (
    <Container maxWidth="md" id="e-Brochure">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: 2,
            borderColor: "#0099b3",
            borderRadius: "5px",
            padding: { xs: "30px 25px 10px", md: "25px" },
          }}
        >
          <Grid>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                variant="h2"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  backgroundColor: "white",
                  padding: "0 15px",
                  position: "absolute",
                  top: { xs: -60, md: -55 },
                  left: { xs: -10, md: 0 },
                }}
              >
                e-Brochure
              </Box>
            </Box>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid
              item
              xs={8}
              md={3}
              component="img"
              alt="e-Brochure"
              rel="noopener"
              src={eBrochure.src}
            />

            <Grid item xs={12} md={9}>
              <Typography component="div" align="left" variant="h6">
                Our e-Brochure Product Catalogue 2022 is out! Find out more
                about our products and what we offer in our latest e-Brochure.
                Simply click below button (either Email or Whatsapp) and send us
                your details and then we will send you the FREE copy of our
                brochure in PDF format.
              </Typography>
              <Button
                size="small"
                variant="contained"
                href="https://forms.gle/wPacsBn4KE2n1QyB9"
                target="_blank"
                color="secondary"
                sx={{
                  my: 2,
                  marginRight: 2,
                  p: 1.5,
                }}
              >
                Email
              </Button>
              <Button
                size="small"
                variant="contained"
                href="https://wa.me/60138830602?text=Hello,%20I%20would%20like%20acopy%20of%20e-brochure%202022"
                target="_blank"
                color="secondary"
                sx={{
                  my: 2,
                  p: 1.5,
                }}
              >
                Whatsapp
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Container>
  );
}
