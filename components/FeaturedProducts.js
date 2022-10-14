import React from "react";
import FeaturedCard from "../components/FeaturedCard.js";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import styles from "../styles/General.module.css";

import products from "../src/dataNames.json";

import { createTheme, responsiveFontSizes } from "@mui/material";
import { Grid } from "@material-ui/core";

let theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            border: 0,
            "&:hover": {
              borderBottom: "1px solid",
              color: "rgb(255,211,51)",
            },
          },
          "&.MuiTab-textColorPrimary": {
            color: "black",
     
            "&.Mui-selected": {
              color: "rgb(255,211,51)",
              border: "1px solid",
              borderRadius: "15px",
            },
          },
        },
      },
    },
  },
});


theme = responsiveFontSizes(theme);

export default function FeaturedProducts() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      id="Featured Products"
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding:"30px 0",
      }}
    >
      <Box
        sx={{
          border: 0,
          borderColor: "rgb(255,211,51)",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ padding: { xs: "0 0 20px 5px", md: "40px 20px 20px 0px"} }}
          className={styles.Heading}
        >
          Featured Products
        </Typography>

        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box>
              <ThemeProvider theme={theme}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Tab label="SK PUMP" value="1" />
                  <Tab label="SK E-RO PUMP" value="2" />
                  <Tab label="SE-TECH" value="3" />
                  <Tab label="TRP" value="4" />
                  <Tab label="SEW EURODRIVE" value="5" />
                  {/* <Tab label="VALVE" value="6" />
                  <Tab label="ENMIN" value="7" />
                  <Tab label="CHECK VALVE" value="8" />
                  <Tab label="COATING" value="9" />
                  <Tab label="BEARING HOUSING" value="10" />
                  <Tab label="IMPELLER" value="11" />
                  <Tab label="SEAL HOUSING" value="12" /> */}
                  {/* <Tab label="SHAFT" value="13" /> */}
                </TabList>
                </ThemeProvider>
            </Box>
            {products.map((product, index) => (
              <TabPanel value={product.id} key={index}  sx={{ padding: { xs: "20px 0", md: "30px 0"} }}>
                <Grid
                  container direction="row" justifyContent="flex-start" spacing={2} 
                >
                  {product.categories.map((category, index) => (
                    
                    <Grid item key={index} xs={6} md={3}>
                      <FeaturedCard category={category} index={category.id} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}
