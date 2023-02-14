import React, { useEffect, useMemo } from "react";
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

import products from "../src/categoriesNames.json";

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
              border: "2px solid rgb(255,211,51)",
              borderRadius: "15px",
              color: "$444444",
            },
          },
          "&.MuiTab-textColorPrimary": {
            color: "black",
     
            "&.Mui-selected": {
              backgroundColor: "rgb(255,211,51)",
              border: "1px solid rgb(255,211,51)",
              borderRadius: "15px",
            },
          },
        },
      },
    },
  },
});


theme = responsiveFontSizes(theme);

export default function Categories({urlBack, productTab}) {
  const [value, setValue] = React.useState("1");
  // Check whether the value of urlBack comes from the FeaturedProducts or Categories
  // Only if Categories then we do something, if not then we set the active tab value to 1.
  const memoizedValue = useMemo(() => {
    return (urlBack == "Categories") ? productTab : '1';
  }, [urlBack, productTab])
  
  useEffect(() => {
    setValue(memoizedValue);
  }, [memoizedValue, setValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      id="Categories"
      maxWidth="md"
      sx={{
        marginBottom: "50px",
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
          sx={{ padding: { xs: "0 0 20px 5px", md: "40px 20px 20px 0px"}, textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}
          className={styles.Heading}
        >
          Categories
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
                  <Tab label="VALVE" value="1" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="CHECK VALVE" value="2" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="COATING" value="3" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="BEARING HOUSING" value="4" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="IMPELLER" value="5" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="SEAL HOUSING" value="6" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="SHAFT" value="7" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="SHAFT SLEEVE" value="8" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="RECORDING CHART" value="9" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="BOILER" value="10" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="MECHANICAL SEAL" value="11" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="DIGESTER" value="12" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="DESANDER" value="13" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="SCREW PRESS" value="14" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="VIBRATING SCREEN" value="15" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                  <Tab label="COUPLING" value="16" sx={{textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}/>
                </TabList>
                </ThemeProvider>
            </Box>
            {products.map((product, index) => (
              <TabPanel value={product.id} key={index}  sx={{ padding: { xs: "20px 0", md: "30px 0"}, textShadow: "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
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
