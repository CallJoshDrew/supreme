import { products } from "../../src/dataDetails";
import ShareIcon from "@mui/icons-material/Share";
import CircularProgress from "@mui/material/CircularProgress";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";

import { useRouter } from "next/router";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { Grid } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@mui/material";
import { motion, Variants } from "framer-motion";

export default function Details() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { query } = useRouter();
  const id = query.id;
  const router = useRouter();
  const product = products.find((p) => p.name === id);

  if (!product) {
    return (
      <Box sx={{ position: "fixed", top: "45%", left: "45%" }}>
        <CircularProgress color="info" />
      </Box>
    );
  }
  const urlBack = product.urlBack;
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
    offscreen: { x: 80, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
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
                fontSize: "2rem",
                cursor: "pointer",
                boxShadow: 2,
                borderRadius: "50%",
              }}
            />
          </a>
          {/* <a onClick={handleBack}>
            <Typography variant="h6" sx={{ cursor: "pointer" }} >
              Back
            </Typography>
          </a> */}
        </Box>

        <Grid container direction="row" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
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
              <Image src={product.image} alt={product.name} height={0} width={0} layout="responsive" objectFit="contain" />
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
                {product.description}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: { xs: "30px", sm: "20px" },
                padding: "20px 0 20px 30px",
                boxShadow: { xs: 0, sm: 2 },
                borderRadius: "5px",
                overflowX: "hidden",
              }}>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.5 }}>
                <motion.div variants={textAnimate}>
                  <Box
                    component="button"
                    sx={{
                      border: "1px solid rgb(255,211,51)",
                      borderRadius: "5px",
                      boxShadow: 1,
                      marginBottom: "20px",
                      padding: "10px 15px",
                      backgroundColor: "rgb(255,211,51)",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "white",
                      textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
                    }}>
                    Features
                  </Box>
                </motion.div>
                <motion.div variants={phaseAnimate}>
                  {product.features.map((feature, index) => (
                    <Typography gutterBottom key={index}>
                      - {feature}
                    </Typography>
                  ))}
                </motion.div>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                backgroundColor: "rgb(255,211,51)",
                borderRadius: "5px",
                border: "1px",
                padding: "20px",
                boxShadow: 2,
              }}>
              <Typography
                variant="h6"
                gutterBottom
                color="white"
                sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
                Technical Information
              </Typography>
              <Grid container spacing={1}>
                {Object.entries(product.technical[0]).map(([key, value], index) => (
                  <Grid item xs={12} key={index}>
                    <Typography sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
                      {key} : {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ padding: "20px 0 20px 30px", marginBottom: "25px", borderRadius: "5px", boxShadow: { xs: 0, sm: 2 },overflowX: "hidden", }}>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.5 }}>
                <motion.div variants={textAnimate}>
                  <Box
                    component="button"
                    sx={{
                      border: "1px solid rgb(255,211,51)",
                      borderRadius: "5px",
                      boxShadow: 1,
                      marginBottom: "20px",
                      padding: "10px 15px",
                      backgroundColor: "rgb(255,211,51)",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "white",
                      textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
                    }}>
                    Applications
                  </Box>
                </motion.div>
                <motion.div variants={phaseAnimate}>
                  {product.applications.map((application, index) => (
                    <Typography key={index}>{application}</Typography>
                  ))}
                </motion.div>
              </motion.div>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgb(255,211,51)",
                borderRadius: "5px",
                border: "1px",
                padding: "20px",
                boxShadow: 2,
              }}>
              <Typography
                variant="h6"
                gutterBottom
                color="white"
                sx={{ textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
                Model
              </Typography>
              {product.model.map((model, index) => (
                <Typography
                  sx={{ maxWidth: "100%", textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}
                  key={index}>
                  {model}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} align="center">
            <Button
              variant="contained"
              sx={{
                boxShadow: 2,
                color: "white",
                margin: "12px 0 4px",
                padding: "10px 20px",
                fontWeight: "800",
                textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}
              endIcon={<ShareIcon />}
              href={`https://api.whatsapp.com/send?text=https://supreme-evershine.com/products/${encodeURIComponent(product.link)}`}
              color="info"
              target="_blank">
              Share
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
