import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../styles/General.module.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@mui/material";
export default function FeaturedCard({ category, index}) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  // console.log(index)
  return (
    <Card
      key={index}
      sx={{
        maxWidth: "300px",
        padding: "0",
        borderRadius: "15px",
        boxShadow: 0,
        border: 1,
        borderColor: "rgb(255,211,51)",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        image={category.image}
        alt={category.alt}
        sx={{ padding: "25px" }}
      />
      <ThemeProvider theme={theme}>
        <Typography
          variant="subtitle2"
          height="60px"
          component="div"
          backgroundColor="rgb(255,211,51)"
          padding="10px"
          fontWeight="bold"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={`/products/` + category.name}>
            <a className={styles.buttonLink}>{category.name}</a>
          </Link>
        </Typography>
      </ThemeProvider>
    </Card>
  );
}
