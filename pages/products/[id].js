import { products } from "../../src/dataDetails";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
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
    return <div>Product not found</div>;
  }
  const urlBack = product.urlBack;
  const productTab = product.productTab;
  const handleBack = () => {
    router.push({
      pathname: '/',
      query: {
        urlBack,
        productTab,
      }
    })
  }
  return (
    <Container maxWidth="md" sx={{ padding: { xs: "20px 15px", sm: "10px 15px" } }}>
      <ThemeProvider theme={theme}>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            alignItems: "center",
            marginBottom: { xs: "20px", sm: "20px" },
          }}>
          <a onClick={handleBack}>
            <ArrowCircleLeftIcon
              sx={{
                color: "rgb(255,211,51)",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
          </a>
          <a onClick={handleBack}>
            <Typography variant="h6" sx={{ cursor: "pointer" }} >
              Back
            </Typography>
          </a>
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
                  borderColor: "rgb(255,211,51)",
                  padding:"20px 50px",
                  minWidth:'300px',
                }}>
                <Image src={product.image} alt={product.name} height={0} width={0} layout='responsive' objectFit='contain'/>
              </Box>
              <Typography variant="h6" align="center" sx={{ padding: { xs: "15px", sm: "20px" } }}>
                {product.name}
              </Typography>
              <Box
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "rgb(255,211,51)",
                }}>
                <Typography align="center" sx={{ padding: { xs: "5px", sm: "15px" } }}>
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
                  <Typography variant="h6" gutterBottom>
                    Features
                  </Typography>
                  {product.features.map((feature, index) => (
                    <Typography gutterBottom key={index}>- {feature}</Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    border: 1,
                    borderRadius: "5px",
                    borderColor: "rgb(255,211,51)",
                    padding: "20px",
                  }}>
                  <Typography variant="h6" gutterBottom>
                    Technical Information
                  </Typography>
                  <Grid container spacing={1}>
                  {Object.entries(product.technical[0]).map(([key, value], index) => (
                    <Grid item xs={12} key={index}>
                      <Typography>{key} : {value}</Typography>
                    </Grid>
                  ))}
                  </Grid>
                </Box>
                <Box sx={{ paddingLeft: "30px" }}>
                  <Typography variant="h6" gutterBottom>
                    Applications
                  </Typography>
                  {product.applications.map((application, index) => (
                    <Typography key={index}>{application}</Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    border: 1,
                    borderRadius: "5px",
                    borderColor: "rgb(255,211,51)",
                    padding: "30px",
                  }}>
                  <Typography variant="h6" gutterBottom>
                    Model
                  </Typography>
                  {product.model.map((model, index) => (
                    <Typography sx={{maxWidth:"100%"}}key={index}>- {model}</Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        </ThemeProvider>
    </Container>
  );
}