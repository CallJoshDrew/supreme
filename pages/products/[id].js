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
                boxShadow:"3",
                borderRadius:"100%",
              }}
            />
          </a>
          {/* <a onClick={handleBack}>
            <Typography variant="h6" sx={{ cursor: "pointer" }} >
              Back
            </Typography>
          </a> */}
        </Box>
        <Grid
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
          }}>
          <Grid container direction="row" justifyContent="space-around" alignItems="flex-start">
            <Grid item xs={12} sm={6} md={5}>
              <Box
                sx={{
                  border: 1,
                  borderRadius: "10px",
                  borderColor: "white",
                  padding: "20px 50px",
                  minWidth: "300px",
                  boxShadow: 3,
                }}>
                <Image src={product.image} alt={product.name} height={0} width={0} layout="responsive" objectFit="contain" />
              </Box>
              <Box
                sx={{
                  marginTop: "10px",
                  borderRadius: "5px",
                  backgroundColor: "rgb(255,211,51)",
                  boxShadow: 3,
                }}>
                <Typography variant="h6" align="center" sx={{ paddingTop: "5px", textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)", color:"white" }}>
                  {product.name}
                </Typography>
                <Typography align="center" sx={{ paddingBottom: "5px", color: "#444444", fontWeight:"600", textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>
                  {product.description}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                }}>
                <Box
                  sx={{
                    marginTop: { xs: "50px", sm: "10px" },
                    paddingLeft: "30px",
                  }}>
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
                      textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"
                    }}>
                    Features
                  </Box>
                  {product.features.map((feature, index) => (
                    <Typography gutterBottom key={index}>
                      - {feature}
                    </Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    backgroundColor:"rgb(255,211,51)",
                    borderRadius: "5px",
                    border: "1px",
                    padding: "20px",
                    boxShadow: 1,
                  }}>
                  <Typography variant="h6" gutterBottom color="white" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
                    Technical Information
                  </Typography>
                  <Grid container spacing={1}>
                    {Object.entries(product.technical[0]).map(([key, value], index) => (
                      <Grid item xs={12} key={index}>
                        <Typography sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
                          {key} : {value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box sx={{ paddingLeft: "30px" }}>
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
                      textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"
                    }}>
                    Applications
                  </Box>
                  {product.applications.map((application, index) => (
                    <Typography key={index}>{application}</Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    backgroundColor:"rgb(255,211,51)",
                    borderRadius: "5px",
                    border: "1px",
                    padding: "20px",
                    boxShadow: 1,
                  }}>
                  <Typography variant="h6" gutterBottom color="white" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
                    Model
                  </Typography>
                  {product.model.map((model, index) => (
                    <Typography sx={{ maxWidth: "100%"}} key={index}>
                      {model}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} align="center">
              <Button
                variant="contained"
                sx={{ boxShadow: '3',color: "white", margin: "12px 0 4px", padding: "10px 20px", fontWeight: "800",}}
                endIcon={<ShareIcon />}
                href={`https://api.whatsapp.com/send?text=https://supreme-evershine.com/products/${encodeURIComponent(product.link)}`}
                color="info"
                target="_blank">
                Share
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
